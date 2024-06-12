import { Myf } from "../MyF-model";
import { obtenerPersonajes } from "../MyF-api";
import { crearContenedorPersonaje } from "../MyF-listado";

const filtrarPersonajesPorNombre = async (nombre: string): Promise<Myf[]> => {
  const personajes = await obtenerPersonajes();
  return personajes.filter((personaje: Myf) =>
    personaje.nombre.toLowerCase().includes(nombre.toLowerCase())
  );
};

const inputNombre = document.getElementById(
  "Filtrar"
) as HTMLInputElement | null;
const botonFiltrar = document.getElementById(
  "button"
) as HTMLButtonElement | null;

// Función para manejar el evento de clic en el botón de filtrar
if (botonFiltrar && inputNombre) {
  botonFiltrar.addEventListener("click", async (): Promise<void> => {
    const nombreBuscado = inputNombre.value;
    const personajesFiltrados = await filtrarPersonajesPorNombre(nombreBuscado);

    // Limpia el listado actual antes de mostrar los personajes filtrados
    const listado = document.querySelector(".listado-personajes");
    if (listado) {
      listado.innerHTML = "";
      personajesFiltrados.forEach((personaje) => {
        const contenedorPersonaje = crearContenedorPersonaje(personaje);
        listado.appendChild(contenedorPersonaje);
      });
    }
  });
} else {
  console.error("Input field or filter button not found");
}
