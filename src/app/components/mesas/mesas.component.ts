import { Component, OnInit } from '@angular/core';
import * as SVG from 'svg.js';
import { MesasService } from '../../services/mesas.service';
import { Console } from '@angular/core/src/console';



@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styles: []
})
export class MesasComponent implements OnInit {
  svgCanvas:any;
  public  mesas2=[];
  mesas3=[];
  mesas = [{
    color: '#f06',
    nombre:"vacia",
    posicion: {
        x: 50,
        y: 50
    },
    sillas: [{
            numero: 1,
            color: '#30f6ff',
            ocupada: false,
            posicion: {
                x: 30,
                y: 50
            }
        }, {
            numero: 2,
            color: '#30f6ff',
            ocupada: true,
            posicion: {
                x: 100,
                y: 10
            }
        }, {
            numero: 3,
            color: '#30f6ff',
            ocupada: false,
            posicion: {
                x: 180,
                y: 10
            }
        }, {
            numero: 4,
            color: '#30f6ff',
            ocupada: true,
            posicion: {
                x: 240,
                y: 50
            }
        }

    ]
},
{
  color: '#f06',
  nombre:"vacia",
  posicion: {
      x: 500,
      y: 50
  },
  sillas: [{
          numero: 1,
          color: '#30f6ff',
          ocupada: false,
          posicion: {
              x: 600,
              y: 10
          }
      }, {
          numero: 2,
          color: '#30f6ff',
          ocupada: true,
          posicion: {
              x: 500,
              y: 30
          }
      }, {
          numero: 3,
          color: '#30f6ff',
          ocupada: false,
          posicion: {
              x: 450,
              y: 90
          }
      }, {
          numero: 4,
          color: '#30f6ff',
          ocupada: true,
          posicion: {
              x: 700,
              y: 50
          }
      }

  ]
},
{
  color: '#f06',
  nombre:"vacia",
  posicion: {
      x: 950,
      y: 50
  },
  sillas: [{
          numero: 1,
          color: '#30f6ff',
          ocupada: false,
          posicion: {
              x: 930,
              y: 50
          }
      }, {
          numero: 2,
          color: '#30f6ff',
          ocupada: true,
          posicion: {
              x: 1050,
              y: 5
          }
      }, {
          numero: 3,
          color: '#30f6ff',
          ocupada: false,
          posicion: {
              x: 980,
              y: 10
          }
      }, {
          numero: 4,
          color: '#30f6ff',
          ocupada: true,
          posicion: {
              x: 1100,
              y: 20
          }
      }

  ]
},
{
  color: '#f06',
  nombre:"vacia",
  posicion: {
      x: 50,
      y: 500
  },
  sillas: [{
          numero: 1,
          color: '#30f6ff',
          ocupada: false,
          posicion: {
              x: 30,
              y: 500
          }
      }, {
          numero: 2,
          color: '#30f6ff',
          ocupada: true,
          posicion: {
              x: 100,
              y: 460
          }
      }, {
          numero: 3,
          color: '#30f6ff',
          ocupada: false,
          posicion: {
              x: 180,
              y: 460
          }
      }, {
          numero: 4,
          color: '#30f6ff',
          ocupada: true,
          posicion: {
              x: 240,
              y: 500
          }
      }

  ]
},
{
  color: '#f06',
  nombre:"vacia",
  posicion: {
      x: 500,
      y: 500
  },
  sillas: [{
          numero: 1,
          color: '#30f6ff',
          ocupada: false,
          posicion: {
              x: 500,
              y: 490
          }
      }, {
          numero: 2,
          color: '#30f6ff',
          ocupada: true,
          posicion: {
              x: 550,
              y: 460
          }
      }, {
          numero: 3,
          color: '#30f6ff',
          ocupada: false,
          posicion: {
              x:600,
              y: 455
          }
      }, {
          numero: 4,
          color: '#30f6ff',
          ocupada: true,
          posicion: {
              x: 660,
              y: 490
          }
      }

  ]
}

]
  constructor(mesas:MesasService) { 

        let ocupada=false;
        mesas.getmesas()
             .subscribe(data=>{
                this.mesas2=data;
                this.svgCanvas=document.getElementById("lienzo");
                let draw=SVG('lienzo').size(1500,1000);
                console.log(data);
                let i=0;
                for(let mesa of this.mesas2 ){
                    //console.log(mesa);
                    let mesaF=draw.circle(200);
                    mesaF.attr({
                        fill:mesa.color
                });
                    let i=this.mesas2.indexOf(mesa);
                    mesaF.move(mesa.posicion.x,mesa.posicion.y);
                    
                    
                    for(let silla of mesa.sillas){
                       

                        let j=mesa.sillas.indexOf(silla);
                        let color=silla.ocupada?mesa.color:silla.color;
                        let sillaF=draw.circle(30).attr({
                        fill: color
                        });
                        sillaF.move(silla.posicion.x, silla.posicion.y);
                        
                        //console.log("i: "+i+"j: "+j);
                        sillaF.mouseover(function(){
                            if(silla.ocupada){
                                console.log("ocupada");
                            }
                            else{
                                console.log("vacia");
                            }
                        });
                        sillaF.click(function(){
                            console.log(mesa);
                            //data.silla.color=mesa.color;
                            //data.silla.ocupada=true;
                            ocupada=true;
                        /*
                       ;
                            mesas.actualizar(data)
                                 .subscribe(data=>{
                                     console.log(data);
                                 });
                                 */
                           
                        sillaF.attr({
                        fill:mesa.color
                        
                        });
                        
                        silla.ocupada=true;
                        console.log("i: " +i+" j: "+j);
                        
                        mesas.actualizar(silla,i-1,j-1)
                        .subscribe(res=>{
                            console.log(res);
                        });
                        
                        
                    });
                   
                    
                    j++;
                    }
                i++;
                }
                
                
             })
             
        
        //console.log("mesa4 "+this.mesas3);    
        /*     
        for(let mesa of this.mesas2){
            this.mesas3.push(mesa);
        }
        console.log("mesas3 "+this.mesas3);
          //console.log(JSON.stringify(this.mesas));
          */
        /*  
          mesas.ingresar(this.mesas)
                .subscribe(data=>{
                    console.log(data);
                });
        */        
    }


  ngOnInit() {
    /*this.svgCanvas=document.getElementById("lienzo");
    let draw=SVG('lienzo').size(1500,1000);
    

    for(let mesa of this.mesas2){
      console.log(mesa);
      let mesaF=draw.circle(200);
      mesaF.attr({
        fill:mesa.color
      });
      mesaF.move(mesa.posicion.x,mesa.posicion.y);
      for(let silla of mesa.sillas){
        let color=silla.ocupada?mesa.color:silla.color;
        let sillaF=draw.circle(30).attr({
          fill: color
        });
        sillaF.move(silla.posicion.x, silla.posicion.y);
        
       
        sillaF.click(function(){
        sillaF.attr({
          fill:mesa.color
        });
        silla.ocupada=true;
        console.log("silla");
       });
      }

    }
    */
  }

}
