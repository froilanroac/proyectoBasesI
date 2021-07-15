import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-registro-subasta',
  templateUrl: './registro-subasta.component.html',
  styleUrls: ['./registro-subasta.component.css']
})
export class RegistroSubastaComponent implements OnInit {

  lugares:any = [];

  tipoSubasta = '' 

  presencial = ''

  objetosDeValor:any = []

  comics:any = []

  clubes:any = []

  coleccionistas:any= []

  membresiasActivas:any = []

  subastaRegistrar ={
    hora_inicio:"",
    hora_fin:'',
    fecha:'',
    modo:'',
    tipo:'',
    caridad:'',
    cancelada:'',
    id_lugar:null
  }

  constructor(private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.registroService.getLugares().subscribe(
      res => {
        this.lugares = res;
        console.log(this.lugares) 
        console.log("Lugares registrados: "+ this.lugares['length'])
      }, 
      err => console.error(err)
    )  
    
    this.registroService.getClubes().subscribe(
      res => {
        this.clubes = res;
        console.log(this.clubes) 
        console.log("Clubes registrados: "+ this.clubes['length'])
      }, 
      err => console.error(err)
    )  

    this.registroService.getObjetos().subscribe(
      res => {
        this.objetosDeValor = res;
        console.log(this.objetosDeValor) 
        console.log("Objetos registrados: "+ this.objetosDeValor['length'])
      }, 
      err => console.error(err)
    )

    this.registroService.getComics().subscribe(
      res => {
        this.comics = res;
        console.log(this.comics) 
        console.log("Comics registrados: "+ this.comics['length'])
      }, 
      err => console.error(err)
    )

    this.registroService.getColeccionistas().subscribe(
      res => {
        this.coleccionistas = res;
        console.log("Coleccionistas registrados: "+ this.coleccionistas['length'])
        console.log(this.coleccionistas)
      }, 
      err => console.error(err)
    )

    this.registroService.getMembresiasActivas().subscribe(
      res => {
        this.membresiasActivas = res;
        console.log("Membresias activas: "+ this.membresiasActivas['length'])
        console.log(this.membresiasActivas)
      }, 
      err => console.error(err)
    )
    
  }

  registrarEvento(){
    if(this.subastaRegistrar.caridad == 'SI'){
      this.subastaRegistrar.tipo = 'S'
    }else{
      this.subastaRegistrar.tipo = 'A'
    }
    if(this.subastaRegistrar.modo == 'VIR'){
      this.subastaRegistrar.id_lugar = null
    }
    console.log(this.subastaRegistrar);

    this.registroService.registrarEvento(this.subastaRegistrar).subscribe(
      res => {
        alert(res)
      }, 
      err => console.error(err)
    )

  }

}
