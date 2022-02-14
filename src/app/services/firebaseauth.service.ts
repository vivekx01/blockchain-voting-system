import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  constructor(private auth: AngularFireAuth) { }

  //Signing in the user from firebase
  signIn(reCaptchaVerifier: any, phoneNumber: any){
    return this.auth.signInWithPhoneNumber(phoneNumber,reCaptchaVerifier); 
  }

  //Signing the user out
  signOut() {
    return this.auth.signOut();
  }
  getUser(){
    return this.auth.authState;
  }
}
