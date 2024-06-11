import { Myf } from "./mYf-model";
const crearElementoImagen = (imagen: string): HTMLImageElement => {
  const foto = document.createElement("img");
  foto.src = imagen;

  return foto;
};
const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  return parrafo;
};
const crearContenedorPersonaje = (personajes: Myf): HTMLDivElement => {
  const personaje = document.createElement("div");
  personaje.classList.add("pelicula-contenedor");
  const imagen = crearElementoImagen(personajes.imagen);
  personaje.appendChild(imagen);
  const nombre = crearElementoParrafo(personajes.nombre);
  personaje.appendChild(nombre);
  const especialidad = crearElementoParrafo(personajes.especialidad);
  personaje.appendChild(especialidad);
  const habilidad = crearElementoParrafo(personajes.habilidades.toString());
  personaje.appendChild(habilidad);
  return personaje;
};
