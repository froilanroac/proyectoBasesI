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

  constructor(public datepipe: DatePipe,private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  membresia = {
    fecha_inicio: this.datepipe.transform(new Date(), 'yyyy/MM/dd'),
    cedula_coleccionista:null,
    id_club:0,
    id_club_responsable:-1,
    email:'',
  }

  coleccionistas:any=[];

  clubes:any=[];

  mayor:boolean = false

  boton:boolean = true 

  confirmar:boolean = false

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

  mayorDeEdad() {

    let fecha = new Date()
    let fecha2 = new Date();   

    for(let coleccionista of this.coleccionistas){
      if(this.membresia.cedula_coleccionista == coleccionista.cedula){
        fecha = coleccionista.fecha_nacimiento
      }
    }
    

    fecha = new Date(fecha)
    console.log(fecha)
    let Difference_In_Time = fecha2.getTime() - fecha.getTime();
      
    let age = Difference_In_Time / ((1000 * 3600 * 24))/365;

    

    if(age > 15){
      this.mayor = true 
      this.boton = false
      // this.registrarMayorDeEdad()
    }else{
      this.mayor = false
      this.boton = false
      this.confirmar = true 
    }

    console.log(this.mayor)
      
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
          alert(res)
          this.route.navigate(['/inicio']);
        }, 
        err => console.error(err)
      )
    }else{
      console.log("ES RESPONSABLE")
      console.log(this.membresia)
      this.membresia.id_club_responsable = this.membresia.id_club
       this.registroService.registrarMembresia(this.membresia).subscribe(
      res => {
        alert(res)
        this.route.navigate(['/inicio']);
      }, 
      err => console.error(err)
    )
    }
    
  }

}
