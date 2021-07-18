import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';

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

  organizacionesCaridad:any = []

  organizacionesCaridad2:any = []

  subastaRegistrar ={
    id:4,
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

  idObjetosPurgados:any = []

  idComicsPurgados:any = []

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
    membresia_fechainicio:null ,
    cedula_coleccionista:0,
    id_club:0,
    autorizado:0
  }

  registroCaridad = {
    id_organizacion:0,
    id_subasta:0,
    porcentaje:null
  }

  coleccionistasInscribirId:any = []

  idInscripcion:number = 0




  constructor(public datepipe:DatePipe, private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.registroService.getLugares().subscribe(
      res => {
        this.lugares = res;
        // console.log(this.lugares) 
        console.log("Lugares registrados: "+ this.lugares['length'])
      }, 
      err => console.error(err)
    )  
    
    this.registroService.getClubes().subscribe(
      res => {
        this.clubes = res;
        this.clubes2 = res;
        // console.log(this.clubes) 
        console.log("Clubes registrados: "+ this.clubes['length'])
      }, 
      err => console.error(err)
    )  

    this.registroService.getObjetos().subscribe(
      res => {
        this.objetosDeValor = res;
        this.objetosDeValor2 = res;
        // console.log(this.objetosDeValor) 
        console.log("Objetos registrados: "+ this.objetosDeValor['length'])
      }, 
      err => console.error(err)
    )

    this.registroService.getComics().subscribe(
      res => {
        this.comics = res;
        this.comics2 = res;
        // console.log(this.comics) 
        console.log("Comics registrados: "+ this.comics['length'])
      }, 
      err => console.error(err)
    )

    this.registroService.getColeccionistas().subscribe(
      res => {
        this.coleccionistas = res;
        this.coleccionistas2 = res;
        // console.log("Coleccionistas registrados: "+ this.coleccionistas['length'])
        // console.log(this.coleccionistas)
      }, 
      err => console.error(err)
    )

    this.registroService.getMembresiasActivas().subscribe(
      res => {
        this.membresiasActivas = res;
        // console.log("Membresias activas: "+ this.membresiasActivas['length'])
        // console.log(this.membresiasActivas)
      }, 
      err => console.error(err)
    )

    this.registroService.getOrganizaciones().subscribe(
      res => {
        this.organizacionesCaridad = res;
        this.organizacionesCaridad2 = res;
        // console.log(this.organizacionesCaridad)
        // console.log("Membresias activas: "+ this.membresiasActivas['length'])
        // console.log(this.membresiasActivas)
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
    // console.log(this.subastaRegistrar);

    this.registroService.registrarEvento(this.subastaRegistrar).subscribe(
      res => {
        
        this.mensajeError = String(res)
        if(this.mensajeError.includes("ERROR")){
          this.subastaRegistrada = false;
        }else{
          this.subastaRegistrada = true;
          this.organizadorRegistrar.id_subasta =  this.subastaRegistrar.id
          this.ordenVentaObjetoValor.id_subasta = this.subastaRegistrar.id
          this.ordenVentaComic.id_subasta = this.subastaRegistrar.id
          this.invitacionRegistrar.id_subasta = this.subastaRegistrar.id
          this.inscripcionRegistrar.id_subasta = this.subastaRegistrar.id
          this.inscripcion.id_subasta = this.subastaRegistrar.id
          this.registroCaridad.id_subasta = this.subastaRegistrar.id

        }
        // console.log(this.mensajeError)
        alert(res)
      }, 
      err => console.error(err)
    )

  }

  registrarOrganizador(){

    // console.log(this.organizadorRegistrar)

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
    this.getColeccionistasInscribir()
    this.getIdPurgarObjetos()
    this.getIdPurgarComics()

  }

  

  async getIdPurgarObjetos(){
    console.log(this.organizadorRegistrar)
     this.registroService.getIdObjetosPurgados(this.organizadorRegistrar).subscribe(
      res => {
        this.idObjetosPurgados = res
        console.log(this.idObjetosPurgados)
        this.purgarObjetos()
      }, 
      err => console.error(err)
    )
  }

  async getIdPurgarComics(){
    console.log(this.organizadorRegistrar)
     this.registroService.getIdComicsPurgados(this.organizadorRegistrar).subscribe(
      res => {
        this.idComicsPurgados = res
        console.log(this.idComicsPurgados)
        this.purgarComics()
      }, 
      err => console.error(err)
    )
  }

  purgarObjetos(){
    let lista = this.objetosDeValor2
    this.objetosDeValor2 = []
    for(let objeto of this.idObjetosPurgados){
        for(let insertar of lista){
          if(objeto.id == insertar.id){
            this.objetosDeValor2.push(insertar);
          }
        }
    }
  }

  purgarComics(){
    let lista = this.comics2
    this.comics2 = []
    for(let comic of this.idComicsPurgados){
        for(let insertar of lista){
          if(comic.id == insertar.id){
            this.comics2.push(insertar);
          }
        }
    }
  }


  eliminarClubInvitado(){
  let clubes = this.clubes2
  this.clubes2 = []
    for(let club of clubes){
    if(club.id != this.invitacionRegistrar.club_invitado){
      this.clubes2.push(club);
    }
    }
  }


  registrarInvitacion(){

    // console.log(this.invitacionRegistrar)

    this.registroService.registrarInvitacion(this.invitacionRegistrar).subscribe(
      res => {
          alert(res);
      }, 
      err => console.error(err)
    )  
    this.eliminarClubInvitado()
  }


  registrarInscripcion(){

    for(let inscripcion of this.coleccionistasInscribirId){
      if(inscripcion.id == this.idInscripcion){
        this.inscripcion.id_subasta = this.subastaRegistrar.id
        this.inscripcion.cedula_coleccionista = inscripcion.cedula_coleccionista
        this.inscripcion.membresia_fechainicio = inscripcion.fecha_inicio
        this.inscripcion.id_club = inscripcion.id_club
      }
    }

    console.log(this.inscripcion)
    this.registrarInscripcionServidor()

  }

  registrarInscripcionServidor(){
    console.log(this.inscripcion)
    this.registroService.registrarInscripcion(this.inscripcion).subscribe(
      res => {
    alert(res)
      }, 
      err => console.error(err)
    )
    this.eliminarInscripcion()
  }

  eliminarInscripcion(){

    let coleccionistas = this.coleccionistasInscribirId
    // console.log(coleccionistas)
    // console.log(this.inscripcion)
    this.coleccionistasInscribirId = []
      for(let inscripcion of coleccionistas){
      if(inscripcion.cedula_coleccionista != this.inscripcion.cedula_coleccionista){
        this.coleccionistasInscribirId.push(inscripcion);
      }
      }
  }


  registrarOrdenVentaObjeto(){
      console.log(this.ordenVentaObjetoValor)
    this.registroService.primeraSubastaObjeto(this.ordenVentaObjetoValor).subscribe(
      res => {
         let mensaje = String(res)
        //  console.log(res)
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
        this.ordenVentaComic.numero_en_subasta++;
        this.ordenVentaObjetoValor.numero_en_subasta++;
        this.ordenVentaObjetoValor.precio_base$ = null,
        this.ordenVentaObjetoValor.duracion_puja_min = null
      }, 
      err => console.error(err)
    )

  }

  eliminarObjetoValor(){

    let objetos = this.objetosDeValor2
    this.objetosDeValor2 = []
    for(let objeto of objetos){
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
         this.ordenVentaComic.numero_en_subasta++;
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
      //  console.log(res)
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

  let comics = this.comics2
  this.comics2 = []
  for(let comic of comics){
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
}


oVentaComic(){

  this.registroService.ordenVentaComicRegular(this.ordenVentaComic).subscribe(
    res => {
      alert(res);
      this.eliminarComic()
      this.botonObjetoComic = true;
      this.ordenVentaComic.numero_en_subasta++;
      this.ordenVentaObjetoValor.numero_en_subasta++;
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
       this.ordenVentaObjetoValor.numero_en_subasta++;
      //  this.ordenVentaComic.precio_base$ = null,
      //  this.ordenVentaComic.duracion_puja_min = null
    }, 
    err2 => console.error(err2)
  )
}

getColeccionistasInscribir(){

  this.registroService.getColeccionistasParaInscripcion(this.organizadorRegistrar).subscribe(
    res => {
        this.coleccionistasInscribir = res
        // console.log(this.coleccionistasInscribir)
        let i = 0
          for(let coleccionista of this.coleccionistasInscribir){
            this.coleccionistasInscribirId.push({
              id:i,
              cedula_coleccionista: coleccionista.cedula_coleccionista,
              fecha_inicio: this.datepipe.transform(coleccionista.fecha_inicio,'yyyy/MM/dd'),
              id_club: coleccionista.id_club
            })
            i++
        }
        // console.log(this.coleccionistasInscribirId)
    }, 
    err => console.error(err)
  )  

}

registrarOrganizacion(){

  this.registroService.registrarCaridad(this.registroCaridad).subscribe(
    res => {
      alert(res)
    }, 
    err => console.error(err)
  ) 
  this.eliminarOrganizacion()

}

  eliminarOrganizacion(){

    let organizaciones = this.organizacionesCaridad2
    this.organizacionesCaridad2 = []
    for(let organizacion of organizaciones){
      if(organizacion.id != this.registroCaridad.id_organizacion){
        this.organizacionesCaridad2.push(organizacion);
      }
    }
  }

  goInicio(){
    this.route.navigate(['/inicio']);
  }


}
