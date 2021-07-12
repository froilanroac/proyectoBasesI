import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";


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
    cedula:0,
    nombre_1:'',
    apellido1:'',
    telefono:'',
    fecha_nacimiento:'',
    id_ciudad:0,
    id_pais:0,
    apellido2:'',
    id_pais_nac:0,
    nombre2:'',
    cedula_representante:0,
    id_representante:0
    
  };


  constructor(private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

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
          console.log(this.arrayCiudades2);  
        }   
           
      }, 
      err => console.error(err)
    );

  }

  registrarColeccionista(){

    

    if (this.coleccionista.id_representante != 0 && this.coleccionista.cedula_representante != 0){
      alert("VERIFICAR CAMPOS DE REPRESENTANTES, NO PUEDEN ESTAR LOS DOS AL MISMO TIMEMOP")
      this.route.navigate(['/inicio']);
    }
    

    if (this.coleccionista.cedula_representante!=0 && this.coleccionista.id_representante==0){
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
          console.log(res);
          this.route.navigate(['/inicio']);
        },
        err => console.error(err)
        );
  
        console.log(coleccionistaInsertar);

    }

    if (this.coleccionista.id_representante!=0 && this.coleccionista.cedula_representante==0){
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
          console.log(res);
          this.route.navigate(['/inicio']);
        },
        err => console.error(err)
        );
  
        console.log(coleccionistaInsertar);

    }

    if (this.coleccionista.id_representante == 0 && this.coleccionista.cedula_representante == 0){
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
        console.log(res);
        this.route.navigate(['/inicio']);
      },
      err => console.error(err)
      );

      console.log(coleccionistaInsertar);

    
    }
  }

}