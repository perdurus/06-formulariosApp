import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favoritos[];
}

interface Favoritos{
  id:number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona={
    nombre:'Canal',
    favoritos:[{id:1,nombre:'Snowboard'}, {id:2,nombre:'Rolplaying game'}]
  };

  nuevoJuego:string ='';

  eliminar(index:number){

    this.persona.favoritos.splice(index,1);
  }

  agregar(){
    const nuevo: Favoritos={id:this.persona.favoritos.length + 1, nombre:this.nuevoJuego};

    this.persona.favoritos.push({...nuevo});
    this.nuevoJuego ='';
  }


  guardar (){
    console.log('Formulario posteado')
  }
}
