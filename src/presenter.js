import { Kata, CatalogoKata } from "./katas.js";
import { arrayKatasConMismaDificultad } from "./buscarPorDificultad.js";
import { Docente, Estudiante } from "./usuario.js";

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
let prueba1 = new Kata('kata 2', 'Nico', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, doloribus minima quidem ducimus iusto perferendis nihil sequi. Dolorem, minus explicabo incidunt voluptate laborum, consequatur sequi distinctio perspiciatis sapiente adipisci praesentium.', 'Basico');
let prueba2 = new Kata('kata 3', 'Cris', 'Descripcion Cris', 'Intermedio');
let prueba3 = new Kata('kata 4', 'Sebas', 'Descripcion Sebas', 'Avanzado');
let prueba4 = new Kata('kata 5', 'Alex', 'Descripcion Alex', 'Intermedio');
let prueba5 = new Kata('kata 6', 'Laura', 'Descripcion Laura', 'Avanzado');
let prueba6 = new Kata('kata 7', 'Juan', 'Descripcion Juan', 'Intermedio');
let prueba7 = new Kata('kata 8', 'María', 'Descripcion María', 'Avanzado');
let prueba8 = new Kata('kata 9', 'Rodrigo', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, doloribus minima quidem ducimus iusto perferendis nihil sequi. Dolorem, minus explicabo incidunt voluptate laborum, consequatur sequi distinctio perspiciatis sapiente adipisci praesentium.', 'Basico');
let prueba9 = new Kata('kata 10', 'Elena', 'Descripcion Elena', 'Intermedio');
let prueba10 = new Kata('kata 11', 'Pedro', 'Descripcion Pedro', 'Basico');
let prueba11 = new Kata('kata 12', 'Mari', 'Descripcion Mari', 'Basico');



const lista = new CatalogoKata();
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

//CONTROLADOR DE USUARIO
const usuario = new Docente("Pedro", "Hola Mundo! Soy Pedro :)")

const usuario_button = document.querySelector("#usuario-button");


function verificarUsuario() {
  if(usuario.getTipo() == 'estudiante') {
    boton_aniadir.classList.add('hide');
    document.querySelectorAll(".editar-button").forEach(
      (obj, i) => obj.classList.add('hide'));
    document.querySelectorAll(".eliminar-button").forEach(
        (obj, i) => obj.classList.add('hide'));
    usuario_button.innerHTML = "Cambiar a Docente"
  }
  else{
    usuario_button.innerHTML = "Cambiar a Estudiante"
  }
}




//MOSTRAR KATAS
const katas_disponibles = lista.getLista();

katas_disponibles.forEach(mostrarCatalogoKatas);


function mostrarCatalogoKatas(kata) {
  catalogoCompleto.innerHTML += "<div id=\"contenedor-kata\"  data-id=\"" + kata.getId() + "\">" +
  "<h4 >" + kata.getNombre() + "</h4>" +
  "<span>"+ kata.getDescCorta() + "</span>"+
  "<span>" + kata.getAutor() + "</span>" +
  "<span>" + kata.getDificultad() + "</span>" +
  "<button data-id=\"" + kata.getId() + "\" class=\"editar-button\">Editar</button>" + 
  "<button data-id=\"" + kata.getId() + "\" class=\"eliminar-button\">Eliminar</button>" +
  "<button data-id=\"" + kata.getId() + "\" class=\"detalle-button\">Detalle</button>" +
  "</div>";
  verificarUsuario();
}


//AÑADIR KATA
boton_aniadir.addEventListener("submit", (event) => {
  event.preventDefault();
    form_aniadirKata.classList.remove('hide');
    boton_aniadir.classList.add('hide');
    form_editarKata.classList.add('hide');
    div_detalle_kata.classList.add('hide');
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
        lista.getLista().forEach(mostrarCatalogoKatas); 
    }
    else {
        alert("Se debe ingresar obligatoriamente el nombre de la kata y su autor");
    }
});



//EDITAR KATA
let posKataEditar = -1;
catalogoCompleto.addEventListener("click", function(event) {
  if (event.target.classList.contains("editar-button")) {
    posKataEditar = lista.getLista().findIndex(kata => kata.getId() == event.target.getAttribute("data-id"));
    if (posKataEditar !== -1) {
      editarKata();
    }
  }
});

function editarKata() {
  form_editarKata.classList.remove('hide');
  form_aniadirKata.classList.add('hide');
  boton_aniadir.classList.remove('hide');
  div_detalle_kata.classList.add('hide');

  document.querySelector("#editar-nombre-kata").value = lista.getLista()[posKataEditar].getNombre();
  document.querySelector("#editar-nombre-autor").value = lista.getLista()[posKataEditar].getAutor();
  document.querySelector("#editar-desc-kata").value = lista.getLista()[posKataEditar].getDescripcion();
  document.querySelector("#editar-dificultad-kata").value = lista.getLista()[posKataEditar].getDificultad();
}

form_editarKata.addEventListener("submit", (event) => {
  event.preventDefault();
  lista.getLista()[posKataEditar].setNombre(document.querySelector("#editar-nombre-kata").value);
  lista.getLista()[posKataEditar].setAutor(document.querySelector("#editar-nombre-autor").value);
  lista.getLista()[posKataEditar].setDescripcion(document.querySelector("#editar-desc-kata").value);
  lista.getLista()[posKataEditar].setDificultad(document.querySelector("#editar-dificultad-kata").value);
  form_editarKata.classList.add('hide');
  catalogoCompleto.innerHTML = "";
  lista.getLista().forEach(mostrarCatalogoKatas); 
});

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
  div_detalle_kata.classList.add('hide');

  lista.eliminarKata(pos);
  catalogoCompleto.innerHTML = "";
  lista.getLista().forEach(mostrarCatalogoKatas); 
}


