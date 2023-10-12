import { useEffect, useState } from "react";
import { Categoria } from "./components/Categoria";

export const AdminPlatillosPage = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Hacer el fetch para obtener las categorias:
    const url = `http://localhost:3000/categorias`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCategorias(data));
  }, []);

  return (
    <>
      <div className="container">
        <header className="header__display">
          <h1 className="heading">Administración de Platillos</h1>
          <button className="button">Crear Platillo</button>
        </header>
        
        {/* Iterrar por cada categoria */}
        {categorias.map((categoria) => {
          return <Categoria key={categoria.id} categoria={categoria} isAdmin/>;
        })}
        
      </div>
    </>
  );
}
