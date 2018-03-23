import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { AngularFireAuth } from 'angularfire2/auth';
import { MesasService } from '../services/mesas.service';


@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(public router:Router,
              public afAuth:AngularFireAuth,
              public authService:MesasService
              ){

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState
    .take(1)
    .map(authState=>!!authState)
    .do( authenticated =>{
        if(!authenticated){
          this.router.navigate(['/login']);
        }
    })
  }
}
