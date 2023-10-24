import { Kata } from "./katas";

describe("Obtiene el nombre", () => {
    it("debería obtener el nombre", () => {
        const kata = new Kata("kata1", "jorge")
        expect(kata.getNombre()).toEqual("kata1");
    });
    
});