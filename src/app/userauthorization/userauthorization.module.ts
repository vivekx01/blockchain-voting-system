import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoterloginComponent } from './voterlogin/voterlogin.component';
import { VoterverifyComponent } from './voterverify/voterverify.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { environment } from 'src/environments/environment';
// Firebase services + environment module
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    VoterloginComponent,
    VoterverifyComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgOtpInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class UserauthorizationModule { }
