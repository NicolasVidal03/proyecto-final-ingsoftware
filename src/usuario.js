class Usuario {
    constructor(id, nombre, descripcion) {
        this._id = id;
        this._nombre = nombre;
        this._descripcion = descripcion;
    }

    getNombre() {
        return "Pedro";
    }
}


export class Estudiante extends Usuario{
    constructor(id, nombre, descripcion, promedio) {
        super(id, nombre, descripcion);
        this._promedio = promedio;
    }
}

