import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpModule } from '@angular/http';



import { APP_ROUTING } from './app.routes';
import { RegistroComponent } from './components/registro/registro.component';
import { MesasComponent } from './components/mesas/mesas.component';

//service
import { MesasService } from '../app/services/mesas.service';

//enviroments

import { environment } from '../environments/environment';


//authguard

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    MesasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    MesasService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
