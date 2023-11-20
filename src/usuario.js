class Usuario {
    constructor(nombre, descripcion) {
        this._nombre = nombre;
        this._descripcion = descripcion;
    }

    getNombre() {
        return this._nombre;
    }
}


export class Estudiante extends Usuario{
    constructor(nombre, descripcion, promedio) {
        super(nombre, descripcion);
        this._promedio = promedio;
    }
}

