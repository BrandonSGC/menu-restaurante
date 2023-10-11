import { Categoria } from "./components/Categoria";



export const App = () => {
  const categorias = [
    {
      "id": 1,
      "nombre": "Entradas"
    },
    {
      "id": 2,
      "nombre": "Platos Principales"
    },
    {
      "id": 3,
      "nombre": "Postres"
    }
  ];



  return (
    <>
      <h1>Listado de Platillos</h1>
      <p>Ordenados por categoría:</p>
      <button>Crear Platillo</button>
      {/* Iterrar por cada categoria */}
      {categorias.map( (categoria) => {
        return <Categoria key={categoria.id} categoria={categoria.nombre}/>
      })}

      {/* <Categoria categoria="Pastas"/>
      <Categoria categoria="Mariscos"/> */}

      <p id="mensaje">Mensaje de prueba</p>

      <div>
        <button>
          Ir a Administración de Categorías
        </button>
      </div>
    </>
  );
};
