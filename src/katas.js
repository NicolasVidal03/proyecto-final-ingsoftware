export class Kata{
    constructor(nombre, autor, descripcion, dificultad, puntuacion=-1){
        this._nombre = nombre;
        this._autor = autor;
        this._descripcion = descripcion;
        this._dificultad = dificultad;
        this._id = -1;
        this._puntuacion = puntuacion;
    }

    getNombre(){
        return this._nombre;
    }
    getAutor(){
        return this._autor;
    }
    getDescripcion() {
        return this._descripcion;
    }
    getDescCorta() {
        return this._descripcion.slice(0, 16) + "...";
    }
    getDificultad() {
        return this._dificultad;
    }
    getId() {
        return this._id;
    }
    getPuntuacion(){
        return this._puntuacion;
    }


    setNombre(nombre) {
        this._nombre = nombre;
    }
    setAutor(autor) {
        this._autor = autor;
    }
    setDescripcion(desc) {
        this._descripcion = desc;
    }
    setDificultad(dificultad) {
        this._dificultad = dificultad;
    }
    setId(id) {
        this._id = id;
    }
    setPuntuacion(n){
        if(n > 100 || n < 0)
        {
            n = -1;
        }
        this._puntuacion = n;
    }

    mostrar(){
//        return `<button class=\"btn\">Nombre kata: ${this._nombre}, Autor: ${this._autor}</button>`;
    return `<div>Nombre kata: ${this._nombre}, Autor: ${this._autor}</div>`;
    }


}

export class CatalogoKata{
    constructor()
    {
        this.listaKatas = [];
        this.cont = 0;
    }

    agregarKata(kata)
    {
        kata.setId(this.cont++);
        this.listaKatas.push(kata);
    }

    eliminarKata(pos) {
        this.listaKatas.splice(pos, 1);
    }

    getLista(){
        return this.listaKatas;
    }

    mostrarCatalogoKatas(){
        let mensaje = "";
        for(let i = 0; i<this.listaKatas.length; i++)
        {
            mensaje+=this.listaKatas[i].mostrar();
        }
        return mensaje;
    }

    buscarPorId(id) {
        for(let i = 0; i< this.listaKatas.length; i++)
        {
            if(this.listaKatas[i].getId() == id)
            return this.listaKatas[i];
        }
    }
    buscarPorNombre(nombreKata){
        const coincidencias = [];
        for(let i = 0; i<this.listaKatas.length; i++)
        {
            if(this.listaKatas[i].getNombre().toLowerCase() === nombreKata.toLowerCase()){

                coincidencias.push(this.listaKatas[i]);
            }
        }
        return coincidencias;
    }

    buscarPorAutor(nombreAutor){
        const coincidencias = [];
        for(let i = 0; i<this.listaKatas.length; i++)
        {
            if(this.listaKatas[i].getAutor() === nombreAutor){
                coincidencias.push(this.listaKatas[i]);
            }
        }
        return coincidencias;
    }

    buscarPorDescripcion(descripcion){
        const coincidencias = [];
        for(let i = 0; i<this.listaKatas.length; i++)
        {
            if(this.listaKatas[i].getDescripcion() === descripcion){
                coincidencias.push(this.listaKatas[i]);
            }
        }
        return coincidencias;
    }
}