import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("El email debe ser válido")
    .min(1, "El email es requerido"),
  password: z.string().min(1, "La contraseña es requerida"),
});