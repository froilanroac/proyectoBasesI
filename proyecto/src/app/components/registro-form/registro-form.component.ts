import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/Registro';
import { RegistrosService } from 'src/app/services/registros.service';

import { ActivatedRoute,Router } from "@angular/router";


@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  registro: Registro = {
    id:0 ,
    title: '',
  };
  
  edit: boolean = false

  constructor(private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.registroService.getRegistro(params.id)
      .subscribe(
        res=> {
          console.log(res)
          this.registro = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewRegistro(){
    
    delete this.registro.id;

    this.registroService.saveRegistro(this.registro)
    .subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/registros']);
      },
      err => console.error(err)
    );

  }

  updateRegistro(){

    this.registroService.updateRegistro(this.registro.id, this.registro)
    .subscribe(
      res => {
          console.log(res)
          this.route.navigate(['/registros'])
      },
      err => console.log(err)
    )
    console.log(this.registro)
  }

}
