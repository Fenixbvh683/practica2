import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { InfobannerComponent } from './componentes/infobanner/infobanner.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EstudioComponent } from './componentes/estudio/estudio.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PorfolioService } from './componentes/servicios/porfolio.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { InterceptorService } from './componentes/servicios/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    InfobannerComponent,
    AcercadeComponent,
    EstudioComponent,
    ExperienciaComponent,
    HabilidadComponent,
    ProyectoComponent,
    FooterComponent,
    Error404Component,
    InicioComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [PorfolioService,
              {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
