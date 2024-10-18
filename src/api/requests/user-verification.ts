import { useAuthStore } from "@/zustand/useAuthStore";
import { jwtDecode } from "jwt-decode";

export const getUserInfo = async ({ queryKey }: { queryKey: any }) => {
  const [_, accessToken] = queryKey;

  try {
    if (!accessToken) {
      throw new Error("No token provided");
    }

    const decodedToken = jwtDecode(accessToken);

    if (!decodedToken) {
      throw new Error("Invalid token");
    }

    const date = new Date();

    if (!decodedToken.exp || decodedToken.exp < date.getTime() / 1000) {
      throw new Error("Token expired");
    }

    useAuthStore.getState().setAccessToken(accessToken);

    // Seteo de usuario en el store de prueba, cuando tengas un backend real borra esto
    useAuthStore.getState().setUser({
      id: "1",
      username: "John",
      email: "johndoe@example.com",
    });
    // Fin de seteo de usuario en el store de prueba

    // ### Aqui haces la solicitud al servidor para obtener datos de usuarios u otras peticiones que necesites antes de arrancar la app o si vas a obtener esos datos desde el token hacelo aca ###

    return true;
  } catch (error) {
    console.error(error);
    useAuthStore.getState().logout();
    // window.location.replace("/login");
    return;
  }
};
