import { InternalAxiosRequestConfig } from "axios";
import { api } from "./axios";
import { useAuthStore } from "@/zustand/useAuthStore";

interface CustomHeaders {
  Accept: string;
  "Content-Type"?: string;
  Authorization?: string;
}

export const AxiosInterceptor = () => {
  const updateHeader = (request: InternalAxiosRequestConfig) => {
    let token;

    // Verifica si el token de acceso está almacenado en el estado de Zustand o en localStorage

    if (useAuthStore.getState().accessToken) {
      token = useAuthStore.getState().accessToken;
    } else {
      token =
        localStorage.getItem("auth") &&
        JSON.parse(localStorage.getItem("auth") as string);
    }

    const newHeaders: CustomHeaders = {
      //   "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
    };

    // Verifica si la solicitud es FormData o JSON y establece el tipo de contenido apropiado
    if (request.data instanceof FormData) {
      newHeaders["Content-Type"] = "multipart/form-data";
    } else {
      newHeaders["Content-Type"] = "application/json";
    }

    if (token) {
      newHeaders.Authorization = `Bearer ${token}`;
    }

    request.headers = {
      ...request.headers,
      ...newHeaders,
    } as InternalAxiosRequestConfig["headers"];

    return request;
  };

  api.interceptors.request.use((request) => {
    return updateHeader(request);
  });
};
