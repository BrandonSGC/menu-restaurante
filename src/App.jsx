import { NavBar } from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { ListadoPlatillosPage } from "./ListadoPlatillosPage";
import { AdminPlatillosPage } from './AdminPlatillosPage';
import { AdminCategoriasPage } from './AdminCategoriasPage';

export const App = () => {
  
  return (
    <>
      {/* Lo que este fuera de las rutas siempre se va a mostrar en las pantallas */}
      <NavBar />
      <hr />

      <Routes>
        <Route path="/" element={<ListadoPlatillosPage />}/>
        <Route path="/platillos" element={<AdminPlatillosPage />}/>
        <Route path="/categorias" element={<AdminCategoriasPage />}/>

        {/* Ruta por defecto */}
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  );
};
