import useCartStore from '../stores/cartStore'
function ProductoItem({ producto }) {
  const { addProducto } = useCartStore();
  const handleClick = () => {
    const productoCarrito = {
      id: producto._id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    };
    addProducto(productoCarrito);
  };
  return (
    <tr id={producto._id}>
      <td>{producto.nombre}</td>
      <td>{producto.stock}</td>
      <td>{`$${producto.precio}`}</td>
      <td>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Agregar al carrito
        </button>
      </td>
    </tr>
  );
}
export default ProductoItem;
