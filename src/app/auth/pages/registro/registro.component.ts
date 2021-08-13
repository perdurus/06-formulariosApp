import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPatter, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPatter)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },{
    validators: [this.vs.camposIguales('password', 'password2')]
  });

  //emailErroMsg:string = '';

  get emailErroMsg():string{

    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.required){
      return 'El campo es obligatorio';
    }else if (errors?.pattern){
      return 'El valor no tiene el formato de correo electrónico';
    }else if (errors?.emailTomado){
      return 'El correo ya existe en el sistema';
    }

    return 'Hola mundo!'
  }

  constructor(private fb: FormBuilder, private vs: ValidatorService, private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Sergio Canal',
      email: 'scanalr@minsait.com',
      username: 'perdurus',
      password: '123456',
      password2: '123456'
    })
  }


  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  

  submitForm(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
