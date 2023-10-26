import { Kata, CatalogoKata } from "./katas"
import {arrayKatasConMismaDificultad, mostrarKatas} from "./buscarPorDificultad";

describe("Deberia devolver una instancia de la clase Kata con estado No terminado", () => {
    it("deberia devolver una instancia de la clase kata con dificultad basico", () => {
        //katas
        let prueba = new Kata('kata 2', 'Oswa','Descripcion Oswa','Intermedio')
        let prueba1 = new Kata('kata 4', 'Nico', 'Descripcion Nico','Basico',"Terminado")
        //lista de katas
        let lista = new CatalogoKata();
        lista.agregarKata(prueba);
        lista.agregarKata(prueba1);

        const result = lista.buscarPorEstado("No terminado");

        expect(result[0] instanceof Kata).toEqual(true);
        expect(result[0].getEstado()).toEqual("No terminado");
    });
})