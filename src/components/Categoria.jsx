import { useEffect, useState } from "react";
import { Platillo } from "./Platillo";

export const Categoria = ({categoria}) => {

  const [platillos, setPlatillos] = useState([]);

  useEffect(() => {
    // Hacer el fetch a los platillos de la categoria con tal id...
    // Ejemplo de url: http://localhost:3000/platillos
    const url = `./platillos.json`
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlatillos(data))
  }, [])

  return (
    <>
      <div>
        <h2 className="categoria">{categoria}</h2>

        {/* Lista de Platillos */}
        <ul className="listaPlatillos">
          {platillos.map( (platillo) => {
            return <Platillo key={platillo.id} id={platillo.id} nombre={platillo.nombre} costo={platillo.costo}/>
          })}
        </ul>
        <hr />
      </div>
    </>
  );
};
