import {Component} from '@angular/core';

 @Component({
    selector:'championes',
    templateUrl:'./championes.component.html'
 })

export class ChampionesComponent{
    public titulo:string;
    public listado:string;
    constructor(){
        this.titulo='Championes';
        this.listado='Los Championes mas populares';
        console.log('componente cargado');
    }
}