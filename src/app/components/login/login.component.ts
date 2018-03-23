import { MesasService } from './../../services/mesas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;
  constructor(public auth:MesasService,
              public router:Router
              ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    console.log(this.email +" "+this.password);
    this.auth.loginEmail(this.email,this.password)
    .then(res=>{
      this.router.navigate(['/mesas']);
      console.log(res);
    }).catch(error=>{
      console.log(error);
      this.router.navigate(['login']);
    })
  }

}
