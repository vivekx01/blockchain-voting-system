import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged :string | null | undefined

  constructor(private afAuth: AngularFireAuth,private toastr: ToastrService, private router: Router, private loader: NgxUiLoaderService, private auth: FirebaseauthService) {
    auth.getUser().subscribe((user)=>{
      this.logged = user?.phoneNumber
    })
  }
  navbarOpen:any
  ngOnInit(): void {}
  async logout(){
    this.loader.start()
    return this.afAuth.signOut().then(()=>{
      localStorage.removeItem("txn_hash")
      localStorage.removeItem("verificationId")
      localStorage.removeItem("Voter_id")
      localStorage.removeItem("user_data")
      localStorage.removeItem("_grecaptcha")

      this.toastr.success("Logout Success","",{closeButton: true})
      this.router.navigate(['/voter/auth/login'])
      this.loader.stop()
    })
  }
  

}
