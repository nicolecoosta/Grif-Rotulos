import './Header.css';
import logo from '../assets/logo-grif.svg';
import { Link } from 'react-scroll';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav-container">
        {/* DESKTOP */}
        <div className="nav-desktop">
          <img src={logo} alt="Logo Grif" className="logo" />

          <ul className="nav-links">
            <li><Link to="grif-rotulos" smooth duration={500} offset={-80} spy activeClass="active">GRIF RÓTULOS</Link></li>
            <li><Link to="diferenciais" smooth duration={500} offset={-80} spy activeClass="active">DIFERENCIAIS</Link></li>
            <li><Link to="solucoes" smooth duration={500} offset={-80} spy activeClass="active">SOLUÇÕES</Link></li>
            <li><Link to="manifesto" smooth duration={500} offset={-80} spy activeClass="active">MANIFESTO</Link></li>
            <li><Link to="40anos" smooth duration={500} offset={-80} spy activeClass="active">40 ANOS</Link></li>
            <li><Link to="blog" smooth duration={500} offset={-80} spy activeClass="active">BLOG</Link></li>
          </ul>

          <div className="nav-buttons-desktop">
            <button className="btn-primary">Orçamento</button>
            <button className="btn-outline">Fale com um especialista</button>
          </div>
        </div>

        {/* MOBILE */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </div>

        <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
          <img src={logo} alt="Logo Grif" className="mobile-logo" />
          <ul className="mobile-nav-links">
            <li><Link to="grif-rotulos" smooth duration={500} offset={-80} activeClass="active" onClick={closeMenu}>GRIF RÓTULOS</Link></li>
            <li><Link to="diferenciais" smooth duration={500} offset={-80} activeClass="active" onClick={closeMenu}>DIFERENCIAIS</Link></li>
            <li><Link to="solucoes" smooth duration={500} offset={-80} activeClass="active" onClick={closeMenu}>SOLUÇÕES</Link></li>
            <li><Link to="manifesto" smooth duration={500} offset={-80} activeClass="active" onClick={closeMenu}>MANIFESTO</Link></li>
            <li><Link to="40anos" smooth duration={500} offset={-80} activeClass="active" onClick={closeMenu}>40 ANOS</Link></li>
            <li><Link to="blog" smooth duration={500} offset={-80} activeClass="active" onClick={closeMenu}>BLOG</Link></li>
          </ul>
          <div className="nav-buttons-mobile">
            <button className="btn-primary">Orçamento</button>
            <button className="btn-outline">Fale com um especialista</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
