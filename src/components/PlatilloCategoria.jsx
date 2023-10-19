import { useEffect, useState } from "react";
import { Categoria } from "./Categorias_Platillo";

export const PlatilloCategoria = ({ categoria }) => {
  const { id, nombre } = categoria;
  const [categoriasPlatillo, setCategoriasPlatillo] = useState([]);

  useEffect(() => {
    // Hacer el fetch a los platillos de la categoria con tal id...
    // Ejemplo de url: http://localhost:3000/platillos
    const url = `http://localhost:3000/categorias`
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCategoriasPlatillo(data))
  }, [])

  return (
    <div>
      <h2 className="categoria">{id}. {nombre}</h2>

      {/* Lista de Categorías de Platillos */}
      <ul className="listaCategorias">
        {categoriasPlatillo.map((categoriaplatillo) => {
          if (categoriaplatillo.id === id) {
            return <Categoria key={categoriaplatillo.id} id={categoriaplatillo.id} categoria={categoriaplatillo} />;
          }else {
            return
          }
        })}
      </ul>
      <hr />
    </div>
  );
};
