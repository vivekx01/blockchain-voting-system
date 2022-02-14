import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { VotersdbapiService } from 'src/app/services/votersdbapi.service';



@Component({
  selector: 'app-voterverify',
  templateUrl: './voterverify.component.html',
  styleUrls: ['./voterverify.component.css']
})
export class VoterverifyComponent implements OnInit {
  otp!:string;
  verify:any;
  info:any;
  constructor(private router: Router, private loader: NgxUiLoaderService, private toastr: ToastrService, private voterapi: VotersdbapiService) { }
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  ngOnInit(){
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
  }
   handleClick(){
    this.loader.start()
    var credentials = firebase.auth.PhoneAuthProvider.credential(this.verify,this.otp)
    firebase.auth().signInWithCredential(credentials).then((response) =>{
      localStorage.setItem("user_data", JSON.stringify(response));
      const voterid = JSON.parse(localStorage.getItem('Voter_id') || '{}');
      this.voterapi.getVotingStatus(voterid).subscribe((data:any =[])=>{
        const votingstatus = data.voting_status
        if (votingstatus){
          this.toastr.success("Login Success","",{closeButton: true})
          this.router.navigate(["/voter/voting-success"]);
          this.loader.stop()
        }
        else{
          this.toastr.success("Login Success","",{closeButton: true})
          this.router.navigate(["/voter/confirm-details"]);
          this.loader.stop()
        }
      })
      
    }).catch((error)=>{
      this.toastr.error("OTP Invalid !");
      this.loader.stop();
    })
  }
}