//BUSCAR POR NOMBRE
const buscar_kata_nombre = document.querySelector("#buscar-por-nombre");
const buscador = document.querySelector("#buscador");

buscar_kata_nombre.addEventListener("submit", (event) => {
  event.preventDefault();
  div_detalle_kata.classList.add('hide');
    const listaBuscador = lista.buscarPorNombre(buscador.value);
    if(listaBuscador.length != 0) {
      catalogoCompleto.innerHTML = "";
      listaBuscador.forEach(mostrarCatalogoKatas);
    }
    else {
      alert("No hay katas con ese nombre");
    }
});


//Buscar por dificultad

form_buscar_dificultad.addEventListener("change",(event) => {
  event.preventDefault();
  div_detalle_kata.classList.add('hide');
  const dificultad_busq = document.querySelector("#busq");
  const dificultad_value = dificultad_busq.value;
  if(dificultad_value != ""){
    const listKatas = arrayKatasConMismaDificultad(lista,dificultad_value);
    if(listKatas.length > 0){
      catalogoCompleto.innerHTML = "";
      listKatas.forEach(mostrarCatalogoKatas);
    }
    else{
      alert("No se han encontrado coincidencias!!!");
    }
    
  }
}
)

const buscar_kata_autor = document.querySelector("#buscar-por-autor");
const buscadorAutor = document.querySelector("#buscadorAutor");

buscar_kata_autor.addEventListener("submit", (event) => {
  event.preventDefault(); 
  div_detalle_kata.classList.add('hide');
    const listaBuscador = lista.buscarPorAutor(buscadorAutor.value);
    if(listaBuscador.length != 0) {
      catalogoCompleto.innerHTML = "";
      listaBuscador.forEach(mostrarCatalogoKatas);
    }
    else {
      alert("No hay katas con ese autor");
    }
});

const buscar_kata_desc = document.querySelector("#buscar-por-desc");
const buscadorDesc = document.querySelector("#buscadorDesc");

buscar_kata_desc.addEventListener("submit", (event) => {
  event.preventDefault();
  div_detalle_kata.classList.add('hide');
    const listaBuscador = lista.buscarPorDescripcion(buscadorDesc.value);
    if(listaBuscador.length != 0) {
      catalogoCompleto.innerHTML = "";
      listaBuscador.forEach(mostrarCatalogoKatas);
    }
    else {
      alert("No hay katas con ese autor");
    }
});


//VER DETALLE DE KATA

catalogoCompleto.addEventListener("click", function(event) {
  if (event.target.classList.contains("detalle-button")) {
    const pos = lista.getLista().findIndex(kata => kata.getId() == event.target.getAttribute("data-id"));
    if (pos !== -1) {
      verDetalle(pos);
    }
  }
});

const div_detalle_kata = document.querySelector("#detalle-kata");

function verDetalle(posDetalle) {
  div_detalle_kata.classList.remove('hide');

  document.querySelector("#detalle-nombre").innerHTML = lista.getLista()[posDetalle].getNombre();
  document.querySelector("#detalle-autor").innerHTML = lista.getLista()[posDetalle].getAutor();
  document.querySelector("#detalle-desc").innerHTML = lista.getLista()[posDetalle].getDescripcion();
}

