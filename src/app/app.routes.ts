import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes=[
    { path:'home', component:HomeComponent },
    { path:'login', component:LoginComponent },
    { path:'registro', component:RegistroComponent },
    { path:'mesas' , component:MesasComponent, canActivate:[AuthGuard]},
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const APP_ROUTING=RouterModule.forRoot(app_routes);