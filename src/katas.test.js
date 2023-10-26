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
        const kata = new Kata("kata1", "jorge", "", "","")
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
    it("debería cambiar la dificultad a avanzado", () => {
        const kata = new Kata("kata1", "jorge", "descripcion", "")
        kata.setDificultad("avanzado");
        expect(kata.getDificultad()).toEqual("avanzado");
    });
    it("debería cambiar el estado a Terminado", () => {
        const kata = new Kata("kata1", "jorge", "descripcion", "Basico","No Terminado")
        kata.setEstado("Terminado");
        expect(kata.getEstado()).toEqual("Terminado");
    });

    it("debería eliminar un elemento de la lista de katas", () => {
        const miCatalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        const kata2 = new Kata('kata2', 'autor2', "", "");
        const kata3 = new Kata('kata3', 'autor3', "", "");
        miCatalogo.agregarKata(kata1);
        miCatalogo.agregarKata(kata2);
        miCatalogo.agregarKata(kata3);
        miCatalogo.eliminarKata(1);
        const mensaje = "<div>Nombre kata: kata1, Autor: autor1</div><div>Nombre kata: kata3, Autor: autor3</div>";
        expect(miCatalogo.mostrarCatalogoKatas()).toEqual(mensaje);
    });
    it("debería devolver la representación en string de la kata", () => {
        // Crear una kata
        const kata = new Kata('kata1', 'autor1', 'descripcion', 'dificultad');
    
        // Llamar a la función mostrar
        const resultado = kata.mostrar();
    
        // Comprobar que el resultado es el esperado
        const esperado = '<div>Nombre kata: kata1, Autor: autor1</div>';
        expect(resultado).toEqual(esperado);
    });
    
    it("debería retornar id -1", () => {
        const kata = new Kata("kata1", "jorge", "descripcion", "")
        expect(kata.getId()).toEqual(-1);
    });
    it("debería retornar id 0", () => {
        const miCatalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        miCatalogo.agregarKata(kata1);
        expect(miCatalogo.getLista()[0].getId()).toEqual(0);
    });
    it("debería retornar id 2", () => {
        const miCatalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        const kata2 = new Kata('kata2', 'autor2', "", "");
        const kata3 = new Kata('kata3', 'autor3', "", "");
        miCatalogo.agregarKata(kata1);
        miCatalogo.agregarKata(kata2);
        miCatalogo.agregarKata(kata3);
        miCatalogo.eliminarKata(1);
        expect(miCatalogo.getLista()[1].getId()).toEqual(2);
    });

    it("debería retornar el id a buscar", () => {
        const miCatalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        const kata2 = new Kata('kata2', 'autor2', "", "");
        const kata3 = new Kata('kata3', 'autor3', "", "");
        miCatalogo.agregarKata(kata1);
        miCatalogo.agregarKata(kata2);
        miCatalogo.agregarKata(kata3);
        expect(miCatalogo.buscarPorId(1).getNombre()).toEqual("kata2");
    });
    it("deberia devolver el nombre de la kata buscada", () => {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        const kata2 = new Kata('kata2', 'autor2', "", "");
        const kata3 = new Kata('kata3', 'autor3', "", "");
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
        catalogo.agregarKata(kata3);
        expect(catalogo.buscarPorNombre('kata1')[0].getNombre()).toEqual("kata1");
    })
    it("deberia devolver null porque no existe el nombre de la kata", () => {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        const kata2 = new Kata('kata2', 'autor2', "", "");
        const kata3 = new Kata('kata3', 'autor3', "", "");
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
        catalogo.agregarKata(kata3);
        expect(catalogo.buscarPorNombre('kata4')).toEqual([]);
    })
    
    
    it("debería devolver la representación en string del catálogo de katas", () => {
        // Crear algunas katas
        const kata1 = new Kata('kata1', 'autor1', 'descripcion', 'dificultad');
        const kata2 = new Kata('kata2', 'autor2', 'descripcion', 'dificultad');
    
        // Crear un catálogo y agregar las katas
        const catalogo = new CatalogoKata();
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
    
        // Llamar a la función mostrarCatalogoKatas
        const resultado = catalogo.mostrarCatalogoKatas();
    
        // Comprobar que el resultado es el esperado
        const esperado = '<div>Nombre kata: kata1, Autor: autor1</div><div>Nombre kata: kata2, Autor: autor2</div>';
        expect(resultado).toEqual(esperado);
    });

    //Pruebas de buscar por autor
    it("deberia devolver el nombre de la kata buscada por el nombre del autor", () => {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        catalogo.agregarKata(kata1);
        expect(catalogo.buscarPorAutor('autor1')[0].getNombre()).toEqual("kata1");
    })
    it("deberia devolver null porque el nombre del autor no existe", () => {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        catalogo.agregarKata(kata1);
        expect(catalogo.buscarPorAutor('autor2')).toEqual([]);
    })

    //Pruebas de buscar por descripcion
    it("deberia devolver el nombre de la kata buscada por la descripción", () => {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('kata1','autor1','Para practicar','Basico');
        catalogo.agregarKata(kata1);
        expect(catalogo.buscarPorDescripcion('Para practicar')[0].getNombre()).toEqual('kata1');
    })
    it("deberia devolver null porque descripción no existe", () => {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('kata1','autor1','Para practicar','Basico');
        catalogo.agregarKata(kata1);
        expect(catalogo.buscarPorDescripcion('Para practicar más')).toEqual([]);
    })
    it("debería obtener el estado", () => {
        const kata = new Kata('kata1','autor1','Para practicar','Basico',"Terminado");
        expect(kata.getEstado()).toEqual("Terminado");
    });
});