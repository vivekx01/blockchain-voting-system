import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ethers } from 'ethers';
import addresses from '../../../../environment/contract-address.json'
import Election from '../../../../blockchain/build/contracts/Election.json'
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
declare let window: any;


@Component({
  selector: 'app-realtimeresults',
  templateUrl: './realtimeresults.component.html',
  styleUrls: ['./realtimeresults.component.css']
})
export class RealtimeresultsComponent implements OnInit {
  public signer: any;
  public electionContract: any;
  public candidatecount: any;
  public candidatedetails: any;
  public candidatearray: any = []
  public signerAddress: any;
  public voterstatus: any;
  public candidatenamearray: any = []
  public candidatevotearray: any = []
  constructor(private loader: NgxUiLoaderService, private toastr: ToastrService) { }
  async ngOnInit() {
    this.connectmetamask()
  }
  async connectmetamask() {
    //Fetching the data from smart contract
    try{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      this.signer = provider.getSigner();
    }catch{
      this.loader.stop()
      this.toastr.error("Metamask not found !")
    }
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    this.loader.stop()
    this.signerAddress = await this.signer.getAddress()
    this.electionContract = new ethers.Contract(addresses.electioncontract, Election.abi, this.signer);
    this.signerAddress = await this.signer.getAddress()
    this.getdata()
  }
  reload(){
    window.location.reload()
  }
  async getdata(){
    this.loader.start()
    this.candidatecount = await this.electionContract.candidatesCount();
    this.voterstatus = await this.electionContract.voters(this.signerAddress);
    //Creating an array of arrays from the received smart contract data
    for (var i = 1; i <= this.candidatecount; i++) {
      const details = await this.electionContract.candidates(i)
      this.candidatearray.push(details)
    }
    //Creating candidatenamearry for graph
    for (var i = 0; i <= 4; i++) {
      const temparray = this.candidatearray[i]
      const name = temparray.name
      this.candidatenamearray.push(name)
    }
    //Creating candidatevoterarray for graph
    for (var i = 0; i <= 4; i++) {
      const temparray = this.candidatearray[i]
      const count = temparray.voteCount.toNumber()
      this.candidatevotearray.push(count)
    }
    this.constructgraph()
  }
  async constructgraph() {
    // Creating a Data Representation Graph
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: this.candidatenamearray,
        datasets: [{
          label: 'Number of Votes',
          data: this.candidatevotearray,
          backgroundColor: [
            '#20bf55',
            '#01baef',
            '#a40606',
            '#380036',
            '#ec9f05',
          ],
          borderColor: [
            '#20bf55',
            '#01baef',
            '#a40606',
            '#380036',
            '#ec9f05',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    this.loader.stop()
  }

}
