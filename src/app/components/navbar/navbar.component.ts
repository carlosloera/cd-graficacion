import { Component, OnInit } from '@angular/core';
import { MesasService } from '../../services/mesas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public isLogin:boolean;
  constructor(public auth:MesasService,
                public router:Router
              ) { }

  ngOnInit() {
    this.auth.getAuth()
    .subscribe(res=>{
      if(res){
        this.isLogin=true;
      }
      else{
        this.isLogin=false;
      }
    })
  }

  onClickLogOut(){
    this.auth.logOut();
    this.router.navigate(['/']);
  }

}
