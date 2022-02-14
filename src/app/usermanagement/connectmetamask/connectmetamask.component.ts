import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ethers } from 'ethers';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import addresses from '../../../../environment/contract-address.json'
import Election from '../../../../blockchain/build/contracts/Election.json'
import { ToastrService } from 'ngx-toastr';

declare let window:any
@Component({
  selector: 'app-connectmetamask',
  templateUrl: './connectmetamask.component.html',
  styleUrls: ['./connectmetamask.component.css']
})
export class ConnectmetamaskComponent implements OnInit {
  public signer: any;
  public electionContract: any;
  public candidatecount : any;
  public candidatedetails : any;
  public candidatearray:any = []
  public signerAddress: any;
  public voterstatus: any;
  public selectionarray:any = [];
  constructor(private router: Router, private loader: NgxUiLoaderService, private toastr:ToastrService) { 
  }

  ngOnInit(){
    this.connectwallet()
  }
  async connectwallet(){
    this.loader.start()
    try{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      this.signer = provider.getSigner();
    }catch{
      this.loader.stop()
      this.toastr.error("Metamask not found !")
    }
    if(await this.signer.getChainId() !== 4){
      this.toastr.info("Change Network to Rinkeby and Refresh !","",{closeButton: true})
    }
    this.loader.stop()
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    this.signerAddress = await this.signer.getAddress()
    this.loader.stop()
  }
  async castvote(){
    this.loader.start()
    if(await this.signer.getChainId() !== 4){
      this.toastr.info("Change Network to Rinkeby and Refresh !","",{closeButton: true})
      this.loader.stop()
    }
    this.electionContract = new ethers.Contract(addresses.electioncontract, Election.abi, this.signer);
    const candstatus = await this.electionContract.voters(this.signerAddress)
    if (candstatus){
      this.toastr.error("Please use a unique metamask account to vote !")
      this.loader.stop()
    }
    else{
      this.router.navigate(['voter/cast-vote']);
      this.loader.stop();
    }
  }

}
