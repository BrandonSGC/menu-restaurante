import { useEffect, useState } from "react";
import { Platillo } from "./Platillo";

export const Categoria = ({categoria, isAdmin}) => {
  const {id, nombre} = categoria;
  const [platillos, setPlatillos] = useState([]);

  useEffect(() => {
    // Hacer el fetch a los platillos de la categoria con tal id...
    // Ejemplo de url: http://localhost:3000/platillos
    const url = `http://localhost:3000/platillos`
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlatillos(data))
  }, [])

  return (
    <>
      <div>
        <h2 className="categoria">{nombre}</h2>

        {/* Lista de Platillos */}
        <ul className="listaPlatillos">
          {platillos.map( (platillo) => {
            // Mostrar solo los platillos de la categoria.
            if (platillo.categoria_id === id) {
              return <Platillo key={platillo.id} platillo={platillo} isAdmin={isAdmin}/>
            } else {
              return
            }
          })}
        </ul>
        <hr />
      </div>
    </>
  );
};
