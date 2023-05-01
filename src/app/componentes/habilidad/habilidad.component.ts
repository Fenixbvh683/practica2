import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit{

  habilidadList: any;
  miPorfolio: any;

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void {
        this.datosPorfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.habilidadList=data.habilidad;
        console.log
        this.miPorfolio=data;
    })
  }

}
