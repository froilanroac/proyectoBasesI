import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-registro-coleccionista-form',
  templateUrl: './registro-coleccionista-form.component.html',
  styleUrls: ['./registro-coleccionista-form.component.css']
})


export class RegistroColeccionistaFormComponent implements OnInit {


  ciudades:any = [];

  ciudades2 = {
    id_ciudad:0,
    nombre_ciudad:'',
    nombre_pais:'',
    id_pais:0
  }

  arrayCiudades2:any = [];

  paises:any = [];

  coleccionista = {
    cedula:null,
    nombre_1:'',
    apellido1:'',
    telefono:'',
    fecha_nacimiento:new Date(),
    id_ciudad:null,
    id_pais:null,
    apellido2:'',
    id_pais_nac:null,
    nombre2:'',
    cedula_representante:null,
    id_representante:null
    
  };

  representante:boolean = false; 


  constructor(public datepipe: DatePipe,private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.registroService.getCiudades().subscribe(
      res => {
        this.ciudades = res;
        console.log("Ciudades registradas: "+ this.ciudades['length'])
      }, 
      err => console.error(err)
    )

    this.registroService.getPaises().subscribe(
      res => {
        this.paises = res;
        console.log("Paises registrados: "+ this.paises['length'])

        for (let ciudad of this.ciudades){
          this.arrayCiudades2.push(
            { 
            id_ciudad:ciudad.id,
            nombre_ciudad:ciudad.nombre,
            nombre_pais:'',
            id_pais:ciudad.id_pais}
            )
        }
        
        for (let ciudad of this.arrayCiudades2){
          for(let pais of this.paises){
            if (ciudad.id_pais == pais.id){
                ciudad.nombre_pais=pais.nombre;
            }
          }
          // console.log(this.arrayCiudades2);  
        }   
           
      }, 
      err => console.error(err)
    );

  }

  mayorDeEdad() {

    let date1 = new Date();      

    let fecha = new Date(this.coleccionista.fecha_nacimiento)
    let Difference_In_Time = date1.getTime() - fecha.getTime();
      
    let age = Difference_In_Time / ((1000 * 3600 * 24))/365;

    if(age > 15){
      this.representante = false 
      this.registrarMayorDeEdad()
    }else{
      this.representante = true
    }
      
  }

  registrarColeccionista(){

    console.log(this.coleccionista.cedula_representante);
    console.log(this.coleccionista.id_representante);

    if (this.coleccionista.id_representante && this.coleccionista.cedula_representante){
      alert("VERIFICAR CAMPOS DE REPRESENTANTES, NO PUEDEN ESTAR LOS DOS AL MISMO TIMEMO")
    }

    if (!this.coleccionista.id_representante  && !this.coleccionista.cedula_representante){
      alert("VERIFICAR CAMPOS DE REPRESENTANTES, NO HAY NINGUNO REGISTRADO")
    }
    

    if (this.coleccionista.cedula_representante && !this.coleccionista.id_representante){
      console.log("representante coleccionsita");
      let coleccionistaInsertar = {
        cedula:this.coleccionista.cedula,
        nombre_1:this.coleccionista.nombre_1,
        apellido1:this.coleccionista.apellido1,
        telefono:this.coleccionista.telefono,
        fecha_nacimiento:this.coleccionista.fecha_nacimiento,
        id_ciudad:this.coleccionista.id_ciudad,
        id_pais:this.coleccionista.id_pais,
        apellido2:this.coleccionista.apellido2,
        id_pais_nac:this.coleccionista.id_pais_nac,
        nombre2:this.coleccionista.nombre2,
        cedula_representante:this.coleccionista.cedula_representante
      };

      for(let ciudad of this.arrayCiudades2){

        if (ciudad.id_ciudad == coleccionistaInsertar.id_ciudad){
          coleccionistaInsertar.id_pais = ciudad.id_pais
          coleccionistaInsertar.id_ciudad = ciudad.id_ciudad
        }
        }
  
  
  
        this.registroService.registrarColeccionista(coleccionistaInsertar)
        .subscribe(
        res => {
          alert(res);
          this.route.navigate(['/inicio']);
        },
        err => console.error(err)
        );
  
        console.log(coleccionistaInsertar);

    }

    if (!this.coleccionista.cedula_representante && this.coleccionista.id_representante){
      console.log("representante no coleccionsita");
      let coleccionistaInsertar = {
        cedula:this.coleccionista.cedula,
        nombre_1:this.coleccionista.nombre_1,
        apellido1:this.coleccionista.apellido1,
        telefono:this.coleccionista.telefono,
        fecha_nacimiento:this.coleccionista.fecha_nacimiento,
        id_ciudad:this.coleccionista.id_ciudad,
        id_pais:this.coleccionista.id_pais,
        apellido2:this.coleccionista.apellido2,
        id_pais_nac:this.coleccionista.id_pais_nac,
        nombre2:this.coleccionista.nombre2,
        id_representante:this.coleccionista.id_representante
      };

      for(let ciudad of this.arrayCiudades2){

        if (ciudad.id_ciudad == coleccionistaInsertar.id_ciudad){
          coleccionistaInsertar.id_pais = ciudad.id_pais
          coleccionistaInsertar.id_ciudad = ciudad.id_ciudad
        }
        }
  
  
  
        this.registroService.registrarColeccionista(coleccionistaInsertar)
        .subscribe(
        res => {
          alert(res);
          this.route.navigate(['/inicio']);
        },
        err => console.error(err)
        );
  
        console.log(coleccionistaInsertar);

    }
  }

  registrarMayorDeEdad(){

        if (!this.coleccionista.id_representante  && !this.coleccionista.cedula_representante){
      console.log("mayor de edad");
      let coleccionistaInsertar = {
        cedula:this.coleccionista.cedula,
        nombre_1:this.coleccionista.nombre_1,
        apellido1:this.coleccionista.apellido1,
        telefono:this.coleccionista.telefono,
        fecha_nacimiento:this.coleccionista.fecha_nacimiento,
        id_ciudad:this.coleccionista.id_ciudad,
        id_pais:this.coleccionista.id_pais,
        apellido2:this.coleccionista.apellido2,
        id_pais_nac:this.coleccionista.id_pais_nac,
        nombre2:this.coleccionista.nombre2,

      };  

      for(let ciudad of this.arrayCiudades2){

      if (ciudad.id_ciudad == coleccionistaInsertar.id_ciudad){
        coleccionistaInsertar.id_pais = ciudad.id_pais
        coleccionistaInsertar.id_ciudad = ciudad.id_ciudad
      }
      }


      this.registroService.registrarColeccionista(coleccionistaInsertar)
      .subscribe(
      res => {
        alert(res);
        this.route.navigate(['/inicio']);
      },
      err => console.error(err)
      );

      console.log(coleccionistaInsertar);
 
    }

  }

}
