import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ethers } from 'ethers';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import addresses from '../../../../environment/contract-address.json'
import Election from '../../../../blockchain/build/contracts/Election.json'
import { VotersdbapiService } from 'src/app/services/votersdbapi.service'
import { ToastrService } from 'ngx-toastr';

declare let window: any;

@Component({
  selector: 'app-castvote',
  templateUrl: './castvote.component.html',
  styleUrls: ['./castvote.component.css']
})
export class CastvoteComponent implements OnInit {
  public voteForm: FormGroup;
  public signer: any;
  public electionContract: any;
  public candidatecount: any;
  public candidatedetails: any;
  public candidatearray: any = []
  public signerAddress: any;
  public voterstatus: any;
  public selectionarray: any = [];
  public info: any;
  constructor(private router: Router, private toastr: ToastrService, private loader: NgxUiLoaderService, private voterdb: VotersdbapiService) {
    this.voteForm = new FormGroup({
      voteChoice: new FormControl()
    });
  }

  async ngOnInit() {
    this.loader.start()
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      this.signer = provider.getSigner();
      if (await this.signer.getChainId() !== 4) {
        this.router.navigate(['voter/connect-metamask'])
      }
      const isMetaMaskConnected = async () => {
        const accounts = await provider.listAccounts();
        return accounts.length > 0;
      }
      await isMetaMaskConnected().then((connected) => {
        if (!connected) {
          this.router.navigate(['voter/connect-metamask'])
        }
      })
      this.electionContract = new ethers.Contract(addresses.electioncontract, Election.abi, this.signer);
      this.signerAddress = await this.signer.getAddress()
      this.candidatecount = await this.electionContract.candidatesCount();
      this.voterstatus = await this.electionContract.voters(this.signerAddress);
      await this.array();
    } catch {
      this.router.navigate(['voter/connect-metamask'])
    }

    this.loader.stop();
  }
  async array() {
    this.loader.start()
    for (var i = 1; i <= this.candidatecount; i++) {
      const details = await this.electionContract.candidates(i)
      this.candidatearray.push(details)
    }
    for (var i = 1; i <= this.candidatecount; i++) {
      const cand = i;
      this.selectionarray.push(cand);
    }
    this.loader.stop()
  }

  async vote(id:any) {
    this.loader.start();
    const selectedcand = id;
    this.loader.stop();
    this.loader.start();
    const txResponse = await this.electionContract.vote(selectedcand, { from: this.signerAddress });
    const txReceipt = await txResponse.wait();
    const voterid = JSON.parse(localStorage.getItem('Voter_id') || '{}')
    this.voterdb.getVoterData(voterid).subscribe((info: any = []) => {
      this.info = info;
      const update = this.info[0]
      update.voting_status = true
      update.voter_address = this.signerAddress
      update.txn_hash = txReceipt.transactionHash
      localStorage.setItem('txn_hash',JSON.stringify(txReceipt.transactionHash))
      const udata = JSON.stringify(update)
      this.voterdb.changeStatus(voterid, udata).subscribe((data) => { })
      this.loader.stop();
      this.loader.start();
      this.router.navigate(['voter/voting-success']);
      this.loader.stop();
    })

  }

}
