import { useState, useCallback, useRef } from "react";
import "./Navbar.css";

export default function Navbar({ 
  cantidadCarrito, 
  onMostrarHome, 
  onMostrarCatalogo, 
  onMostrarContacto,
  onBuscar,
  onMostrarCarrito,
  vistaActual 
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [busquedaOpen, setBusquedaOpen] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const inputRef = useRef(null);

  const handleBuscar = useCallback((e) => {
    e.preventDefault();
    if (onBuscar) onBuscar(busqueda.trim());
  }, [busqueda, onBuscar]);

  const handleChange = useCallback((e) => {
    setBusqueda(e.target.value);
  }, []);

  const handleNavClick = useCallback((action) => {
    setMenuOpen(false);
    setBusquedaOpen(false);
    action();
  }, []);

  const toggleBusqueda = useCallback(() => {
    setBusquedaOpen(!busquedaOpen);
    setMenuOpen(false);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  }, [busquedaOpen]);

  const limpiarBusqueda = useCallback(() => {
    setBusqueda("");
    if (onBuscar) onBuscar("");
  }, [onBuscar]);

  const mostrarBusqueda = vistaActual === 'catalogo';

  return (
    <header>
      <button 
        type="button"
        className="menu-toggle" 
        onClick={() => { setMenuOpen(!menuOpen); setBusquedaOpen(false); }}
      >
        ☰
      </button>

      <div className="logo" onClick={() => handleNavClick(onMostrarHome)}>
        <img src="/assets/logoHermanosJota.svg" alt="Hermanos Jota" />
        <span>Hermanos Jota</span>
      </div>

      {mostrarBusqueda && (
        <button type="button" className="lupita-mobile" onClick={toggleBusqueda}>
          <img src="/assets/lupa.webp" alt="Buscar" />
        </button>
      )}

      {/* Buscador mobile */}
      {mostrarBusqueda && busquedaOpen && (
        <form className="buscador-mobile active" onSubmit={handleBuscar}>
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Buscar productos..." 
            value={busqueda}
            onChange={handleChange}
          />
          <button type="submit" className="buscador-btn">
            <img src="/assets/lupa.webp" alt="Buscar" />
          </button>
          {busqueda && (
            <button 
              type="button"
              className="limpiar-btn"
              onClick={limpiarBusqueda}
            >
              ✕
            </button>
          )}
        </form>
      )}

      <nav className={menuOpen ? 'active' : ''}>
        <a href="#!" onClick={(e) => { e.preventDefault(); handleNavClick(onMostrarHome); }}>Inicio</a>
        <a href="#!" onClick={(e) => { e.preventDefault(); handleNavClick(onMostrarCatalogo); }}>Productos</a>
        <a href="#!" onClick={(e) => { e.preventDefault(); handleNavClick(onMostrarContacto); }}>Contacto</a>
      </nav>

      {/* Buscador desktop */}
      {mostrarBusqueda && (
        <form className="buscador-container" onSubmit={handleBuscar}>
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            value={busqueda}
            onChange={handleChange}
            className="buscador-input"
          />
          <button type="submit" className="buscador-btn">
            <img src="/assets/lupa.webp" alt="Buscar" />
          </button>
          {busqueda && (
            <button 
              type="button"
              className="limpiar-btn"
              onClick={limpiarBusqueda}
            >
              ✕
            </button>
          )}
        </form>
      )}

      <div className="carrito" onClick={onMostrarCarrito}>
        <img src="/assets/carritoCompra.png" alt="Carrito de compras" />
        {cantidadCarrito > 0 && (
          <span className="contador-carrito">{cantidadCarrito}</span>
        )}
      </div>
    </header>
  );
}