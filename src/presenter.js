import { Kata, CatalogoKata } from "./katas.js";
import { arrayKatasConMismaDificultad, mostrarKatas } from "./buscarPorDificultad.js";

const form_aniadirKata = document.querySelector("#aniadir-kata");
const boton_aniadir = document.querySelector('#boton-aniadir');
const catalogoCompleto = document.querySelector("#resultado-div");
const form_editarKata = document.querySelector("#editar-kata");

const form_buscar_dificultad = document.querySelector("#buscar");

const aniadir_nombre = document.querySelector("#nombre-kata");
const aniadir_autor = document.querySelector("#nombre-autor");
const aniadir_desc = document.querySelector("#desc-kata");
const aniadir_dif = document.querySelector("#dificultad-kata");


let prueba = new Kata('kata 1', 'Oswa', 'Descripcion Oswa', 'Avanzado');
let prueba1 = new Kata('kata 2', 'Nico', 'Descripcion Nico', 'Basico');
let prueba2 = new Kata('kata 3', 'Cris', 'Descripcion Cris', 'Intermedio');
let prueba3 = new Kata('kata 4', 'Sebas', 'Descripcion Sebas', 'Avanzado');
let prueba4 = new Kata('kata 5', 'Alex', 'Descripcion Alex', 'Intermedio');
let prueba5 = new Kata('kata 6', 'Laura', 'Descripcion Laura', 'Avanzado');
let prueba6 = new Kata('kata 7', 'Juan', 'Descripcion Juan', 'Intermedio');
let prueba7 = new Kata('kata 8', 'María', 'Descripcion María', 'Avanzado');
let prueba8 = new Kata('kata 9', 'Rodrigo', 'Descripcion Rodrigo', 'Basico');
let prueba9 = new Kata('kata 10', 'Elena', 'Descripcion Elena', 'Intermedio');
let prueba10 = new Kata('kata 11', 'Pedro', 'Descripcion Pedro', 'Basico');
let prueba11 = new Kata('kata 12', 'Mari', 'Descripcion Mari', 'Basico');


let lista = new CatalogoKata();
lista.agregarKata(prueba);
lista.agregarKata(prueba1);
lista.agregarKata(prueba2);
lista.agregarKata(prueba3);
lista.agregarKata(prueba4);
lista.agregarKata(prueba5);
lista.agregarKata(prueba6);
lista.agregarKata(prueba7);
lista.agregarKata(prueba8);
lista.agregarKata(prueba9);
lista.agregarKata(prueba10);
lista.agregarKata(prueba11);  



//MOSTRAR KATAS
const katas_disponibles = lista.getLista();
katas_disponibles.forEach(mostrarKatas);

function mostrarKatas(kata) {
  catalogoCompleto.innerHTML += "<div id=\"contenedor-kata\" data-id=\"" + kata.getId() + "\">" +
  "<h4>" + kata.getNombre() + "</h4>" +
  "<span>" + kata.getAutor() + "<span>" +
  "<button data-id=\"" + kata.getId() + "\" class=\"editar-button\">Editar</button>" + 
  "<button data-id=\"" + kata.getId() + "\" class=\"eliminar-button\">Eliminar</button>" +
  "</div>";
}


//AÑADIR KATA
boton_aniadir.addEventListener("submit", (event) => {
  event.preventDefault();
    form_aniadirKata.classList.remove('hide');
    boton_aniadir.classList.add('hide');
    form_editarKata.classList.add('hide');
});

form_aniadirKata.addEventListener("submit", (event) => {
  event.preventDefault();
    const nombre = aniadir_nombre.value;
    const autor = aniadir_autor.value;
    const desc = aniadir_desc.value;
    const dif = aniadir_dif.value; 
    if(nombre && autor) {
        const kata = new Kata(nombre, autor, desc, dif);
        lista.agregarKata(kata);
        boton_aniadir.classList.remove('hide');
        form_aniadirKata.classList.add('hide');
        aniadir_nombre.value = "";
        aniadir_autor.value = "";
        aniadir_desc.value = "";
        aniadir_dif.value = "";
        catalogoCompleto.innerHTML = "";
        lista.getLista().forEach(mostrarKatas); 
    }
    else {
        alert("Se debe ingresar obligatoriamente el nombre de la kata y su autor");
    }
});



//EDITAR KATA
catalogoCompleto.addEventListener("click", function(event) {
  if (event.target.classList.contains("editar-button")) {
    const pos = lista.getLista().findIndex(kata => kata.getId() == event.target.getAttribute("data-id"));
    if (pos !== -1) {
      editarKata(pos);
    }
  }
});

function editarKata(pos) {
  form_editarKata.classList.remove('hide');
  form_aniadirKata.classList.add('hide');
  boton_aniadir.classList.remove('hide');

  document.querySelector("#editar-nombre-kata").value = lista.getLista()[pos].getNombre();
  document.querySelector("#editar-nombre-autor").value = lista.getLista()[pos].getAutor();
  document.querySelector("#editar-desc-kata").value = lista.getLista()[pos].getDescripcion();
  document.querySelector("#editar-dificultad-kata").value = lista.getLista()[pos].getDificultad();

  form_editarKata.addEventListener("submit", (event) => {
    event.preventDefault();
    lista.getLista()[pos].setNombre(document.querySelector("#editar-nombre-kata").value);
    lista.getLista()[pos].setAutor(document.querySelector("#editar-nombre-autor").value);
    lista.getLista()[pos].setDescripcion(document.querySelector("#editar-desc-kata").value);
    lista.getLista()[pos].setDificultad(document.querySelector("#editar-dificultad-kata").value);
    form_editarKata.classList.add('hide');
    catalogoCompleto.innerHTML = "";
    lista.getLista().forEach(mostrarKatas); 
  });
}

//ELIMINAR KATA
catalogoCompleto.addEventListener("click", function(event) {
  if (event.target.classList.contains("eliminar-button")) {
    const pos = lista.getLista().findIndex(kata => kata.getId() == event.target.getAttribute("data-id"));
    if (pos !== -1) {
      eliminarKata(pos);
    }
  }
});

function eliminarKata(pos) {
  form_editarKata.classList.add('hide');
  form_aniadirKata.classList.add('hide');
  boton_aniadir.classList.remove('hide');

  lista.eliminarKata(pos);
  catalogoCompleto.innerHTML = "";
  lista.getLista().forEach(mostrarKatas); 
}


//BUSCAR POR NOMBRE
const buscar_kata_nombre = document.querySelector("#buscar-por-nombre");
const buscador = document.querySelector("#buscador");

buscar_kata_nombre.addEventListener("submit", (event) => {
  event.preventDefault();
    //alert(buscador.value);  
    const listaBuscador = lista.buscarPorNombre(buscador.value);
    if(listaBuscador.length != 0) {
      catalogoCompleto.innerHTML = "";
      listaBuscador.forEach(mostrarKatas);
    }
    else {
      alert("No hay katas con ese nombre");
    }
});


//Buscar por dificultad

form_buscar_dificultad.addEventListener("change",(event) => {
  event.preventDefault();
  const dificultad_busq = document.querySelector("#busq");
  const dificultad_value = dificultad_busq.value;
  console.log(dificultad_value)
  const listKatas = arrayKatasConMismaDificultad(lista,dificultad_value);
  console.log(listKatas.length)
  catalogoCompleto.innerHTML = "<div id=\"busqueda-dificultad\">" + mostrarKatas(listKatas) + "</div>";
}
)
