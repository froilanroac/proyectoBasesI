import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { ActivatedRoute,Router } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-simular',
  templateUrl: './simular.component.html',
  styleUrls: ['./simular.component.css']
})
export class SimularComponent implements OnInit {

  subasta:any = {}

  constructor(public datepipe:DatePipe, private registroService: RegistrosService, private route: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    
    const params = this.activatedRoute.snapshot.params;
    console.log(params.id)
    if (params.id){
      this.registroService.getSubasta(params)
      .subscribe(
        res=> {
          // console.log(res)
          this.subasta = res;
          this.subasta = this.subasta[0]
          console.log(this.subasta)
        },
        err => console.error(err)
      )
    }

  }

}
