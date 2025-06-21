import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addProducto: (producto) => {
        const { cart } = get();
        const existe = cart.find((item) => item.id === producto.id);
        if (existe) {
          set({
            cart: cart.map((item) =>
              item.id === producto.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            ),
          });
        } else {
          set({ cart: [...cart, { ...producto, cantidad: 1 }] });
        }
      },

      eliminarProducto: (id) => {
        const { cart } = get();
        set({ cart: cart.filter((item) => item.id !== id) });
      },
    }),
    {
      name: "carrito",
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);

export default useCartStore;
