import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { GuardGuard } from './componentes/servicios/guard.guard';


const routes: Routes = [
    {path: 'porfolio', component:InicioComponent, canActivate:[GuardGuard]},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo:'login',pathMatch:'full'},
    {path: '**', component: Error404Component},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
