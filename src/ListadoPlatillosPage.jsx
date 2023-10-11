import { useEffect, useState } from "react";
import { Categoria } from "./components/Categoria";

export const ListadoPlatillosPage = () => {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Hacer el fetch para obtener las categorias:
    const url = `./categorias.json`
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCategorias(data));

  }, [categorias]);


  return (
    <>
      <h1>Listado de Platillos</h1>
      <p>Ordenados por categoría:</p>
      <button>Crear Platillo</button>

      {/* Iterrar por cada categoria */}
      {categorias.map((categoria) => {
        return <Categoria key={categoria.id} categoria={categoria.nombre} />;
      })}

      <p id="mensaje">Mensaje de prueba</p>
    </>
  )
}
