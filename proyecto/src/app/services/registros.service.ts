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

   registrarCiudad(ciudad:any){
    return this.http.post(`${this.API_URL}/registros/registrarciudad`,ciudad)
   }

   registrarRepresentante(representante:any){
    return this.http.post(`${this.API_URL}/registros/registrarrepresentante`,representante)
   }


   registrarColeccionista(coleccionista:any){
    return this.http.post(`${this.API_URL}/registros/registrarcoleccionista`,coleccionista)
   }

   registrarClub(club:any){
    return this.http.post(`${this.API_URL}/registros/registrarclub`,club)
   }

   deleteRegistro(id:string){
    return this.http.delete(`${this.API_URL}/registros/${ id }`)
   }

   updateRegistro(id:any, updatedRegistro:Registro):Observable<Registro>{
    return this.http.put(`${this.API_URL}/registros/${ id }`, updatedRegistro)

   }


  }
