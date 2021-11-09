import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent  {

  heroes:string[]=['IronMan', 'Spiderman', 'Thor'];
  heroeBorrado:string='';

  constructor() { 
    console.log('constructor');
  }

  borrarHeroe(){
    console.log('borrando...')
    //let ultimo=this.heroes.length-1;
    const heroeBorrado=this.heroes.shift();
     //if (heroeBorrado!=undefined) {
        this.heroeBorrado= heroeBorrado||'';
     //}
   //borra el primer elemento del arreglo
   // console.log(heroeBorrado)
   
  }

  

}
