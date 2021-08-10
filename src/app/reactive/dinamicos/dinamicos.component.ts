import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([['Metal Gear'], ['DBZ']], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArray(){
    return this.miFormulario.get('favoritos') as FormArray;
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid) {
      return;
    }

    //this.favoritosArray.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArray.push(this.fb.control( this.nuevoFavorito.value, Validators.required ));

    this.nuevoFavorito.reset();
  }

  eliminarFavorito(index: number){
    console.log('indice:', index)
    this.favoritosArray.removeAt(index);
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log('Pasamos por aquí: ', this.miFormulario.value);
    this.miFormulario.reset();;
  }
}
