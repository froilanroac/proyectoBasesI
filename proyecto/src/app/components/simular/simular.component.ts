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

  registrosBeneficio:any = []

  tiempo: number = 0

  descripcion:any = {}

  botonesCerrados:any = [] 
  

  counter = { min:0, sec:0 }
  


  constructor(public datepipe:DatePipe, private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    
    const params = this.activatedRoute.snapshot.params;
    console.log("subasta id: "+params.id)
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

  

  startTimer() {
    console.log(this.tiempo)
    let objeto = this.ordenObjeto
    this.counter = { min: 0, sec: this.tiempo } // choose whatever you want
    let intervalId = setInterval(() => {
      // console.log(this.counter)
      if(objeto != this.ordenObjeto){
        return;
      }
      if (this.counter.sec - 1 == -1) {
        this.counter.min -= 1;
        this.counter.sec = 59
      } 
      else this.counter.sec -= 1
      if (this.counter.min === 0 && this.counter.sec == 0){
        clearInterval(intervalId)
        this.terminarSubastaObjeto()
      } 
    }, 1000)
  }

  seleccionarObjeto(){
    this.pujaGanadora = []
    this.pujas = []
    for(let objeto of this.ordenesVenta){
      if(objeto.numero_en_subasta == this.ordenObjeto){
        this.objetoSubastar = objeto
        let descripcion
          this.registroService.getDescripcionObjeto(this.objetoSubastar).subscribe(
            res=> {
              this.descripcion = res
            },
            err=> console.error(err)
          )
          console.log(descripcion)
          this.tiempo = this.objetoSubastar.duracion_puja_min
            console.log(this.objetoSubastar.duracion_puja_min)
          if(this.subasta.tipo == 'A'){this.startTimer()}
      }
    }
  }



  pujar(puja:number | string , inscripcion:number | string ,cedula:number | string){
    console.log("La persona de inscripcion "+ inscripcion + " Pujo "+puja)
    console.log(this.pujas)
    if(this.subasta.tipo == 'A'){
      //validar que la puja sea la mayor

      if(puja <= this.pujaGanadora.p){
        alert("LA PUJA DEBE SER MAYOR A LA OFERTA MAXIMA, INTENTE NUEVAMENTE")
      }else{

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
        // console.log(this.pujaGanadora)

      }else{
        alert("LA PUJA NO PUEDE SER MENOR A LA DEL PRECIO BASE... INTENTE NUEVAMENTE")
      }

      }


    }else{

    if(puja >= this.objetoSubastar.precio_base$){

    alert("PUJA REALIZADA CON EXITO")
    this.pujas.push({
      i: inscripcion,
      p: Number(puja) ,
      c: Number(cedula)
    })
    const btn = document.getElementById(`${inscripcion}`)
      if (btn) {
        btn.style.display = 'none'
        this.botonesCerrados.push(inscripcion)
    } 
      

    const max = this.pujas.reduce(function(prev:any , current:any) {
    return (prev.p > current.p) ? prev : current
    
    }) 

    this.pujaGanadora = max
    // console.log(this.pujaGanadora)
  }else{
    alert("LA PUJA NO PUEDE SER MENOR A LA DEL PRECIO BASE... INTENTE NUEVAMENTE")
  }
  
    }

  }

  actionMethod(event: any) {
    event.target.disabled = true;  
  }

  registrarBeneficio(){

    this.registroService.getRegistrosBeneficio(this.subasta)
    .subscribe(
      res=> {
        this.registrosBeneficio = res;
        console.log("REGISTRANDO BENEFICIOS ...")
        this.registrarBeneficiosServidor(this.registrosBeneficio)
        this.route.navigate(['/inicio']);
      },
      err => console.error(err)
    )

  }

  registrarBeneficiosServidor(beneficios:any){
    for(let beneficio of beneficios){
      console.log(this.recaudado)
      let b = {
        id: beneficio.id,
        recaudado: this.recaudado,
        porcentaje: beneficio.porcentaje
      }
      console.log(b)
      this.registroService.registrarBeneficio(b)
      .subscribe(
        res=> {
            alert(res)
        },
        err => console.error(err)
      )

    }
  }



  terminarSubastaObjeto(){
  this.botonesCerrados.forEach((element: number | string) => {
    const btn = document.getElementById(`${element}`)
    if (btn){
      btn.style.display = "inline-block"
    }
  });
   if(this.pujaGanadora['length'] == 0){
     alert("EL OBJETO NO FUE SUBASTADO, PASANDO AL SIGUIENTE OBJETO")
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

              let sig =  prompt("REGISTRANDO VENTA DEL COMIC, POR FAVOR INGRESE ALGUN SIGNIFICADO ", "");
              console.log(sig)
              let ordenVentaComic = {
                precio_compra$:this.pujaGanadora.p,
                id_inscr_ganador: this.pujaGanadora.i,
                id_subasta_ganador:  this.subasta.id,
                id_historico: this.objetoSubastar.id_historico,
                id_subasta: this.subasta.id,
                cedula_coleccionista: this.pujaGanadora.c,
                significado: sig
              }
              this.recaudado += this.pujaGanadora.p
              console.log("REGISTRANDO DUEÑO: ")
              console.log(ordenVentaComic)
              this.registroService.comicSubastado(ordenVentaComic)
              .subscribe(
                res=> {
                    alert(res)
                    // this.recaudado += this.pujaGanadora.p
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
            let sig =  prompt("REGISTRANDO VENTA DEL OBJETO, POR FAVOR INGRESE ALGUN SIGNIFICADO ", "");
            console.log(sig)
            // console.log(this.pujaGanadora)
              let ordenVentaObjeto = {
                precio_compra$:this.pujaGanadora.p,
                id_inscr_ganador: this.pujaGanadora.i,
                id_subasta_ganador:  this.subasta.id,
                id_historico: this.objetoSubastar.id_historico,
                id_subasta: this.subasta.id,
                cedula_coleccionista: this.pujaGanadora.c,
                significado: sig
              }
              this.recaudado += this.pujaGanadora.p
              console.log("REGISTRANDO DUEÑO: ")
                console.log(ordenVentaObjeto)
              this.registroService.objetoSubastado(ordenVentaObjeto)
              .subscribe(
                res=> {
                    alert(res)
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
