import './header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">🎬</span>
          <span>Club Flix</span>
        </Link>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="link-menu" onClick={closeMenu}>
            <span className="icon">🏠</span>
            Home
          </Link>
          <Link to="/favoritos" className="link-menu" onClick={closeMenu}>
            <span className="icon">❤️</span>
            Favoritos
          </Link>
          <Link to="/sobre" className="logout-btn" onClick={closeMenu}>
            <span className="icon">ℹ️</span>
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;