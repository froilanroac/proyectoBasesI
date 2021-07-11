import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-registro-club-form',
  templateUrl: './registro-club-form.component.html',
  styleUrls: ['./registro-club-form.component.css']
})
export class RegistroClubFormComponent implements OnInit {

  ciudades:any = [];

  ciudades2 = {
    id_ciudad:0,
    nombre_ciudad:'',
    nombre_pais:'',
    id_pais:0
  }

  arrayCiudades2:any = [];

  paises:any = [];

  club = {
    nombre:'',
    fecha_fund: '',
    id_ciudad: '',
    id_pais:'',
    pagina_web:'',
    proposito:''
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

  guardarClub(){

    for (let ciudad of this.arrayCiudades2){
      if(ciudad.id_ciudad == this.club.id_ciudad){
        this.club.id_pais= ciudad.id_pais
      }

    }

    console.log(this.arrayCiudades2);
    console.log("Elemento a insertar: "+ this.club);

    this.registroService.registrarClub(this.club).subscribe(
      res => {
        console.log(res)
        this.route.navigate(['/inicio']);
      }, 
      err => console.error(err)
    )

  }

}
