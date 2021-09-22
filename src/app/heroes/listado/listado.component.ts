import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'goku', 'gambito','bambi','eren','tanguiro'];
  heroeEliminado: string = '';
  showMess: boolean = false;
  borrarHeroe(){
    this.heroeEliminado = this.heroes.shift() || '';
    console.log('borrando.....' + this.heroeEliminado);
    this.showMess = true;
  }

}
