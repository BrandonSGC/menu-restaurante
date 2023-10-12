import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__display">
          <h1 className="header__logo">Restaurante</h1>
          <nav className='header__nav'>
            <Link className='header__link' to="/">Listado de Platillos</Link>
            <Link className='header__link' to="/platillos">Administración de Platillos</Link>
            <Link className='header__link' to="/categorias">Administración de Categorías</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
