import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import 'rxjs/RX';
import 'rxjs/add/operator/map';

@Injectable()
export class MesasService{
    Url="https://reservacion-a9f6c.firebaseio.com/-L3EQM9OgQiqDkUBZfBL.json";
    urlIngresar="https://reservacion-a9f6c.firebaseio.com/.json";
    url2="https://reservacion-a9f6c.firebaseio.com/-L3EQM9OgQiqDkUBZfBL";
    constructor( private http:Http,
                 public afAuth:AngularFireAuth){

    }

    ingresar( mesas ){
        let body=JSON.stringify(mesas);
        let headers=new Headers({
            'Content-Type':'application/json'
        });

        return this.http.post(this.urlIngresar,body,{headers})
               .map(res=>{
                   //console.log(res.json());
                   return res.json();
               })
    }
    getmesas(){
        return this.http.get(this.Url)
               .map(res=>{
                   console.log(res.json());
                   return res.json();
               });
    }
    actualizar(data,i,j){
        let body=JSON.stringify(data);
        
        let headers=new Headers({
            'Content-Type':'application/json'
        });
        let url=`${this.url2}/${i}/sillas/${j}/.json`;
        console.log(url);
        return this.http.put(url,body,{headers})
               .map(res=>{
                   console.log(res.json());
                   return res.json();
               })
    }

    registerUser(email:string, pass:string){
        return new Promise((resolve,reject)=>{
            this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
            .then(userData => resolve(userData),
            err=>reject(err))
        });
    }

    loginEmail( email:string, pass:string ){
        return new Promise( ( resolve,reject )=>{
            this.afAuth.auth.signInWithEmailAndPassword(email,pass)
            .then( userData => resolve(userData) ,
            err=> reject(err))
        });
    }

    getAuth() {
        return this.afAuth.authState.map(auth=>auth);
    }

    logOut(){
       return this.afAuth.auth.signOut();
    }




}