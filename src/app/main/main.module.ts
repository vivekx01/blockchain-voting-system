import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { GetfaucetComponent } from './getfaucet/getfaucet.component';
import { RealtimeresultsComponent } from './realtimeresults/realtimeresults.component';
import { NgChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LandingpageComponent,
    AboutComponent,
    InstructionsComponent,
    GetfaucetComponent,
    RealtimeresultsComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule
  ],
  exports: [
    LandingpageComponent,
    AboutComponent,
    InstructionsComponent,
    GetfaucetComponent
  ]
})
export class MainModule { }
