import './CarritoItem.css'

export default function CarritoItem ({ item, onEliminar }){
    return(
        <div className="carrito-item">
    <img 
      src={`/assets/${item.imagen.replace('assets/', '')}`} 
      alt={item.nombre}
      className="carrito-item-imagen"
    />
    <div className="carrito-item-info">
      <h3>{item.nombre}</h3>
      <p className="categoria">{item.categoria}</p>
      <p className="precio">${item.precio.toLocaleString()}</p>
    </div>
    <button 
      className="btn-eliminar"
      onClick={() => onEliminar(item.carritoId)}
      title="Eliminar del carrito">
        <img src="/assets/eliminar.png" alt="Eliminar" />
    </button>
  </div>
    );
};