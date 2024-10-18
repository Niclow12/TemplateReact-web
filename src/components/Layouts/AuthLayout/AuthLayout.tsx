import { Outlet } from "react-router-dom";

type Props = {};

export default function AuthLayout({}: Props) {
  // Layout de authentificación de ejemplo
  return (
    <>
      <header>
        <h1>Auth header</h1>
      </header>
      <main className="flex p-4 justify-center items-center">
        <Outlet />
      </main>

      <footer>
        <h6>Auth footer de ejemplo</h6>
      </footer>
    </>
  );
}
