import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miformulario') miFormulario!: NgForm;
  initForm ={
    producto: 'POCO S3',
    precio:10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean {
  
    //console.log (this.miFormulario);
    //this.miFormulario?.controls.precio?.setErrors({'producto': true});
    
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched;
  }

  precioValido():boolean{
    //console.log (this.miFormulario);
    
    //this.miFormulario?.controls.precio?.setErrors({'precio': true});

    return this.miFormulario?.controls.precio?.touched &&
         this.miFormulario?.controls.precio?.value < 0;
  }


  //guardar(miFormulario: NgForm ){
  guardar(){
    //console.log(this.miFormulario);
    console.log('Posteo correcto');

    this.miFormulario.resetForm({
      producto: 'POCO S3',
      precio:10,
      existencias:10
    });
  }

}

