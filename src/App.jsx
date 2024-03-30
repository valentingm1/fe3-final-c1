import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Detail />} />
        </Route>

        <Route path="*" element={<h1>No existe la pagina</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
