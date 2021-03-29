

class Serie {
  constructor(nombre, personajes=[]) {
    this.nombre = nombre;
    this.personajes = personajes;
  }
  // Debe inyectar html para renderizar la card de personaje
  getPersonajes() {
  const resultado = document.getElementById("resultado");
   resultado.innerHTML += 
   `
   <div class="card borde-tarjeta " style="width: 18rem;">
  <img src="${this.personajes.obtenerImagen}" class="rounded-circle card-img-top" alt="...">
  <div class="tarjeta card-body">
    <h5 class="card-title">${this.personajes.obtenerNombre}</h5>
    <p class="card-text">número de personaje: ${this.personajes.obtenerId}</p>
    <a href="#" class="btn btn-dark ">${this.personajes.obtenerEspecie}</a>
  </div>
</div> 

`
    return this.personajes;
  }

  
  // this.personajes es una arreglo!
  agregarPersonajes(personaje) {
    // Si el parámetro es un objeto o un string
  //  this.personajes.push(personaje);
    this.personajes = personaje;
    this.getPersonajes();
  }
}

export default Serie;