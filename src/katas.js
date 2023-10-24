export class Kata{
    constructor(nombre, autor, descripcion, dificultad){
        this._nombre = nombre;
        this._autor = autor;
        this._descripcion = descripcion;
        this._dificultad = dificultad;
    }

    getNombre(){
        return this._nombre;
    }
    getAutor(){
        return this._autor;
    }

    mostrar(){
        return `<div>Nombre kata: ${this._nombre}, Autor: ${this._autor}</div>`;
    }
}

export class CatalogoKata{
    constructor()
    {
        this.listaKatas = [];
    }

    agregarKata(kata)
    {
        this.listaKatas.push(kata);
    }

    mostrarCatalogoKatas(){
        let mensaje = "";
        for(let i = 0; i<this.listaKatas.length; i++)
        {
            mensaje+=this.listaKatas[i].mostrar();
        }
        return mensaje;
    }

}