import { useEffect, useState } from "react";
import { Platillo } from "./Platillo";

export const Categoria = ({categoria, isAdmin, categorias}) => {
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
          {platillos.map((platillo) => {
            if (platillo.categoria_id === id) {
              if (!isAdmin) {
                if (platillo.activo) {
                  return (
                    <div key={platillo.id}>
                      <Platillo platillo={platillo} isAdmin={isAdmin} />
                    </div>
                  );
                } else {
                  return (
                    <div key={platillo.id}>
                      <p1>Platillo no disponible</p1>
                    </div>
                  );
                }
              } else {
                return (
                  <div key={platillo.id}>
                    <Platillo platillo={platillo} isAdmin={isAdmin} categorias={categorias} />
                  </div>
                );
              }
            }
            return null;
          })}
        </ul>
  
        {platillos.length === 0 && (
          <div>
            <p>Todavía no hay platillos disponibles</p>
          </div>
        )}
  
        <hr />
      </div>
    </>
  );
  
};
