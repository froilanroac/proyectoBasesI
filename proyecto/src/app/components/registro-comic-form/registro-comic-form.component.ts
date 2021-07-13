import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registro-comic-form',
  templateUrl: './registro-comic-form.component.html',
  styleUrls: ['./registro-comic-form.component.css']
})
export class RegistroComicFormComponent implements OnInit {

  comic = {
    fecha_publicacion: new Date(),
    sinopsis:'',
    editor:'',
    paginas:null,
    color:true,
    titulo:'',
    numero:null,
    precio_org$:null,
    vol_numero:null,
    // historico valores
    cedula_coleccionista:null,
    fecha_registro:this.datepipe.transform(new Date(),'yyyy/MM/dd'),
    precio_compra$:null,
    significado:null,
  
    
  }
  coleccionistas:any = [];

  constructor(public datepipe:DatePipe,private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

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

  registrarComic(){
    console.log("registrando el comic");
    // console.log(this.historico);
    console.log(this.comic);
    if(this.comic.cedula_coleccionista){
    this.registroService.registrarComic(this.comic).subscribe(
      res => {
        alert(res)
        this.route.navigate(['/inicio']);
      }, 
      err => console.error(err)
    )

    }else{
      alert("DEBE REGISTRAR UN DUEÑO PARA EL COMIC");
      
    }
  }

}
