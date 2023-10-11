import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="display">
          <h1 className="logo">Restaurante</h1>
          <nav>
            <Link to="/">Listado de Platillos</Link>
            <Link to="/platillos">Administración de Platillos</Link>
            <Link to="/categorias">Administración de Caregorías</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
