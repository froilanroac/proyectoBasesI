import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-simular',
  templateUrl: './simular.component.html',
  styleUrls: ['./simular.component.css']
})
export class SimularComponent implements OnInit {

  subasta:any = {}

  ordenesVenta: any = []

  inscripciones:any = []

  ordenObjeto:number = 0

  numeroObjetos: number = 0

  hayObjetos:boolean = true;

  objetoSubastar:any = {}

  pujas:any = []

  pujaGanadora:any = []

  recaudado:number = 0


  constructor(public datepipe:DatePipe, private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    
    const params = this.activatedRoute.snapshot.params;
    console.log(params.id)
    if (params.id){

      this.registroService.getSubasta(params)
      .subscribe(
        res=> {
          this.subasta = res;
          this.subasta = this.subasta[0]
          // console.log(this.subasta)
        },
        err => console.error(err)
      )

      this.registroService.getOrdenesVenta(params)
      .subscribe(
        res=> {
          this.ordenesVenta = res;
          console.log(this.ordenesVenta)
          this.seleccionarObjeto()
          this.numeroObjetos = this.ordenesVenta['length'] - 1
        },
        err => console.error(err)
      )

      this.registroService.getInscripciones(params)
      .subscribe(
        res=> {
          this.inscripciones = res;
          // console.log(this.inscripciones)
        },
        err => console.error(err)
      )
    }
  }

  seleccionarObjeto(){
    for(let objeto of this.ordenesVenta){
      if(objeto.numero_en_subasta == this.ordenObjeto){
          this.objetoSubastar = objeto
      }
    }
  }



  pujar(puja:number | string , inscripcion:number | string ,cedula:number | string){
    console.log("La persona de inscripcion "+ inscripcion + "Pujo "+puja)
    
    if(puja >= this.objetoSubastar.precio_base$){
      alert("PUJA REALIZADA CON EXITO")
    this.pujas.push({
      i: inscripcion,
      p: Number(puja) ,
      c: Number(cedula)
    })

    const max = this.pujas.reduce(function(prev:any , current:any) {
    return (prev.p > current.p) ? prev : current
    
    }) 

    this.pujaGanadora = max
    console.log(this.pujaGanadora)
  }else{
    alert("LA PUJA NO PUEDE SER MENOR A LA DEL PRECIO BASE... INTENTE NUEVAMENTE")
  }
  }

  actionMethod(event: any) {
    event.target.disabled = true;  
  }



  terminarSubastaObjeto(){
   if(this.pujaGanadora['length'] == 0){
     alert("EL OBJETO NO FUE SUBASTADO, PASANDO AL SIGUIENTE OBJETO")
     this.pujaGanadora = []

     if(this.ordenObjeto < this.numeroObjetos){
     this.ordenObjeto++
     this.seleccionarObjeto()
     console.log(this.hayObjetos)
     }else{
       this.hayObjetos = false;
       console.log(this.hayObjetos)
     }
   }else{
    alert("EL OBJETO FUE SUBASTADO, LA INSCRIPCION GANADORA FUE: " + this.pujaGanadora.i)

    console.log(this.objetoSubastar)
    this.registroService.esComic(this.objetoSubastar)
    .subscribe(
      res=> {
          let mensaje = String(res)
          if(mensaje == "SI"){
              alert("REGISTRANDO VENTA DEL COMIC")

              let ordenVentaComic = {
                precio_compra$:this.pujaGanadora.p,
                id_inscr_ganador: this.pujaGanadora.i,
                id_subasta_ganador:  this.subasta.id,
                id_historico: this.objetoSubastar.id_historico,
                id_subasta: this.subasta.id,
                cedula_coleccionista: this.pujaGanadora.c
              }

              this.registroService.comicSubastado(ordenVentaComic)
              .subscribe(
                res=> {
                    alert(res)
                    this.pujaGanadora = []
                },
                err => console.error(err)
              )

              if(this.ordenObjeto < this.numeroObjetos){
                this.ordenObjeto++
                this.seleccionarObjeto()
                console.log(this.hayObjetos)
                }else{
                  this.hayObjetos = false;
                  console.log(this.hayObjetos)

                }

          }else{
            alert("registrando objeto")

              let ordenVentaObjeto = {
                precio_compra$:this.pujaGanadora.p,
                id_inscr_ganador: this.pujaGanadora.i,
                id_subasta_ganador:  this.subasta.id,
                id_historico: this.objetoSubastar.id_historico,
                id_subasta: this.subasta.id,
                cedula_coleccionista: this.pujaGanadora.c
              }

              this.registroService.objetoSubastado(ordenVentaObjeto)
              .subscribe(
                res=> {
                    alert(res)
                    this.pujaGanadora = []
                },
                err => console.error(err)
              )

              if(this.ordenObjeto < this.numeroObjetos){
              this.ordenObjeto++
              this.seleccionarObjeto()
              console.log(this.hayObjetos)
              }else{
                this.hayObjetos = false;
                console.log(this.hayObjetos)
              }
          }
      },
      err => console.error(err)
    )

   }

  }



}
