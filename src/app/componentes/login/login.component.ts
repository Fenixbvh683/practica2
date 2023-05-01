import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
form: FormGroup;

constructor(private formBuilder: FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router){

  this.form= this.formBuilder.group({

    password:['',[Validators.required, Validators.minLength(8)]],
    email:['',[Validators.required, Validators.email]]

  })
}

ngOnInit(): void {}

get Password(){
  return this.form.get("password");
}

get Mail(){
  return this.form.get("email");
}

get PasswordValid(){
  return this.Password?.touched && !this.Password?.valid;
}

get MailValid(){
  return this.Mail?.touched && !this.Mail?.valid;
}

onEnviar(event: Event){
  event.preventDefault;

  this.autenticacionService.Login(this.form.value).subscribe(data=>{
    console.log("DATA:" + JSON.stringify(data));
    this.ruta.navigate(['/inicio'])
  })

  if (this.form.valid){
    alert("Todo salio bien ¡Enviar Formulario!")
  }else{
    this.form.markAllAsTouched();
    alert("Todo salio mal ¡No enviar Formulario!")
  }
}
  
}
