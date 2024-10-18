import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/zustand/useAuthStore";
import { Outlet } from "react-router-dom";

type Props = {};
export default function MainLayout({}: Props) {
  const { user, logout } = useAuthStore();
  return (
    <>
      {/* Hacer un componente header aparte */}
      <header>
        <h1>MAIN header</h1>
        {user && (
          <>
            <h2>{user.username}</h2>
            <Button type="button" onClick={logout}>
              Cerrar sesión
            </Button>
          </>
        )}
      </header>
      {/*  */}
      
      <main>
        <Outlet />
      </main>

      {/* hacer componente footer aparte */}
      <footer>
        <h6>MAIN footer de ejemplo</h6>
      </footer>
      {/*  */}
    </>
  );
}
