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

  objetosDeValor2:any = []

  comics:any = []

  comics2:any = []

  clubes:any = []

  clubes2:any = []

  coleccionistas:any= []

  coleccionistas2:any= []

  membresiasActivas:any = []

  subastaRegistrar ={
    id:0,
    hora_inicio:"",
    hora_fin:'',
    fecha:'',
    modo:'',
    tipo:'',
    caridad:'',
    cancelada:'',
    id_lugar:null
  }

  mensajeError:any 

  subastaRegistrada:boolean = false;

  organizadorRegistrar = {
    id_subasta:0,
    id_club:0
  }

  ordenVentaObjetoValor = {

    id_objeto_valor:0,
    id_subasta:0,
    precio_base$:null,
    numero_en_subasta:0,
    duracion_puja_min:null,

  }

  ordenVentaComic = {

    id_comic:0,
    id_subasta:0,
    precio_base$:null,
    numero_en_subasta:0,
    duracion_puja_min:null,

  }

  botonObjeto: boolean = true; 

  precioBase: boolean = false; 

  primeraVezObjetoRegular: boolean = false; 

  primeraVezComic: boolean = false; 

  clubesInvitarRegular:any = []

  coleccionistasInscribir:any = []

  organizadorRegistrado:boolean = false

  botonObjetoComic:boolean = true 

  precioBaseComic:boolean  = false 

  inscripcionRegistrar = {
    id_subasta:0,
    membresia_fechainicio:'',
    cedula_coleccionista:0,
    id_club:0,
    autorizado:0
  }

  invitacionRegistrar = {
    id_subasta:0,
    club_invitado:null
  }

  inscripcion = {
    id_subasta:0,
    membresia_fechainicio:'',
    cedula_coleccionista:0,
    id_club:0,
    autorizado:1
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
        this.clubes2 = res;

        console.log(this.clubes) 
        console.log("Clubes registrados: "+ this.clubes['length'])
      }, 
      err => console.error(err)
    )  

    this.registroService.getObjetos().subscribe(
      res => {
        this.objetosDeValor = res;
        this.objetosDeValor2 = res;
        console.log(this.objetosDeValor) 
        console.log("Objetos registrados: "+ this.objetosDeValor['length'])
      }, 
      err => console.error(err)
    )

    this.registroService.getComics().subscribe(
      res => {
        this.comics = res;
        this.comics2 = res;
        console.log(this.comics) 
        console.log("Comics registrados: "+ this.comics['length'])
      }, 
      err => console.error(err)
    )

    this.registroService.getColeccionistas().subscribe(
      res => {
        this.coleccionistas = res;
        this.coleccionistas2 = res;
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
        
        this.mensajeError = String(res)
        if(this.mensajeError.includes("ERROR")){
          this.subastaRegistrada = false;
        }else{
          this.subastaRegistrada = true;
          this.organizadorRegistrar.id_subasta =  this.subastaRegistrar.id
        }
        console.log(this.mensajeError)
        alert(res)
      }, 
      err => console.error(err)
    )

  }

  registrarOrganizador(){

    console.log(this.organizadorRegistrar)

    this.registroService.registrarOrganizador(this.organizadorRegistrar).subscribe(
      res => {
        
        this.mensajeError = String(res)
        if(this.mensajeError.includes("ERROR")){
          this.organizadorRegistrado = false;
        }else{
          this.organizadorRegistrado = true;
        }
        alert(res)
        
      }, 
      err => console.error(err)
    )
    this.eliminarClub()
  }

  registrarInvitacion(){

    console.log(this.invitacionRegistrar)

    this.registroService.registrarInvitacion(this.invitacionRegistrar).subscribe(
      res => {
          alert(res);
      }, 
      err => console.error(err)
    )  
    this.eliminarClubInvitado()

  }

  registrarInscripcion(){

    console.log(this.invitacionRegistrar)

  }


  registrarOrdenVentaObjeto(){
      console.log(this.ordenVentaObjetoValor)
    this.registroService.primeraSubastaObjeto(this.ordenVentaObjetoValor).subscribe(
      res => {
         let mensaje = String(res)
         console.log(res)
        if(mensaje.includes("SI")){
          alert("es la primera vez que se subasta este objeto")
          this.botonObjeto = false
          this.precioBase  = true
          this.primeraVezObjetoRegular = true

        }else{
          alert("no es la primera vez que se subasta este objeto, se usara el precio base al que fue subastado la ultima vez")
          this.botonObjeto = false
          this.precioBase  = false
          this.primeraVezObjetoRegular = false

        }

      }, 
      err => console.error(err)
    )

  }

  oVentaObjetoRegular(){

    console.log(this.ordenVentaObjetoValor)

    this.registroService.ordenVentaObjetoRegular(this.ordenVentaObjetoValor).subscribe(
      res => {
        alert(res);
        this.eliminarObjetoValor()
        this.botonObjeto = true;
        this.ordenVentaObjetoValor.numero_en_subasta++;
        this.ordenVentaObjetoValor.precio_base$ = null,
        this.ordenVentaObjetoValor.duracion_puja_min = null
      }, 
      err => console.error(err)
    )

  }

  eliminarObjetoValor(){

    this.objetosDeValor2 = []
    for(let objeto of this.objetosDeValor){
      if(objeto.id != this.ordenVentaObjetoValor.id_objeto_valor){
        this.objetosDeValor2.push(objeto);
      }
    }
  }

  oVentaObjetoSubastadoRegular(){
    console.log(this.ordenVentaObjetoValor)
    this.registroService.ordenVentaObjetoSubastado(this.ordenVentaObjetoValor).subscribe(
      res2 => {
         alert(res2)
         this.eliminarObjetoValor()
         this.botonObjeto = true;
         this.ordenVentaObjetoValor.numero_en_subasta++;
         this.ordenVentaObjetoValor.precio_base$ = null,
         this.ordenVentaObjetoValor.duracion_puja_min = null
      }, 
      err2 => console.error(err2)
    )
  }

  registrarOrdenVentaComic(){

  this.registroService.primeraSubastaComic(this.ordenVentaComic).subscribe(
    res => {
       let mensaje = String(res)
       console.log(res)
      if(mensaje.includes("SI")){
        alert("es la primera vez que se subasta este Comic")
        this.botonObjetoComic = false
        this.precioBaseComic  = true
        this.primeraVezComic = true


      }else{
        alert("no es la primera vez que se subasta este Comic, se usara el precio base al que fue subastado la ultima vez")
        this.botonObjetoComic = false
        this.precioBaseComic  = false
        this.primeraVezComic = false

      }

    }, 
    err => console.error(err)
  )

}

