import { Kata, CatalogoKata } from "./katas.js";

const form_catalogo = document.querySelector("#catalogo-form");
const div = document.querySelector("#resultado-div");
let prueba = new Kata('kata 1', 'Sebas')
let prueba2 = new Kata('kata 2', 'Oswa')
let prueba3 = new Kata('kata 3', 'Cris')
let prueba4 = new Kata('kata 4', 'Nico')

let lista = new CatalogoKata();
lista.agregarKata(prueba);
lista.agregarKata(prueba2);
lista.agregarKata(prueba3);
lista.agregarKata(prueba4);

div.innerHTML = "<div id=\"catologo-katas\">" + lista.mostrarCatalogoKatas() + "</div>";

form_catalogo.addEventListener("submit", (event) => {
  event.preventDefault();
  
  
});