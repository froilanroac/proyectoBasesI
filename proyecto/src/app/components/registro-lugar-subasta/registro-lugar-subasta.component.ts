import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-registro-lugar-subasta',
  templateUrl: './registro-lugar-subasta.component.html',
  styleUrls: ['./registro-lugar-subasta.component.css']
})
export class RegistroLugarSubastaComponent implements OnInit {

  ciudades:any = [];

  paises:any = [];

  arrayCiudades2:any = [];

  lugarInsertar = {
    calle:'',
    avenida:'',
    id_ciudad:0,
    id_pais:0,
    tipo:'',
    nombre_lugar:''
  }

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

  registrarLugar(){
    
    for(let ciudad of this.arrayCiudades2){

      if (ciudad.id_ciudad == this.lugarInsertar.id_ciudad){
        this.lugarInsertar.id_pais = ciudad.id_pais
        this.lugarInsertar.id_ciudad = ciudad.id_ciudad
      }
      }

    console.log(this.lugarInsertar)

    this.registroService.registrarLugar(this.lugarInsertar).subscribe(
      res => {
        alert(res)
        this.route.navigate(['/inicio']);
      }, 
      err => console.error(err)
    )

  }

}
