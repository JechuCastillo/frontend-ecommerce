function ProductoItem({ producto }) {
  return (
    <tr id={producto._id}>
      <td>{producto.nombre}</td>
      <td>{producto.stock}</td>
      <td>{`$${producto.precio}`}</td>
    </tr>
  );
}
export default ProductoItem;
