import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registro-objeto-form',
  templateUrl: './registro-objeto-form.component.html',
  styleUrls: ['./registro-objeto-form.component.css']
})
export class RegistroObjetoFormComponent implements OnInit {

  objetovalor = {

    nombre:'',
    descripcion:'',
    fecha_fabricacion: this.datepipe.transform(new Date(),'yyyy/MM/dd'),
    // historico valores
    cedula_coleccionista:0,
    fecha_registro:this.datepipe.transform(new Date(),'yyyy/MM/dd'),
    precio_compra$:null,
    significado:'',

  }

  historico = {
    cedula_coleccionista:0,
    fecha_registro:this.datepipe.transform(new Date(),'yyyy/MM/dd'),
    precio_compra$:0,
    significado:'',
    id_objeto_valor:0
  }
  
  id:any=[];

  id_objeto:number=0;

  coleccionistas:any = [];


  constructor(public datepipe: DatePipe,private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.registroService.getColeccionistas().subscribe(
      res => {
        this.coleccionistas = res;
        console.log("Coleccionistas registrados: "+ this.coleccionistas['length'])
        console.log(this.coleccionistas)
      }, 
      err => console.error(err)
    )

  }

  registrarObjeto(){
    console.log("registrando objeto");
    // console.log(this.historico);
    console.log(this.objetovalor);

    this.registroService.registrarObjeto(this.objetovalor).subscribe(
      res => {
        alert(res)
        this.route.navigate(['/inicio']);
      }, 
      err => console.error(err)
    )


  }

}
