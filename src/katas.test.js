import { Kata, CatalogoKata } from "./katas";

describe("Obtiene el nombre", () => {
    it("debería obtener el nombre", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        expect(kata.getNombre()).toEqual("kata1");
    });
    it("debería obtener el nombre", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        expect(kata.getAutor()).toEqual("jorge");
    });
    it("debería mostrar el nombre y autor", () => {
        const kata = new Kata("kata2", "dario", "", "")
        expect(kata.mostrar()).toEqual("<div>Nombre kata: kata2, Autor: dario</div>");
    });
    it("deberia tener tamaño 0", ()=> {
        const miCatalogo = new CatalogoKata();
        expect(miCatalogo.listaKatas.length).toEqual(0);
    });
    it("deberia tener tamaño 1 porque se pusheo una kata", ()=> {
        const miCatalogo = new CatalogoKata();
        const miKata = new Kata('miKata', 'miAutor', "", "");
        miCatalogo.agregarKata(miKata);
        expect(miCatalogo.listaKatas.length).toBe(1);
        expect(miCatalogo.listaKatas[0]).toBe(miKata);
    });
    it("deberia mostrar la lista de katas esperada", ()=> {
        const miCatalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        const kata2 = new Kata('kata2', 'autor2', "", "");
        miCatalogo.agregarKata(kata1);
        miCatalogo.agregarKata(kata2);
        const mensajeEsperado = "<div>Nombre kata: kata1, Autor: autor1</div><div>Nombre kata: kata2, Autor: autor2</div>";
        expect(miCatalogo.mostrarCatalogoKatas()).toBe(mensajeEsperado);
    });


    it("debería cambiar el nombre de la kata a prueba", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        kata.setNombre("prueba");
        expect(kata.getNombre()).toEqual("prueba");
    });
    it("debería cambiar el autor de la kata a autor2", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        kata.setAutor("autor2");
        expect(kata.getAutor()).toEqual("autor2");
    });
    it("debería devolver la descripcion de la kata", () => {
        const kata = new Kata("kata1", "jorge", "descripcion", "");
        expect(kata.getDescripcion()).toEqual("descripcion");
    });
    it("debería cambiar la descripcion a prueba_descripcion", () => {
        const kata = new Kata("kata1", "jorge", "descripcion", "")
        kata.setDescripcion("prueba_descripcion");
        expect(kata.getDescripcion()).toEqual("prueba_descripcion");
    });
    it("debería devolver la dificultad", () => {
        const kata = new Kata("kata1", "jorge", "descripcion", "dificultad");
        expect(kata.getDificultad()).toEqual("dificultad");
    });
    

});