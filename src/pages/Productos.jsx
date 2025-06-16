import { useEffect } from "react";
import useProductosStore from "../stores/productosStore";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import ProductoItem from "../components/ProductoItem";
function Productos() {
  const { productos, getProductos } = useProductosStore();
  useEffect(() => {
    const cargarProductos = async () => {
      await getProductos(); // Espera a que se completen los productos
    };
    cargarProductos();
  }, [productos]); 
  return (
    <>
      <Container className="w-100 p-4">
        <h1>Listado de productos</h1>
        <Table className="w-75 text-center">
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Precio</th>
              <th></th>
            </tr>
            {productos.map((producto) => (
              <ProductoItem
                key={producto._id}
                producto={producto}
              ></ProductoItem>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Productos;
