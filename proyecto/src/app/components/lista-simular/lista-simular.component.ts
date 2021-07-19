import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-simular',
  templateUrl: './lista-simular.component.html',
  styleUrls: ['./lista-simular.component.css']
})
export class ListaSimularComponent implements OnInit {

  subastas:any = []

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



}
