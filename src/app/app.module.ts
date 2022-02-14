import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainModule } from './main/main.module';
import { UserauthorizationModule } from './userauthorization/userauthorization.module';
import { UsermanagementModule } from './usermanagement/usermanagement.module';

// Firebase services + environment module
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
//Loader
import { NgxUiLoaderModule,NgxUiLoaderHttpModule,NgxUiLoaderConfig,SPINNER,POSITION,PB_DIRECTION, NgxUiLoaderRouterModule } from "ngx-ui-loader";
//toastr
import { ToastrModule } from 'ngx-toastr';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';


//loader config
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "black",
  fgsColor: "black",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.rectangleBounce, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
  pbColor: "black",
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    UserauthorizationModule,
    UsermanagementModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxUiLoaderRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
