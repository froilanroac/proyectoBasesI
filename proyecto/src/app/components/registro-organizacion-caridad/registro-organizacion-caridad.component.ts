import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-registro-organizacion-caridad',
  templateUrl: './registro-organizacion-caridad.component.html',
  styleUrls: ['./registro-organizacion-caridad.component.css']
})
export class RegistroOrganizacionCaridadComponent implements OnInit {

    organizacion_caridad = {
    nombre:null,
    descripcion:null
  }

  constructor(private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  registrarOrganizacion(){
    console.log(this.organizacion_caridad)

    if (this.organizacion_caridad.nombre){
    this.registroService.registrarOrganizacion(this.organizacion_caridad).subscribe(
      res => {
        alert(res)
        this.route.navigate(['/inicio']);
      }, 
      err => console.error(err)
    )}else{
      alert("EL CAMPO DE NOMBRE NO PUEDE ESTAR VACIO")
    }

  }

}
