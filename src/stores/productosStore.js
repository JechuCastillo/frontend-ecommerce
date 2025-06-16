import { create } from "zustand";
const useProductosStore = create((set) => ({
  productos: [],

  getProductos: async () => {
    try {
      const productosFetch = await fetch(
        "http://localhost:3000/api/productos",
        { method: "GET", credentials: "include" }
      );
      const productosJson = await productosFetch.json();
      set({ productos: productosJson.data });
    } catch (error) {
      console.log(error);
    }
  },
  crearProducto: async (nombreProducto, stockProducto, precioProducto) => {
    try {
      const producto = await fetch("http://localhost:3000/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre: nombreProducto, stock: stockProducto, precio: precioProducto }),
        credentials: "include",
      });
      const nuevoProducto = await producto.json();
      return nuevoProducto
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProductosStore;
