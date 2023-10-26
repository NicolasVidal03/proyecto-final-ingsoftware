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
    
    it("deberia mostrar que el cambio no se realizp porque se ingreso un valor invalido", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        expect(kata.setEstado("acabado")).toEqual(false);
    });

    it("deberia cambiar el estado de la kata a Terminado", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        kata.setEstado("Terminado");
        expect(kata.getEstado()).toEqual("Terminado");
    });

    it("NO deberia cambiar el estado de la kata", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        kata.setEstado("acabado");
        expect(kata.getEstado()).toEqual("No terminado");
    });



});