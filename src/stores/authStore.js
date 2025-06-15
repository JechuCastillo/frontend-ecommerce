import { create } from "zustand";
export const useAuthStore = create((set) => ({
  user: null,
  cargando: false,
  login: async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3000/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        set({ user: data.data.user });
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  setCargando: () => {
    set((state) => ({ cargando: !state.cargando }));
  },

  logout: async () => {
    const response = await fetch("http://localhost:3000/api/usuarios/logout", {
      method: "GET",
      credentials: "include",
    });
    set(() => ({ user: null }));
    if (response.ok) {
      return true;
    }
  },

  register: async (registoNombre, registroEmail, registroPassword) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/usuarios/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            nombreUsuario: registoNombre,
            email: registroEmail,
            password: registroPassword,
          }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  autenticado: async () => {
    try {
      const rta = await fetch(
        "http://localhost:3000/api/usuarios/autenticado",
        { method: "GET", credentials: "include" }
      );
      const rtaJson = await rta.json();
      console.log(rtaJson);
      set(() => ({ user: rtaJson.data }));

      return rtaJson;
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useAuthStore;
