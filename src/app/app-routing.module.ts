import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { GetfaucetComponent } from './main/getfaucet/getfaucet.component';
import { InstructionsComponent } from './main/instructions/instructions.component';
import { LandingpageComponent } from './main/landingpage/landingpage.component';
import { VoterloginComponent } from './userauthorization/voterlogin/voterlogin.component';
import { VoterverifyComponent } from './userauthorization/voterverify/voterverify.component';
import { CastvoteComponent } from './usermanagement/castvote/castvote.component';
import { ConfirmdetailsComponent } from './usermanagement/confirmdetails/confirmdetails.component';
import { ConnectmetamaskComponent } from './usermanagement/connectmetamask/connectmetamask.component';
import { VotingsuccessComponent } from './usermanagement/votingsuccess/votingsuccess.component';
//Angular Router Guard testing vscode dev
import { 
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo
 } from '@angular/fire/compat/auth-guard';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { RealtimeresultsComponent } from './main/realtimeresults/realtimeresults.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['voter/auth/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo([''])
const routes: Routes = [
  {
    path:"", 
    component: LandingpageComponent
  },
  {
    path:"aboutus", 
    component: AboutComponent
  },
  {
    path:"getfaucet", 
    component: GetfaucetComponent
  },
  {
    path:"instructions", 
    component: InstructionsComponent
  },
  {
    path:"realtime-results",
    component: RealtimeresultsComponent
  },
  {
    path:"voter/auth/login",
    component: VoterloginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path:"voter/auth/enter-otp", 
    component: VoterverifyComponent,
  },
  {
    path:"voter/confirm-details", 
    component: ConfirmdetailsComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:"voter/connect-metamask", 
    component: ConnectmetamaskComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:"voter/cast-vote", 
    component: CastvoteComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:"voter/voting-success", 
    component: VotingsuccessComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:"**",
    component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
