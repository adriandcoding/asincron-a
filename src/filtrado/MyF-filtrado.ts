import { crearContenedorPersonaje } from "../MyF-listado";
import { Myf } from "./filtrado-model";
import { obtenerPersonajes } from "./api-filtrado";
const filtrarPersonajes = async (nombre: string): Promise<void> => {
  const personajes = await obtenerPersonajes();
  const listado = document.querySelector(".listado-personajes");

  if (listado && listado instanceof HTMLDivElement) {
    listado.innerHTML = ""; // Limpiar el listado antes de agregar los personajes filtrados

    personajes
      .filter((personaje: Myf) =>
        personaje.nombre.toLowerCase().includes(nombre.toLowerCase())
      )
      .forEach((personaje: Myf) => {
        const contenedorPersonaje = crearContenedorPersonaje(personaje);
        listado.appendChild(contenedorPersonaje);
      });
  } else {
    throw new Error("No se ha encontrado el contenedor del listado");
  }
};
const filtrarBtn = document.getElementById("button");
const filtroInput = document.getElementById("Filtrar");
if (filtrarBtn && (filtrarBtn as HTMLButtonElement)) {
  filtrarBtn.addEventListener("click", async () => {
    const nombre = (filtroInput as HTMLInputElement).value || "";
    await filtrarPersonajes(nombre);
  });
}
