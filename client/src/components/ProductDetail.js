import './ProductDetail.css';

export default function ProductDetail({ producto, onVolver, onAgregarCarrito }){
  const imageUrl = `/assets/${producto.imagen.replace('assets/', '')}`;

  return (
    <div className="product-detail">
      <nav className="breadcrumb">
        <a href="/">Inicio</a> /
        <a href="#!" onClick={onVolver}>Productos</a> /
        <span>{producto.nombre}</span>
      </nav>

      <article>
        <img className="producto-imagen" src={imageUrl} alt={producto.nombre} />

        <section className="producto-informacion">
          <span className="producto-categoria">{producto.categoria}</span>
          <h1 className="producto-nombre">{producto.nombre}</h1>
          <p className="producto-descripcion">{producto.descripcion}</p>
          <p className="producto-precio">${producto.precio.toLocaleString()}</p>

          <div className="producto-especificaciones">
            <h3>Especificaciones</h3>
            <ul>
              {producto.especificaciones.map((espec, index) => (
                <li key={index}>
                  <strong>{espec.titulo}:</strong> {espec.valor}
                </li>
              ))}
            </ul>
          </div>

          <button id="btn-carrito" onClick={() => onAgregarCarrito(producto)}>
            Añadir al Carrito
          </button>
        </section>
      </article>
    </div>
  );
};