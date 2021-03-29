import "../../assets/css/style.css";
import "regenerator-runtime/runtime.js";

import Serie from "./Serie";
import Personaje from "./Personaje";


const llamarPersonajes = (() => {
  const urlBase = "https://rickandmortyapi.com/api";
  // Variable privada que almacene la cantidad de personajes a mostrar.
  let cantidadPersonajes = 0;

  const dataPersonajes = async (urlAPI, urlP) => {
    let arr = [];
    try {
      const req = await fetch(urlAPI + urlP);
      const data = await req.json();
      arr = data.results;
    } catch (error) {
      console.log(
        `Error en la obtención de los personajes desde la API: ${error}`
      );
    } finally {
      return arr;
    }
  };

  const funcionPublica1 = async() => {
   
    const resultadosAPI = await dataPersonajes(urlBase, "/character");
    cantidadPersonajes = resultadosAPI.length;
    const serie = new Serie("Rick and Morty");

   resultadosAPI.forEach(personaje => {
      const obj_personaje = new Personaje(personaje.id, personaje.name, personaje.species, personaje.image);
      serie.agregarPersonajes(obj_personaje);
      
    });
 
  };

  
  const funcionPublica2 = () => {
  
    const cantidad= document.getElementById("cantidad");
    cantidad.innerHTML=`
    <h2> ${cantidadPersonajes}</h2>`
   
  }
  return {
    funcionPublica1,
    funcionPublica2,
  };
})();

llamarPersonajes.funcionPublica1();
// llamarPersonajes.funcionPublica2();
setTimeout(() => {
  llamarPersonajes.funcionPublica2();
}, 2000);

//ELIMINAR SPINNER
const borrar=()=>{
  const borrarSpinner=document.getElementById("borrarSpinner");
  borrarSpinner.remove();
};
borrar();