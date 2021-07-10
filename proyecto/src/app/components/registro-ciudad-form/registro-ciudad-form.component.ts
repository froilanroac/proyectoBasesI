import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-registro-ciudad-form',
  templateUrl: './registro-ciudad-form.component.html',
  styleUrls: ['./registro-ciudad-form.component.css']
})
export class RegistroCiudadFormComponent implements OnInit {

  ciudad = {
    id_pais: '',
    nombre: ''
  };

  paises:any = [] ;

  constructor(private registrosService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.registrosService.getPaises().subscribe(
      res => {
        this.paises = res;
        console.log(res)
      }, 
      err => console.error(err)
    )
  }

  guardarCiudad(){

    console.log(this.ciudad);

    this.registrosService.registrarCiudad(this.ciudad).subscribe(
      res => {
        this.paises = res;
        console.log(res)
        this.route.navigate(['/inicio']);
      }, 
      err => console.error(err)
    )

  }

}




