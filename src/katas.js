export class Kata{
    constructor(nombre, autor){
        this._nombre = nombre;
        this._autor = autor;
    }

    getNombre(){
        return this._nombre;
    }
    getAutor(){
        return this._autor;
    }

    mostrar(){
        return `Nombre kata: ${this._nombre}, Autor: ${this._autor}`;
    }
}