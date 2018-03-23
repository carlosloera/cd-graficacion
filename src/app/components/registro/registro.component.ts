import { MesasService } from './../../services/mesas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(public auth:MesasService,
              public router:Router) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.auth.registerUser(this.email,this.password)
    .then(( res )=>{
      this.router.navigate(['/mesas']);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
