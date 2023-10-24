import { Kata } from "./katas";

describe("Obtiene el nombre", () => {
    it("debería obtener el nombre", () => {
        const kata = new Kata("kata1", "jorge")
        expect(kata.getNombre()).toEqual("kata1");
    });
    it("debería obtener el nombre", () => {
        const kata = new Kata("kata1", "jorge")
        expect(kata.getAutor()).toEqual("jorge");
    });
    it("debería mostrar el nombre y autor", () => {
        const kata = new Kata("kata2", "dario")
        expect(kata.mostrar()).toEqual("Nombre kata: kata2, Autor: dario");
    });
});