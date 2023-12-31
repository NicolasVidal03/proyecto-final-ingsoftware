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
    it("debería cambiar la dificultad a avanzado", () => {
        const kata = new Kata("kata1", "jorge", "descripcion", "")
        kata.setDificultad("avanzado");
        expect(kata.getDificultad()).toEqual("avanzado");
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
    it("debería devolver la descripcion corta", () => {
        const kata = new Kata("kata1", "jorge", "Descripcion corta de Jorge", "")
        expect(kata.getDescCorta()).toEqual("Descripcion cort...");
    });
    it("debería devolver la nueva descripcion corta", () => {
        const kata = new Kata("kata1", "jorge", "Descripcion de prueba de Jorge", "")
        expect(kata.getDescCorta()).toEqual("Descripcion de p...");
    });
    it("debería devolver -1 en caso de que no haya sido calificado la kata", () => {
        const kata = new Kata("kata1", "jorge", "Descripcion de prueba de Jorge", "")
        expect(kata.getPuntuacion()).toEqual(-1);
    });
    it("se deberia poder editar la puntuacion de la kata", () => {
        const kata = new Kata("kata1", "jorge", "Descripcion de prueba de Jorge", "")
        kata.setPuntuacion(80);
        expect(kata.getPuntuacion()).toEqual(80);
    });
    it("si se pone una puntuacion mayor a 100, devuelve -1, porque la mayor nota puede ser 100", () => {
        const kata = new Kata("kata1", "jorge", "Descripcion de prueba de Jorge", "", 10)
        kata.setPuntuacion(200);
        expect(kata.getPuntuacion()).toEqual(-1);
    });
    it("si se pone una puntuacion menor a 0, devuelve -1, porque la minima nota puede ser 0", () => {
        const kata = new Kata("kata1", "jorge", "Descripcion de prueba de Jorge", "", 10)
        kata.setPuntuacion(-100);
        expect(kata.getPuntuacion()).toEqual(-1);
    });
    it("si la puntuacion es -1, muestra como kata NO calificada", () => {
        const kata = new Kata("kata1", "jorge", "Descripcion de prueba de Jorge", "", 10)
        kata.setPuntuacion(-100);
        expect(kata.mostrarPuntuacion()).toEqual("Sin calificar");
    });
    it("si la puntuacion NO es -1, muestra la calificacion de la kata", () => {
        const kata = new Kata("kata1", "jorge", "Descripcion de prueba de Jorge", "", 10)
        expect(kata.mostrarPuntuacion()).toEqual(10);
    });
    it("si la puntuacion NO es -1, muestra la calificacion de la kata", () => {
        const kata = new Kata("kata1", "jorge", "Descripcion de prueba de Jorge", "", 10)
        expect(kata.mostrarPuntuacion()).toEqual(10);
    });
    it("Ordena una lista de katas", () => {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('C', 'autor1', "", "");
        const kata2 = new Kata('B', 'autor2', "", "");
        const kata3 = new Kata('A', 'autor3', "", "");
        const kata4 = new Kata('A', 'autor1', "", "");
        const kata5 = new Kata('D', 'autor2', "", "");
        const kata6 = new Kata('E', 'autor3', "", "");
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
        catalogo.agregarKata(kata3);
        catalogo.agregarKata(kata4);
        catalogo.agregarKata(kata5);
        catalogo.agregarKata(kata6);
        catalogo.ordenarPorNombre();
        expect(catalogo.getLista()[0].getNombre()).toEqual("A");
        expect(catalogo.getLista()[1].getNombre()).toEqual("A");
        expect(catalogo.getLista()[2].getNombre()).toEqual("B");
        expect(catalogo.getLista()[3].getNombre()).toEqual("C");
        expect(catalogo.getLista()[4].getNombre()).toEqual("D");
        expect(catalogo.getLista()[5].getNombre()).toEqual("E");
    });
    it("copia una instancia de la clase catalogoKata", () => {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('A', 'autor1', "", "");
        const kata2 = new Kata('B', 'autor2', "", "");
        const kata3 = new Kata('C', 'autor3', "", "");
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
        catalogo.agregarKata(kata3);
        const copiaLista = catalogo.clone();
        expect(copiaLista.getLista()[0].getNombre()).toEqual("A");
        expect(copiaLista.getLista()[1].getNombre()).toEqual("B");
        expect(copiaLista.getLista()[2].getNombre()).toEqual("C");
    });
    it("debería obtener el estado", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        expect(kata.getEstado()).toEqual("No Terminado");
    });
    
    it("debería cambiar el estado de la kata a prueba", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        expect(kata.setEstado("Terminado")).toEqual(true);
    });
    it("debería cambiar el estado de la kata a prueba", () => {
        const kata = new Kata("kata1", "jorge", "", "")
        expect(kata.setEstado("Hola")).toEqual(false);
    });
    it("deberia devolver el nombre de la kata buscada por el estado", () => {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        catalogo.agregarKata(kata1);
        expect(kata1.setEstado("Terminado"))
        expect(catalogo.buscarPorEstado('Terminado')[0].getNombre()).toEqual("kata1");
    })
    it("deberia devolver el nombre de la kata buscada por el estado", () => {
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('kata1', 'autor1', "", "");
        catalogo.agregarKata(kata1);
        expect(kata1.setEstado("Terminado"))
        expect(catalogo.buscarPorEstado('No Terminado')).toEqual([]);
    })
    it("debería obtener la dificultad", () => {
        const kata = new Kata("kata1", "jorge", "", "Intermedio")
        expect(kata.getDificultad()).toEqual("Intermedio");
    });
    
    it("debería obtener el ID", () => {
        const kata = new Kata("kata1", "jorge", "", "Intermedio")
        kata.setId(1);
        expect(kata.getId()).toEqual(1);
    });
    
    it("debería obtener la puntuación", () => {
        const kata = new Kata("kata1", "jorge", "", "Intermedio", 80)
        expect(kata.getPuntuacion()).toEqual(80);
    });
    
    it("debería obtener el estado", () => {
        const kata = new Kata("kata1", "jorge", "", "Intermedio")
        expect(kata.getEstado()).toEqual("No Terminado");
    });
    test('debería ordenar las katas por autor', () => {
        const kata1 = new Kata('Kata1', 'AutorB', 'Descripcion1', 'Dificultad1');
        const kata2 = new Kata('Kata2', 'AutorA', 'Descripcion2', 'Dificultad2');
        const catalogo = new CatalogoKata();
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
    
        catalogo.ordenarPorAutor();
    
        const listaOrdenada = catalogo.getLista();
        expect(listaOrdenada[0].getAutor()).toEqual('AutorA');
        expect(listaOrdenada[1].getAutor()).toEqual('AutorB');
    });
    
    test('debería ordenar las katas por autor cuando autorA > autorB', () => {
        const kata1 = new Kata('Kata1', 'ButorZ', 'Descripcion1', 'Dificultad1');
        const kata2 = new Kata('Kata2', 'AutorA', 'Descripcion2', 'Dificultad2');
        const catalogo = new CatalogoKata();
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
    
        catalogo.ordenarPorAutor();
    
        const listaOrdenada = catalogo.getLista();
        expect(listaOrdenada[0].getAutor()).toEqual('AutorA');
        expect(listaOrdenada[1].getAutor()).toEqual('ButorZ');
    });
    test('debería ordenar las katas por autor', () => {
        const kata1 = new Kata('Kata1', 'Autor2', 'Descripcion1', 'Dificultad1');
        const kata2 = new Kata('Kata2', 'Autor1', 'Descripcion2', 'Dificultad2');
        const catalogo = new CatalogoKata();
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
    
        catalogo.ordenarPorAutor();
    
        const listaOrdenada = catalogo.getLista();
        expect(listaOrdenada[0].getAutor()).toEqual('Autor1');
        expect(listaOrdenada[1].getAutor()).toEqual('Autor2');
    });
    test('debería ordenar las katas por autor cuando autorA > autorB', () => {
        const kata1 = new Kata('Kata1', 'AutorB', 'Descripcion1', 'Dificultad1');
        const kata2 = new Kata('Kata2', 'AutorA', 'Descripcion2', 'Dificultad2');
        const catalogo = new CatalogoKata();
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
    
        catalogo.ordenarPorAutor();
    
        const listaOrdenada = catalogo.getLista();
        expect(listaOrdenada[0].getAutor()).toEqual('AutorA');
        expect(listaOrdenada[1].getAutor()).toEqual('AutorB');
    });
    
    test('debería mantener el orden original de las katas cuando autorA == autorB', () => {
        const kata1 = new Kata('Kata1', 'AutorA', 'Descripcion1', 'Dificultad1');
        const kata2 = new Kata('Kata2', 'AutorA', 'Descripcion2', 'Dificultad2');
        const catalogo = new CatalogoKata();
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
    
        catalogo.ordenarPorAutor();
    
        const listaOrdenada = catalogo.getLista();
        expect(listaOrdenada[0].getNombre()).toEqual('Kata1');
        expect(listaOrdenada[1].getNombre()).toEqual('Kata2');
    });
    test('debería ordenar las katas por autor cuando autorA > autorB', () => {
        const kata1 = new Kata('Kata1', 'AutorB', 'Descripcion1', 'Dificultad1');
        const kata2 = new Kata('Kata2', 'AutorA', 'Descripcion2', 'Dificultad2');
        const catalogo = new CatalogoKata();
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
    
        catalogo.ordenarPorAutor();
    
        const listaOrdenada = catalogo.getLista();
        expect(listaOrdenada[0].getAutor()).toEqual('AutorA');
        expect(listaOrdenada[1].getAutor()).toEqual('AutorB');
    });
    
    it('debería ordenar las katas por descripción en orden alfabético', () => {
        // Preparar
        const catalogo = new CatalogoKata();
        const kata1 = new Kata('nombre1', 'autor1', 'bDescripcion1', 'dificultad1');
        const kata2 = new Kata('nombre2', 'autor2', 'aDescripcion2', 'dificultad2');
        const kata3 = new Kata('nombre3', 'autor3', 'cDescripcion3', 'dificultad3');
        catalogo.agregarKata(kata1);
        catalogo.agregarKata(kata2);
        catalogo.agregarKata(kata3);
    
        // Actuar
        catalogo.ordenarPorDescripcion();
    
        // Comprobar
        const listaOrdenada = catalogo.getLista();
        expect(listaOrdenada[0].getDescripcion()).toEqual('aDescripcion2');
        expect(listaOrdenada[1].getDescripcion()).toEqual('bDescripcion1');
        expect(listaOrdenada[2].getDescripcion()).toEqual('cDescripcion3');
      });
    
});