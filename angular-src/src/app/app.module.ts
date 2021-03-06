//All Modules imported go under here
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NgZone } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';
import { FormControl , FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AgmJsMarkerClustererModule, ClusterManager } from "@agm/js-marker-clusterer";
import { MdCardModule, MdButtonModule, MdCheckboxModule, MdDialogModule } from '@angular/material';
import {ModalModule} from 'ngx-modal';

// MapCluster Module
import { MapCluster } from './map-cluster';

// All components imported go under here
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { AboutComponent } from './components/about/about.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';

// All services imported go under here
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { MarkerService } from "./services/marker.service";

//Importing socket-io services
import { SocketService } from './components/shared/socket.service';
import 'js-marker-clusterer/src/markerclusterer.js';

//Interactive InfoWindow
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path: 'map-page', component: MapPageComponent },
  {path: 'about', component: AboutComponent},
  {path: 'meet-the-team', component: MeetTheTeamComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'profile', component: ProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MapPageComponent,
    AboutComponent,
    MeetTheTeamComponent,
    FooterComponent,
    MapCluster,
    ForgotPasswordComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfW8ETNs6vnLAlGqcqHIZg52NI9lupHxM',
      libraries: ["places"]
    }),
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule,
    ModalModule,
    MdCardModule,
    MdButtonModule, 
    MdCheckboxModule, 
    MdDialogModule
    
  ],
  providers: [ValidateService, MarkerService, AuthService, AuthGuard,
  SocketService, ClusterManager],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}