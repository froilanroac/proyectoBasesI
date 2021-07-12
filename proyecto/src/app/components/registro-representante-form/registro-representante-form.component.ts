import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";


@Component({
  selector: 'app-registro-representante-form',
  templateUrl: './registro-representante-form.component.html',
  styleUrls: ['./registro-representante-form.component.css']
})
export class RegistroRepresentanteFormComponent implements OnInit {

  representante = {
    nombre1_repre: '',
    apellido1_repre:'',
    cedula:'',
    nombre2_repre:'',
    apellido2_repre:''
  };

  constructor(private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  registrarRepresentante(){
    console.log("representante a insertar: ")
    console.log(this.representante)
    this.registroService.registrarRepresentante(this.representante)
    .subscribe(
      res => {
        alert(res);
        this.route.navigate(['/inicio']);
      },
      err => console.error(err)
    );
  }

}
