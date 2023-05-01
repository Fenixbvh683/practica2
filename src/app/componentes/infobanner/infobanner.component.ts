
import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-infobanner',
  templateUrl: './infobanner.component.html',
  styleUrls: ['./infobanner.component.css']
})
export class InfobannerComponent implements OnInit{

  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    })
  }

}
