import { Kata, CatalogoKata } from "./katas.js";


const form_aniadirKata = document.querySelector("#aniadir-kata");
const boton_aniadir = document.querySelector('#boton-aniadir');
const catalogoCompleto = document.querySelector("#resultado-div");

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


catalogoCompleto.innerHTML = "<div id=\"catologo-katas\">" + lista.mostrarCatalogoKatas() + "</div>";


//AÑADIR KATA

boton_aniadir.addEventListener("submit", (event) => {
  event.preventDefault();
    form_aniadirKata.classList.remove('hide');
    boton_aniadir.classList.add('hide');
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
        catalogoCompleto.innerHTML = "<div id=\"catologo-katas\">" + lista.mostrarCatalogoKatas() + "</div>";
    }
    else {
        alert("Se debe ingresar obligatoriamente el nombre de la kata y su autor");
    }
});
