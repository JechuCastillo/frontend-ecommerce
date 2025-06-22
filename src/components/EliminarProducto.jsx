import { Container, Table } from "react-bootstrap";
import useProductosStore from "../stores/productosStore";
import { useEffect } from "react";
import ProductoItem from "./ProductoItem";
import { useState } from "react";
function EliminarProducto() {
  const { productos, getProductos, trigger } = useProductosStore();
  const [filtrados, setFiltrados] = useState([]);
  useEffect(() => {
    const cargarProductos = async () => {
      setFiltrados(await getProductos()); // Espera a que se completen los productos
    };
    cargarProductos();
  }, [trigger]);

  const filtrar = (e) => {
    const productosFiltrados = productos.filter((producto) => producto.nombre.includes(e.target.value));
    setFiltrados(productosFiltrados);
  };
  return (
    <Container className="w-100 p-4 text-center">
      <h1 className="fw-bold text-center">Listado de productos</h1>
      <input type="text" placeholder="Buscar por nombre" onInput={filtrar}/>
      <Table className="w-100 text-center m-auto">
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th></th>
          </tr>
          {productos && productos.length > 0 ? (
            filtrados.map((producto) => (
              <ProductoItem
                key={producto._id}
                producto={producto}
              ></ProductoItem>
            ))
          ) : (
            <tr>
              <td>No hay productos</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
export default EliminarProducto;
