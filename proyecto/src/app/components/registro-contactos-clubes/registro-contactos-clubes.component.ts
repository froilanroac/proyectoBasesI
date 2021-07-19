import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-registro-contactos-clubes',
  templateUrl: './registro-contactos-clubes.component.html',
  styleUrls: ['./registro-contactos-clubes.component.css']
})
export class RegistroContactosClubesComponent implements OnInit {

  clubes:any = []

  valorRegistrar={
    id_club:0,
    telefono:null
  }

  constructor(private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.registroService.getClubes().subscribe(
      res => {
        this.clubes = res;
        console.log("Clubes registrados: "+ this.clubes['length'])
        console.log(this.clubes)
      }, 
      err => {console.error(err)}
    )
    
  }

  registrarTelefono(){
    console.log(this.valorRegistrar);
    this.registroService.registrarTelefono(this.valorRegistrar).subscribe(
      res => {
        alert(res);
        this.route.navigate(['/inicio']);
      }, 
      err => console.error(err)
    )

  }

}
