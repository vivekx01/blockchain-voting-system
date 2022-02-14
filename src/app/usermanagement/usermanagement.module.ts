import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmdetailsComponent } from './confirmdetails/confirmdetails.component';
import { ConnectmetamaskComponent } from './connectmetamask/connectmetamask.component';
import { CastvoteComponent } from './castvote/castvote.component';
import { VotingsuccessComponent } from './votingsuccess/votingsuccess.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfirmdetailsComponent,
    ConnectmetamaskComponent,
    CastvoteComponent,
    VotingsuccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsermanagementModule { }
