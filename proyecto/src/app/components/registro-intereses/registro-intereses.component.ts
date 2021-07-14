import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-registro-intereses',
  templateUrl: './registro-intereses.component.html',
  styleUrls: ['./registro-intereses.component.css']
})
export class RegistroInteresesComponent implements OnInit {

  valorRegistrar = {
    interes:'',
    id_club:0
  }

  interes = {}

  clubes:any = []

  clubId:any = {
    id:0
  }

  interesRegistrar:string = ''

  intereses:any = {
    valor:''
  }

  interesesBase:any = []

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

    this.registroService.getIntereses().subscribe(
      res => {
        this.interesesBase = res;
        console.log(this.interesesBase)
      }, 
      err => {console.error(err)}
    )

  }

  registrarInteres(){

    console.log (this.valorRegistrar.interes)
    console.log (this.valorRegistrar.id_club)
    this.registroService.registrarInteres(this.valorRegistrar).subscribe(
      res => {
        alert(res)
        this.route.navigate(['/inicio']);
      }, 
      err => console.error(err)
    )


  }

}
