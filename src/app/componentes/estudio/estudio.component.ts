import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit{

estudioList:any;
miPorfolio:any;

constructor(private datosPorfolio:PorfolioService){}

ngOnInit(): void {
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.estudioList=data.estudios;
    console.log(data);
    this.miPorfolio=data;

  })
}



    

}
