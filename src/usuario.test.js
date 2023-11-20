import { Estudiante } from "./usuario";

describe("Pruebas de usuario", () => {
    it("debería devolver el nombre", () => {
        const estudiante = new Estudiante("Pedro"); 
        expect(estudiante.getNombre()).toEqual("Pedro");
    });
});