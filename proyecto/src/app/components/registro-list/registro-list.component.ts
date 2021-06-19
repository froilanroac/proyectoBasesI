import { Component, OnInit } from '@angular/core';
import { RegistrosService } from "../../services/registros.service";

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent implements OnInit {

  registros:any = [];

  constructor(private registrosService: RegistrosService) { 

  }

  ngOnInit(): void {
    this.getRegistros();
  }

  getRegistros(){
    this.registrosService.getRegistros().subscribe(
      res => {
        this.registros = res;
      }, 
      err => console.error(err)
    )
  }

  deleteRegistro(id:string){

    this.registrosService.deleteRegistro(id).subscribe(
      res => {
        console.log(res)
        this.getRegistros();
      },
      err => console.error(err)
    );

  }

  editRegistro(id:string){

    console.log(id)

    // this.gamesService.deleteGame(id).subscribe(
    //   res => {
    //     console.log(res)
    //     this.getGames();
    //   },
    //   err => console.error(err)
    // );

  }

}
