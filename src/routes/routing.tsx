import AuthLayout from "@/components/Layouts/AuthLayout/AuthLayout";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import UserVerificationLayout from "@/components/Layouts/UserVerificationLayout/UserVerificationLayout";
import LoginPage from "@/components/Pages/LoginPage/LoginPage";
import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//   EJEMPLO 2 LAYOUTS UNO DE AUTH Y OTRO DE APP

export const Routing = () => {
  const router = createBrowserRouter([
    // AUTH LAYOUT
    {
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <div>REGISTER</div>,
        },
        // FALTARIAN POR EJEMPLO LAS RUTAS DE RECUPERAR CONTRASEÑA, VALIDAR EMAIL, ETC
      ],
    },
    // APP LAYOUT CON VERIFICACION DE AUTENTICACION (POR EJEMPLO) Y REDIRECCION A LOGIN SI NO ESTA AUTENTICAD, LO MAS COMUN EN CASOS DE SISTEMAS DE GESTION
    {
      element: (
        <Suspense
          fallback={
            <h3>
              Cargando... (Aca deberia ir un loader o un skeleton, esto se
              ejecuta cuando el componente de dentro esta haciendo una peticion
              con el useQuery de tanstack-query)
            </h3>
          }
        >
          <UserVerificationLayout />
        </Suspense>
      ),
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <div>HOME</div>,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
