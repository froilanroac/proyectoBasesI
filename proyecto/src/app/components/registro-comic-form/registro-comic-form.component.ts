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
    precio_org:null,
    vol_numero:null
  }

  constructor(private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
