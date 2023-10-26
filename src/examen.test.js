import { Kata, CatalogoKata } from "./katas";

describe("Obtiene el estado de la kata", () => {
    it("debería obtener el estado de la kata", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        expect(kata.getEstado()).toEqual("No terminado");
    });

    it("deberia mostrar que el cambio se realizo", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        expect(kata.setEstado("Terminado")).toEqual(true);
        });
    




});