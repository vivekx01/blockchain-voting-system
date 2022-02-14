import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotersdbapiService } from 'src/app/services/votersdbapi.service';


@Component({
  selector: 'app-votingsuccess',
  templateUrl: './votingsuccess.component.html',
  styleUrls: ['./votingsuccess.component.css']
})

export class VotingsuccessComponent implements OnInit {
  constructor(private router: Router, private voterapi: VotersdbapiService) { }
  public tx_hash:any
  public info: any
  ngOnInit() {
    this.fetchdata()
  }
  async fetchdata(){
    const voterid = JSON.parse(localStorage.getItem('Voter_id') || '{}')
    if(localStorage.getItem('txn_hash')){
      const transhash = JSON.parse(localStorage.getItem('txn_hash') || '{}')
      this.tx_hash = transhash
    } else{
      console.log("The item does not exist so fetching from api")
      await this.voterapi.getVoterData(voterid).subscribe((data:any =[])=>{
        this.info = data[0]
        this.tx_hash = this.info.txn_hash
        console.log(this.tx_hash)
      })
    }

   
  }
  etherscanverify(){
    const url = `https://rinkeby.etherscan.io/tx/${this.tx_hash}/`
    window.open(url,"_blank")
  }

}
