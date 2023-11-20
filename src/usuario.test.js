import { Estudiante, Docente } from "./usuario";

describe("Pruebas de usuario", () => {
    it("debería devolver el nombre", () => {
        const estudiante = new Estudiante("Pedro"); 
        expect(estudiante.getNombre()).toEqual("Pedro");
    });

    it("debería devolver el nombre de este otro estudiante", () => {
        const estudiante = new Estudiante("Juan"); 
        expect(estudiante.getNombre()).toEqual("Juan");
    });

    it("debería devolver la descripcion del estudiante", () => {
        const estudiante = new Estudiante("Juan", "Hola me llamo Juan"); 
        expect(estudiante.getDesc()).toEqual("Hola me llamo Juan");
    });

    it("debería devolver el nombre del docente", () => {
        const docente = new Docente("Jorge"); 
        expect(docente.getNombre()).toEqual("Jorge");
    });


});