import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from "../models/Registro";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  API_URL = 'http://localhost:3000/api'

  constructor(private http:HttpClient) {
   }

   getRegistros(){
     return this.http.get(`${this.API_URL}/registros`)
   }

   getRegistro(id:string){
    return this.http.get(`${this.API_URL}/registros/${ id }`)
   }

   saveRegistro(registro:Registro){
    return this.http.post(`${this.API_URL}/registros`, registro)
   }

   registrarPais(pais:any){
    return this.http.post(`${this.API_URL}/registros/registrarpais`, pais)
   }

   getPaises(){
    return this.http.get(`${this.API_URL}/registros/getpaises`)
   }

   getCiudades(){
    return this.http.get(`${this.API_URL}/registros/getciudades`)
   }

   getObjetos(){
    return this.http.get(`${this.API_URL}/registros/getobjetos`)
   }

   getComics(){
    return this.http.get(`${this.API_URL}/registros/getcomics`)
   }

   getLugares(){
    return this.http.get(`${this.API_URL}/registros/getlugares`)
   }

   getMembresiasActivas(){
    return this.http.get(`${this.API_URL}/registros/getmembresiasactivas`)
   }

   getClubes(){
    return this.http.get(`${this.API_URL}/registros/getclubes`)
   }

   getColeccionistas(){
    return this.http.get(`${this.API_URL}/registros/getcoleccionistas`)
   }

   getMembresias(){
    return this.http.get(`${this.API_URL}/registros/getmembresias`)
   }

   getIntereses(){
    return this.http.get(`${this.API_URL}/registros/getintereses`)
   }

   primeraSubastaObjeto(objeto:any){
    return this.http.post(`${this.API_URL}/registros/primerasubastaobjeto`,objeto)
   }

   primeraSubastaComic(comic:any){
    return this.http.post(`${this.API_URL}/registros/primerasubastacomic`,comic)
   }

   registrarCiudad(ciudad:any){
    return this.http.post(`${this.API_URL}/registros/registrarciudad`,ciudad)
   }

   registrarRepresentante(representante:any){
    return this.http.post(`${this.API_URL}/registros/registrarrepresentante`,representante)
   }

   registrarEvento(evento:any){
    return this.http.post(`${this.API_URL}/registros/registrarevento`,evento)
   }

   registrarOrganizador(organizador:any){
    return this.http.post(`${this.API_URL}/registros/registrarorganizador`,organizador)
   }

   registrarInscripcion(inscripcion:any){
    return this.http.post(`${this.API_URL}/registros/registrarinscripcion`,inscripcion)
   }

   registrarInvitacion(invitacion:any){
    return this.http.post(`${this.API_URL}/registros/registrarinvitacion`,invitacion)
   }


   getColeccionistasParaInscripcion(club:any){
    return this.http.post(`${this.API_URL}/registros/getcoleccionistasinscribir`,club)
   }

   ordenVentaObjetoSubastado(objeto:any){
    return this.http.post(`${this.API_URL}/registros/ordenventaobjetosubastado`,objeto)
   }

   ordenVentaObjetoRegular(objeto:any){
    return this.http.post(`${this.API_URL}/registros/ordenventaobjetoregular`,objeto)
   }

   ordenVentaComicSubastado(comic:any){
    return this.http.post(`${this.API_URL}/registros/ordenventacomicsubastado`,comic)
   }

   ordenVentaComicRegular(comic:any){
    return this.http.post(`${this.API_URL}/registros/ordenventacomicregular`,comic)
   }

   


   registrarColeccionista(coleccionista:any){
    return this.http.post(`${this.API_URL}/registros/registrarcoleccionista`,coleccionista)
   }

   registrarClub(club:any){
    return this.http.post(`${this.API_URL}/registros/registrarclub`,club)
   }

   registrarMembresia(membresia:any){
    return this.http.post(`${this.API_URL}/registros/registrarmembresia`,membresia)
   }

   deleteRegistro(id:string){
    return this.http.delete(`${this.API_URL}/registros/${ id }`)
   }
   

   updateRegistro(id:any, updatedRegistro:Registro):Observable<Registro>{
    return this.http.put(`${this.API_URL}/registros/${ id }`, updatedRegistro)

   }

   cerrarMembresia(membresiacerrar:any){
    return this.http.post(`${this.API_URL}/registros/cerrarmembresia`, membresiacerrar)
   }

   registrarObjeto(objeto:any){
    return this.http.post(`${this.API_URL}/registros/registrarobjeto`,objeto)
   }

   getIdObjeto(nombre:any){
    return this.http.post(`${this.API_URL}/registros/getidobjeto`,nombre)
   }

   registrarComic(comic:any){
    return this.http.post(`${this.API_URL}/registros/registrarcomic`,comic)
   }

   registrarInteres(interes:any){
    return this.http.post(`${this.API_URL}/registros/registrarinteres`,interes)
   }

   registrarTelefono(telefono:any){
    return this.http.post(`${this.API_URL}/registros/registrartelefono`,telefono)
   }

   registrarOrganizacion(organizacion:any){
    return this.http.post(`${this.API_URL}/registros/registrarorganizacion`,organizacion)
   }

   registrarLugar(lugar:any){
    return this.http.post(`${this.API_URL}/registros/registrarlugar`,lugar)
   }


  }
