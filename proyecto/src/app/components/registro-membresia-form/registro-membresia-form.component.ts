import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registro-membresia-form',
  templateUrl: './registro-membresia-form.component.html',
  styleUrls: ['./registro-membresia-form.component.css']
})
export class RegistroMembresiaFormComponent implements OnInit {

  // fecha_inicio DATE,
  // cedula_coleccionista INT,
  // id_club INT,
  // email VARCHAR(50) NOT NULL,
  // id_club_responsable INT, 
  // fecha_fin DATE,




  constructor(public datepipe: DatePipe,private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  membresia = {
    fecha_inicio: this.datepipe.transform(new Date(), 'yyyy/MM/dd'),
    cedula_coleccionista:0,
    id_club:0,
    id_club_responsable:0,
    email:'',
  }

  coleccionistas:any=[];

  clubes:any=[];

  ngOnInit(): void {

    this.registroService.getColeccionistas().subscribe(
      res => {
        this.coleccionistas = res;
        console.log("Coleccionistas registrados: "+ this.coleccionistas['length'])
        console.log(this.coleccionistas)
      }, 
      err => console.error(err)
    )

    this.registroService.getClubes().subscribe(
      res => {
        this.clubes = res;
        console.log("Clubes registrados: "+ this.clubes['length'])
        console.log(this.clubes)
      }, 
      err => console.error(err)
    )

  }

  registrarMembresia(){

    if(this.membresia.id_club_responsable==-1){
      console.log("NO ES RESPONSABLE DE NADA")
      let membresia = {
        fecha_inicio: this.datepipe.transform(new Date(), 'yyyy/MM/dd'),
        cedula_coleccionista:this.membresia.cedula_coleccionista,
        id_club:this.membresia.id_club,
        email:this.membresia.email,
      }
      console.log(membresia)
      this.registroService.registrarMembresia(membresia).subscribe(
        res => {
          console.log(res)
          this.route.navigate(['/inicio']);
        }, 
        err => console.error(err)
      )
    }else{
      console.log("ES RESPONSABLE")
      console.log(this.membresia)
    this.registroService.registrarMembresia(this.membresia).subscribe(
      res => {
        console.log(res)
        this.route.navigate(['/inicio']);
      }, 
      err => console.error(err)
    )
    }
    
  }

}
