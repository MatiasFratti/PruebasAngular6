import{Component} from '@angular/core';

@Component({
    selector:'videojuego',
    templateUrl:'./videojuego.component.html',
    styleUrls:['./videojuego.component.css']
})

export class VideojuegoComponent{
    public top:string
    public titulo:string[];
    public listado:string;
    constructor(){
        this.top = "Lista de Juegos";
        this.titulo=['GTA',"Fifa 19","Gran Turismo"];
        this.listado='Los juegos mas populares';
        console.log('componente cargado');
    }
    Agregar(newJuego){
        if(newJuego.value==""){
            return false;
        }
        else{
            this.titulo.push(newJuego.value);
            newJuego.value ="";
        }
        
    }
    Eliminar(juego){
        for(var i=0; i<this.titulo.length; i++){
            if(juego==this.titulo[i]){
                this.titulo.splice(i,1);
            }
            
        }
    }
}