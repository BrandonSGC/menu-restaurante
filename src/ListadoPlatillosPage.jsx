import { useEffect, useState } from "react";
import { Categoria } from "./components/Categoria";

export const ListadoPlatillosPage = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Hacer el fetch para obtener las categorias:
    const url = `./categorias.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCategorias(data));
  }, [categorias]);

  return (
    <>
      <div className="container">
        <h1 className="heading">Listado de Platillos</h1>

        {/* Iterrar por cada categoria */}
        {categorias.map((categoria) => {
          return <Categoria key={categoria.id} categoria={categoria.nombre} />;
        })}
        
      </div>
    </>
  );
};
