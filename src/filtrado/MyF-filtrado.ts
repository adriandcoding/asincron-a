import { crearContenedorPersonaje } from "../MyF-listado";
import { Myf } from "./filtrado-model";
import { obtenerPersonajes } from "./api-filtrado";
export const filtrarPersonajes = async (nombre: string): Promise<void> => {
  try {
    const personajes = await obtenerPersonajes();
    const listado = document.querySelector(".listado-personajes");

    if (listado && listado instanceof HTMLDivElement) {
      listado.innerHTML = "";

      personajes
        .filter((personaje: Myf): boolean =>
          personaje.nombre.toLowerCase().includes(nombre.toLowerCase())
        )
        .forEach((personaje: Myf): void => {
          const contenedorPersonaje = crearContenedorPersonaje(personaje);
          listado.appendChild(contenedorPersonaje);
        });
    } else {
      throw new Error("No se ha encontrado el contenedor del listado");
    }
  } catch (error) {
    alert(error);
  }
};
