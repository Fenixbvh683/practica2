import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  url:string="API"

  constructor(private http:HttpClient) { }
    
  obtenerDatos():Observable<any>{
    
    //return this.http.get(this.url + "persona");
    return this.http.get("./assets/data/data.json");
  }
}
