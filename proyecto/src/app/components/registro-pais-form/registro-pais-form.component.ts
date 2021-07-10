import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-registro-pais-form',
  templateUrl: './registro-pais-form.component.html',
  styleUrls: ['./registro-pais-form.component.css']
})
export class RegistroPaisFormComponent implements OnInit {

  pais = {
    nombre: '',
    continente: '',
    nacionalidad: ''
  };

  constructor(private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   }

  printPais(){
  if (this.pais.nombre != '' && this.pais.continente != '' && this.pais.nacionalidad != ''){
  console.log(this.pais)
  this.registrarPais();
  }else{
    alert("ERROR: Verifique que todos los campos esten completos")
  }
  }

  registrarPais(){
    this.registroService.registrarPais(this.pais)
    .subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/inicio']);
      },
      err => console.error(err)
    );
  }

}
