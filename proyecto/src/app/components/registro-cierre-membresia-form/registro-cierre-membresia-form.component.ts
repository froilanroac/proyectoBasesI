import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registro-cierre-membresia-form',
  templateUrl: './registro-cierre-membresia-form.component.html',
  styleUrls: ['./registro-cierre-membresia-form.component.css']
})
export class RegistroCierreMembresiaFormComponent implements OnInit {

  membresias:any=[];

  membresias2:any=[];


  coleccionistas: any = [];

  mostrar:boolean=true;

  

  clubes:any =[];

  keyMembresia:number=0;

  keysCerrar = {
    fecha:this.datepipe.transform(new Date(),'yyyy/MM/dd'),
    cedula:0,
    id_club:0,
    fecha_cierre:this.datepipe.transform(new Date(),'yyyy/MM/dd')
  }

  contador:number=0;

  constructor(public datepipe: DatePipe,private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.registroService.getMembresias().subscribe(
      res => {
        this.membresias = res;
        console.log("Membresias registradas: "+ this.membresias['length'])
        console.log(this.membresias)
      }, 
      err => console.error(err)
    )

    this.registroService.getColeccionistas().subscribe(
      res => {
        this.coleccionistas = res;
        // console.log("Coleccionistas registrados: "+ this.coleccionistas['length'])
        // console.log(this.coleccionistas)
      }, 
      err => console.error(err)
    )

    this.registroService.getClubes().subscribe(
      res => {
        this.clubes = res;
        // console.log("Clubes registrados: "+ this.clubes['length'])
        // console.log(this.clubes)
        this.llenarMembresias2()
      }, 
      err => console.error(err)
    )

    
  }

  llenarMembresias2(){

    for(let coleccionista of this.coleccionistas){
      for(let membresia of this.membresias){
        if(membresia.cedula_coleccionista == coleccionista.cedula && membresia.fecha_fin ==null){
            this.contador+=1;
          this.membresias2.push({
            identificador:this.contador,
            cedula:coleccionista.cedula,
            nombre: coleccionista.nombre_1,
            apellido: coleccionista.apellido1,
            fecha_inicio:membresia.fecha_inicio,
            id_club:membresia.id_club,
            nombre_club:''
          })
        }
      }
    }

    for(let membresia of this.membresias2){
      for(let club of this.clubes){
        if(membresia.id_club==club.id){
          membresia.nombre_club = club.nombre
        }
      }
    }
    console.log("Membresias 2 ");
    console.log(this.membresias2);
    if(this.membresias2['length'] == 0){
      this.mostrar=false;
    }
  }

  cerrarMembresia(){

    for(let membresia of this.membresias2){
      if (membresia.identificador == this.keyMembresia){
        this.keysCerrar.fecha = this.datepipe.transform(membresia.fecha_inicio,'yyyy/MM/dd');
        this.keysCerrar.cedula = membresia.cedula;
        this.keysCerrar.id_club = membresia.id_club;
      }
    }

    console.log("Cerrando membresia de: ");
    console.log(this.keyMembresia);
    console.log(this.keysCerrar);

    this.registroService.cerrarMembresia(this.keysCerrar).subscribe(
      res => {
        alert(res)
      }, 
      err => console.error(err)
    )
    this.route.navigate(['/inicio']);
  }
}
