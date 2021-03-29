
class Personaje {
  constructor(id, nombrePersonaje, especie, imagen) {
    const _id = id;
    const _nombre = nombrePersonaje;
    const _imagen = imagen;
    const _especie=especie;
    this.getEspecie=() => _especie;
    this.getId = () => _id;
    this.getNombre = () => _nombre;
    this.getImagen = () => _imagen;
    this.especie = especie;
    this.imagen = imagen;
  }
  get obtenerId() {
    return this.getId();
  }
  get obtenerNombre() {
    return this.getNombre();
  }

  get obtenerImagen() {
    return this.getImagen();
  }
  get obtenerEspecie(){
return this.getEspecie();
  }
}

export default Personaje;