eliminarComic(){

  this.comics2 = []
  for(let comic of this.comics){
    if(comic.id != this.ordenVentaComic.id_comic){
      this.comics2.push(comic);
    }
  }
}

eliminarClub(){
// revisar si hace que explota el proyecto
  this.clubes2 = []
  for(let club of this.clubes){
    if(club.id != this.organizadorRegistrar.id_club){
      this.clubes2.push(club);
    }
  }
  console.log(this.clubes2)
}

eliminarClubInvitado(){
  // revisar si hace que explota el proyecto
    this.clubes2 = []
    for(let club of this.clubes){
      if(club.id != this.organizadorRegistrar.id_club && club.id != this.invitacionRegistrar.club_invitado){
        this.clubes2.push(club);
      }
    }
    console.log(this.clubes2)
  }

oVentaComic(){

  console.log(this.ordenVentaComic)
  console.log("hoi")


  this.registroService.ordenVentaComicRegular(this.ordenVentaComic).subscribe(
    res => {
      alert(res);
      this.eliminarComic()
      this.botonObjetoComic = true;
      this.ordenVentaComic.numero_en_subasta++;
    // this.ordenVentaComic.precio_base$ = null,
    // this.ordenVentaComic.duracion_puja_min = null
    }, 
    err => console.error(err)
  )

  }

  

oVentaComicSubastadoRegular(){
  console.log(this.ordenVentaComic)
  this.registroService.ordenVentaComicSubastado(this.ordenVentaComic).subscribe(
    res2 => {
       alert(res2)
       this.eliminarComic()
       this.botonObjetoComic = true;
       this.ordenVentaComic.numero_en_subasta++;
      //  this.ordenVentaComic.precio_base$ = null,
      //  this.ordenVentaComic.duracion_puja_min = null
    }, 
    err2 => console.error(err2)
  )
}



}
