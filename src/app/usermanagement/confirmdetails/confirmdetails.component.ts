import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { VotersdbapiService } from 'src/app/services/votersdbapi.service';


@Component({
  selector: 'app-confirmdetails',
  templateUrl: './confirmdetails.component.html',
  styleUrls: ['./confirmdetails.component.css']
})
export class ConfirmdetailsComponent implements OnInit {
  info:any = [];
  dbid:any;
  firstname: any;
  lastname: any;
  voting_status:any;
  voter_id: any;
  stored_voter_id:any;
  phone: any;
  constructor(private voterapi: VotersdbapiService, private router: Router, private loader: NgxUiLoaderService) { }

  ngOnInit() {
    this.getdata()
  }
  async getdata(){
    this.stored_voter_id = JSON.parse(localStorage.getItem('Voter_id') || '{}')
    await this.voterapi.getVoterData(this.stored_voter_id).subscribe((info:any=[])=>{
    this.info = info;
    const data = this.info[0]
    this.dbid= data.id
    this.firstname = data.firstname
    this.lastname = data.lastname
    this.voting_status = data.voting_status
    this.voter_id = data.Voter_id
    this.phone = data.phone
    if (this.voting_status===true){
      this.router.navigate(['voter/voting-success'])
    }
    })
  }
  connectmetamask(){
    this.loader.start()
    this.router.navigate(['voter/connect-metamask'])
    this.loader.stop()
  }
}
