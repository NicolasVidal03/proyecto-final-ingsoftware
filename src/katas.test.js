import { Kata, CatalogoKata } from "./katas";

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
    it("deberia tener tamaño 0", ()=> {
        const miCatalogo = new CatalogoKata();
        expect(miCatalogo.listaKatas.length).toEqual(0);
    })
    it("deberia tener tamaño 1 porque se pusheo una kata", ()=> {
        const miCatalogo = new CatalogoKata();
        const miKata = new Kata('miKata', 'miAutor');
        miCatalogo.agregarKata(miKata);
        expect(miCatalogo.listaKatas.length).toBe(1);
        expect(miCatalogo.listaKatas[0]).toBe(miKata);
    })

});