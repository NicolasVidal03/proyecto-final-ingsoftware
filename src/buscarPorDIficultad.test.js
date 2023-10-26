import { Kata, CatalogoKata } from "./katas"
import {arrayKatasConMismaDificultad, mostrarKatas} from "./buscarPorDificultad";

describe("Devuelve un array de katas donde coinciden con su dificultad", () => {
    it("deberia devolver una instancia de la clase kata con dificultad basico", () => {
        //katas
        let prueba = new Kata('kata 2', 'Oswa','Descripcion Oswa','Intermedio')
        let prueba1 = new Kata('kata 4', 'Nico', 'Descripcion Nico','Basico')
        //lista de katas
        let lista = new CatalogoKata();
        lista.agregarKata(prueba);
        lista.agregarKata(prueba1);

        const listKatas = arrayKatasConMismaDificultad(lista,"Basico")
        expect(listKatas[0].getDificultad()).toEqual("Basico");
        expect(listKatas[0] instanceof Kata).toEqual(true);
    });
    it("deberia devolver 2 instancias de la clase kata con dificultad Intermedio", () => {
        //katas
        let prueba = new Kata('kata 1', 'Oswa','Descripcion Oswa','Intermedio')
        let prueba1 = new Kata('kata 2', 'Nico', 'Descripcion Nico','Basico')
        let prueba2 = new Kata('kata 3', 'Cris','Descripcion Cris','Intermedio')
        //lista de katas
        let lista = new CatalogoKata();
        lista.agregarKata(prueba);
        lista.agregarKata(prueba1);
        lista.agregarKata(prueba2);

        const listKatas = arrayKatasConMismaDificultad(lista,"Intermedio")
        expect(listKatas[0].getDificultad()).toEqual("Intermedio");
        expect(listKatas[0] instanceof Kata).toEqual(true);

        expect(listKatas[1].getDificultad()).toEqual("Intermedio");
        expect(listKatas[1] instanceof Kata).toEqual(true);
    });
    it("deberia devolver 3 instancias de la clase kata con dificultad Avanzado", () => {
        //katas
        let prueba = new Kata('kata 1', 'Oswa','Descripcion Oswa','Avanzado')
        let prueba1 = new Kata('kata 2', 'Nico', 'Descripcion Nico','Basico')
        let prueba2 = new Kata('kata 3', 'Cris','Descripcion Cris','Avanzado')
        let prueba3 = new Kata('kata 4', 'Sebas','Descripcion Sebas','Avanzado')
        //lista de katas
        let lista = new CatalogoKata();
        lista.agregarKata(prueba);
        lista.agregarKata(prueba1);
        lista.agregarKata(prueba2);
        lista.agregarKata(prueba3);
        
        const listKatas = arrayKatasConMismaDificultad(lista,"Avanzado")
        expect(listKatas[0].getDificultad()).toEqual("Avanzado");
        expect(listKatas[0] instanceof Kata).toEqual(true);

        expect(listKatas[1].getDificultad()).toEqual("Avanzado");
        expect(listKatas[1] instanceof Kata).toEqual(true);

        expect(listKatas[2].getDificultad()).toEqual("Avanzado");
        expect(listKatas[2] instanceof Kata).toEqual(true);
    });
    it("en caso de no haber ninguna kata con la dificultad buscada, devuelve un arreglo vacio ", () => {
        //katas
        let prueba = new Kata('kata 2', 'Oswa','Descripcion Oswa','Intermedio')
        let prueba1 = new Kata('kata 4', 'Nico', 'Descripcion Nico','Basico')
        //lista de katas
        let lista = new CatalogoKata();
        lista.agregarKata(prueba);
        lista.agregarKata(prueba1);

        const listKatas = arrayKatasConMismaDificultad(lista,"Avanzado")
        expect(listKatas.length).toEqual(0);

    });

    it("se añade funcion de mostrar lista de katas con las coincidencias encontradas", () => {
        //katas
        let prueba = new Kata('kata 1', 'Oswa','Descripcion Oswa','Avanzado')
        let prueba1 = new Kata('kata 2', 'Nico', 'Descripcion Nico','Basico')
        let prueba2 = new Kata('kata 3', 'Cris','Descripcion Cris','Avanzado')
        let prueba3 = new Kata('kata 4', 'Sebas','Descripcion Sebas','Avanzado')
        //lista de katas
        let lista = new CatalogoKata();
        lista.agregarKata(prueba);
        lista.agregarKata(prueba1);
        lista.agregarKata(prueba2);
        lista.agregarKata(prueba3);

        const listKatas = arrayKatasConMismaDificultad(lista,"Avanzado");
        const expectedOutput = "<div>Nombre kata: kata 1, Autor: Oswa</div><div>Nombre kata: kata 3, Autor: Cris</div><div>Nombre kata: kata 4, Autor: Sebas</div>";
        expect(mostrarKatas(listKatas)).toEqual(expectedOutput);

    });

    
})





    
    



    // let prueba = new Kata('kata 1', 'Sebas','Descripcion Sebas','Avanzado')
    // let prueba2 = new Kata('kata 2', 'Oswa','Descripcion Oswa','Intermedio')
    // let prueba3 = new Kata('kata 3', 'Cris', 'Descripcion Cris','Avanzado')
    // let prueba4 = new Kata('kata 4', 'Nico', 'Descripcion Nico','Basico')

    // lista.agregarKata(prueba3);
    // lista.agregarKata(prueba4);