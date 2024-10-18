import "./App.css";
import TanstackProvider from "./components/Providers/TanstackProvider";
import { ThemeProvider } from "./components/Providers/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import { Routing } from "./routes/routing";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TanstackProvider>
          <Routing />
          <Toaster />
        </TanstackProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
