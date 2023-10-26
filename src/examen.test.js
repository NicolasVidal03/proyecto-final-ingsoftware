import { Kata, CatalogoKata } from "./katas";

describe("Obtiene el estado de la kata", () => {
    it("debería obtener el nombre", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        expect(kata.getEstado()).toEqual("No terminado");
    });




});