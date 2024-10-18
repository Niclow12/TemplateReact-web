import { LoginSchema } from "@/schemas/auth";
import { api } from "../axios";

export const login = async (values: any) => {
  // ### No hace falta hacer esto ya lo haces antes de enviar la solicitud pero si queres una capa mas de seguridad esto sirve ###
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    throw new Error(validateFields.error.errors[0].message);
  }

  // ### Aqui haces la solicitud al servidor ###

  //   Respuesta falsa para pruebas de UI sin backend, cuando tengas un backend real borra esto
  return {
    message: "Login exitoso",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MjQ5NTM3NTEsImV4cCI6MTc1NjQ4OTc1MSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG4iLCJTdXJuYW1lIjoiRG93IiwiRW1haWwiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.0fiHr27pLfHKDZ7Lpom5XZoFLNkNO8Gx8eRlf2fslSQ",
  };
  //   Fin de respuesta falsa

  const response = await api.post("/login", values);

  return response.data;
};
