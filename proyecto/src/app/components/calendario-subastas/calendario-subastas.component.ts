import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendario-subastas',
  templateUrl: './calendario-subastas.component.html',
  styleUrls: ['./calendario-subastas.component.css']
})
export class CalendarioSubastasComponent implements OnInit {

  subastas:any = []

  subastasNombre:any = []

  constructor(public datepipe:DatePipe, private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.registroService.getSubastas().subscribe(
      res => {
        this.subastas = res;
        console.log("Subastas registradas: "+ this.subastas['length'])
      }, 
      err => console.error(err)
    )
  }

  eliminarSubasta(subasta:any){

    this.registroService.eliminarSubasta(subasta).subscribe(
      res => {
        alert(res)
      }, 
      err => console.error(err)
    )

  }
  
}
