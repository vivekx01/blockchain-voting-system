import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { VotersdbapiService } from 'src/app/services/votersdbapi.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-voterlogin',
  templateUrl: './voterlogin.component.html',
  styleUrls: ['./voterlogin.component.css']
})
export class VoterloginComponent implements OnInit {
  phoneNumber: any;
  phone:any;
  voterID: any;
  info:any;
  data:any;
  reCaptchaVerifier: any;
  apiphne:any;
  apivoterid: any;

  constructor(private router: Router, private loader: NgxUiLoaderService, private voterdb: VotersdbapiService, private toastr:ToastrService) { }

  ngOnInit(){
    firebase.initializeApp(environment.firebase)
  }

  getOTP(){
    const prefix = "+91"
    this.phoneNumber = prefix + this.phone
    this.voterdb.getAuthPhone(this.voterID).subscribe((info:any=[])=>{
    this.info= info;
    this.apiphne = this.info.phone
    this.apivoterid = this.info.Voter_id
    if(this.apiphne!==this.phoneNumber){
      this.toastr.error("Voter ID & Phone Number do not match !")
    } else{
      localStorage.setItem('Voter_id',JSON.stringify(this.voterID))
      this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier
      ('sign-in-button', { size : "invisible"});
      this.loader.start();
      firebase.auth().signInWithPhoneNumber(this.phoneNumber, this.
      reCaptchaVerifier).then((confirmationResult) => {
          
      localStorage.setItem('verificationId', JSON.stringify(confirmationResult.verificationId))
      this.router.navigate(['/voter/auth/enter-otp'])
      this.loader.stop()
          }).catch((error)=>{
            this.toastr.error(error.message)
            setTimeout(()=>{
              window.location.reload()
            },5000)
          })
      }
    },err =>{
      this.toastr.error("Invalid Voter ID!")
    })
    
  }

}
