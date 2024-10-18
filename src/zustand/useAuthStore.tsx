import { clearLocalStorage } from "@/lib/utils";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Definimos la interfaz para el estado de autenticación
interface AuthState {
  user: User | null;
  accessToken: string | null;
}

// Definimos la interfaz para las acciones del store
interface AuthActions {
  logout: () => void;
  setUser: (user: User) => void;
  setAccessToken: (token: string) => void;
}

// ACA CREAR UNA INTERFAZ DE USUARIO EN LAS INTERFACES E IMPORTARLO
interface User {
  id: string;
  username: string;
  email: string;
}

// Combinamos el estado y las acciones en una sola interfaz
type AuthStore = AuthState & AuthActions;

// Creamos y exportamos el store
export const useAuthStore = create<AuthStore>()(
  devtools(
    (set) => ({
      // Estado inicial
      user: null,
      accessToken: null,

      // Acciones
      setUser: (user) => set({ user }),
      setAccessToken: (accessToken) => set({ accessToken }),
      logout: () => {
        set({ user: null, accessToken: null });
        clearLocalStorage("auth");
      },
    }),
    {
      name: "AuthStore", // Nombre para las devtools
    }
  )
);
