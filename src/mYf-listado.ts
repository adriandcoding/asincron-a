import { obtenerPersonajes } from "./mYf-api";
const obtenerUrlImagen = (personaje: Myf): string | null => {
  if (personaje && personaje.imagen) {
    return `http://localhost:3000/${personaje.imagen}`;
  } else {
    return null;
  }
};
const crearElementoImagen = (url: string): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = url;

  return imagen;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  return parrafo;
};
export const crearContenedorPersonaje = (personaje: Myf): HTMLDivElement => {
  const perfil = document.createElement("div");
  perfil.classList.add("personaje-contenedor");
  const imagenUrl = obtenerUrlImagen(personaje);
  if (imagenUrl) {
    const imagen = crearElementoImagen(imagenUrl);
    perfil.appendChild(imagen);
  }
  const nombre = crearElementoParrafo(`Nombre:  ${personaje.nombre}`);
  perfil.appendChild(nombre);
  const especialidad = crearElementoParrafo(
    `Especialidad:  ${personaje.especialidad}`
  );
  perfil.appendChild(especialidad);
  const habilidad = crearElementoParrafo(
    `Habilidad:  ${personaje.habilidades.toString()}`
  );
  perfil.appendChild(habilidad);
  return perfil;
};
const pintarPersonajes = async (): Promise<void> => {
  const personajes = await obtenerPersonajes();
  const listado = document.querySelector(".listado-personajes");
  if (listado && listado instanceof HTMLDivElement) {
    personajes.forEach((personaje: Myf) => {
      const contenedorPersonaje = crearContenedorPersonaje(personaje);
      listado.appendChild(contenedorPersonaje);
    });
  } else {
    throw new Error("No se ha encontrado el contenedor del listado");
  }
};
document.addEventListener("DOMContentLoaded", pintarPersonajes);
