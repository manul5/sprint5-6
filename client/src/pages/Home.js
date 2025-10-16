
import { useRef } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = ({ productosDestacados, cargando, onProductoClick, onVerCatalogo }) => {
  const carruselRef = useRef(null);

  const scrollCarrusel = (direction) => {
  if (carruselRef.current) {
    const scrollAmount = 300;
    const carrusel = carruselRef.current;

    if (direction === 1) {
      if (carrusel.scrollLeft + carrusel.offsetWidth >= carrusel.scrollWidth) {
        carrusel.scrollLeft = 0;
      } else {
        carrusel.scrollLeft += scrollAmount;
      }
    } else {
      if (carrusel.scrollLeft <= 0) {
        carrusel.scrollLeft = carrusel.scrollWidth;
      } else {
        carrusel.scrollLeft -= scrollAmount;
      }
    }
  }
};

  if (cargando) {
    return <div className="cargando">Cargando...</div>;
  }

  return (
    <div className="home">
      
      <section className="hero-full">
        <img src="/assets/banner.png" alt="Banner Hermanos Jota" />
        <div className="hero-overlay">
          <h1>Redescubriendo el arte de vivir</h1>
          <p>Muebles artesanales diseñados para perdurar, con materiales nobles y procesos sustentables.</p>
          <button className="btn" onClick={onVerCatalogo}>Ver Colección</button>
        </div>
      </section>

      
      {productosDestacados.length > 0 && (
        <section className="destacados">
          <h2>Novedades y Promociones</h2>
          <p>Descubre nuestra selección de muebles más populares</p>
          
          <div className="carrusel-wrapper">
            <button className="carrusel-btn left" onClick={() => scrollCarrusel(-1)}>
              ‹
            </button>
            
            <div className="carrusel" ref={carruselRef}>
              {productosDestacados.map(producto => (
                <div key={producto.id} className="carrusel-item">
                  <ProductCard 
                    producto={producto}
                    onProductoClick={onProductoClick}
                  />
                </div>
              ))}
            </div>
            
            <button className="carrusel-btn right" onClick={() => scrollCarrusel(1)}>
              ›
            </button>
          </div>
        </section>
      )}

      
      <section className="porque">
        <h2 className="porque-titulo">¿Por qué elegirnos?</h2>
        <div className="porque-grid">
          <div className="porque-item">
            <h3>Diseño Atemporal</h3>
            <p>Minimalismo cálido que combina estética y funcionalidad</p>
          </div>
          <div className="porque-item">
            <h3>Compromiso Sustentable</h3>
            <p>Materiales certificados y procesos responsables</p>
          </div>
          <div className="porque-item">
            <h3>Hecho en Comunidad</h3>
            <p>Trabajamos en cooperación con artesanos locales</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;