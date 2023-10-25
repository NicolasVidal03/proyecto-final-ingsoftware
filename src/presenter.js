import { Kata, CatalogoKata } from "./katas.js";

const form_aniadirKata = document.querySelector("#aniadir-kata");
const boton_aniadir = document.querySelector('#boton-aniadir');
const catalogoCompleto = document.querySelector("#resultado-div");
const form_editarKata = document.querySelector("#editar-kata");

const aniadir_nombre = document.querySelector("#nombre-kata");
const aniadir_autor = document.querySelector("#nombre-autor");
const aniadir_desc = document.querySelector("#desc-kata");
const aniadir_dif = document.querySelector("#dificultad-kata");


let prueba = new Kata('kata 1', 'Sebas')
let prueba2 = new Kata('kata 2', 'Oswa')
let prueba3 = new Kata('kata 3', 'Cris')
let prueba4 = new Kata('kata 4', 'Nico')

let lista = new CatalogoKata();
lista.agregarKata(prueba);
lista.agregarKata(prueba2);
lista.agregarKata(prueba3);
lista.agregarKata(prueba4);



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