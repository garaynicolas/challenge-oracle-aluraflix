import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ListCategorias from "./components/ListCategorias/ListCategorias";
import { AluraProvider } from "./context/useAlura";
import Formulario from "./pages/Formulario";

function App() {
  return (
    <>
      <AluraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ListCategorias />} />
          <Route path="/crear-video" element={<Formulario />} />
        </Routes>
        <Footer />
      </AluraProvider>
    </>
  );
}

export default App;
