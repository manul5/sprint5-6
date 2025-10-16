
import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Contact from './pages/Contact';
import Carrito from './pages/Carrito';
import Navbar from './components/Navbar';

function App() {
  const [vistaActual, setVistaActual] = useState('home');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');


  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/productos');
        const data = await response.json();
        setProductos(data);
        setProductosFiltrados(data); 
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setCargando(false);
      }
    };
    fetchProductos();
  }, []);

  

  const handleBuscar = async (termino) => {
    setTerminoBusqueda(termino);
    setCargando(true);
    setTimeout(()=>{
    if (termino.trim().length >= 3) {
    const filtrados =  productos.filter(producto =>
      producto.nombre.toLowerCase().includes(termino.toLowerCase())
    );

    setProductosFiltrados(filtrados);
    
    if (vistaActual === 'home') setVistaActual('catalogo');
    } else{
      setProductosFiltrados(productos);
    }
    setCargando(false);
  } ,600);
  };

  const productosDestacados = productos.filter(p => p.destacado);

  const mostrarHome = () => {
    setVistaActual('home');
    setProductoSeleccionado(null);
    setTerminoBusqueda(''); 
    setProductosFiltrados(productos);
  };

  const mostrarCatalogo = async() => {
    setVistaActual('catalogo');
    setProductoSeleccionado(null);
    setTerminoBusqueda('');

    setCargando(true);

    setTimeout(() => {
      setProductosFiltrados(productos); 
      setCargando(false);
    }, 600);
  };

  const mostrarContacto = async() => {
    setCargando(true);

    setTimeout(() => {
    setVistaActual('contacto');
    setProductoSeleccionado(null);
    setCargando(false);
    }, 400);

  };

  const mostrarDetalle = async(producto) => {
    setCargando(true);

    setTimeout(() => {
      setProductoSeleccionado(producto);
      setVistaActual('detalle');
      setCargando(false);
    }, 600);
  };


  const agregarAlCarrito = async (producto) => {
    setCargando(true);
    setTimeout(() => {
    setCarrito([...carrito, { ...producto, carritoId: Date.now() }]);
    alert(`¡${producto.nombre} agregado al carrito!`);
    setCargando(false);
    }, 600);
  };

  const eliminarDelCarrito = (carritoId) => {
    setCargando(true);
    setTimeout(() => {
    setCarrito(carrito.filter(item => item.carritoId !== carritoId));
    setCargando(false);
    }, 600);
  };

  const vaciarCarrito = () => {
    setCargando(true);
    setTimeout(() => {
    setCarrito([]);
    alert('Carrito vaciado');
    setCargando(false);
    }, 400);

  };

  const mostrarCarrito = async() => {
    setCargando(true);

    setTimeout(() => {
    setVistaActual('carrito');
    setCargando(false);
    }, 400);
  };

  return (
    <div className="App">
      <Navbar 
        cantidadCarrito={carrito.length}
        onMostrarHome={mostrarHome}
        onMostrarCatalogo={mostrarCatalogo}
        onMostrarContacto={mostrarContacto}
        onBuscar={handleBuscar}
        onMostrarCarrito={mostrarCarrito} 
        vistaActual={vistaActual}
      />
      
      <main>
        {vistaActual === 'home' && (
          <Home 
            productosDestacados={productosDestacados}
            cargando={cargando}
            onProductoClick={mostrarDetalle}
            onVerCatalogo={mostrarCatalogo}
          />
        )}
        
        {vistaActual === 'catalogo' && (
          <ProductList 
            productos={productosFiltrados} 
            cargando={cargando}
            onProductoClick={mostrarDetalle}
            terminoBusqueda={terminoBusqueda} 
          />
        )}
        
        {vistaActual === 'detalle' && productoSeleccionado && (
          <ProductDetail 
            producto={productoSeleccionado}
            onVolver={mostrarCatalogo}
            onAgregarCarrito={agregarAlCarrito}
          />
        )}
        
        
        {vistaActual === 'carrito' && (
          <Carrito 
            carrito={carrito}
            onEliminarItem={eliminarDelCarrito}
            onVaciarCarrito={vaciarCarrito}
            onSeguirComprando={mostrarCatalogo}
            onVolver={mostrarHome}
          />
        )}
        
        {vistaActual === 'contacto' && (
          <Contact onVolver={mostrarHome} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;