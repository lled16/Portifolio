
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contato from "./pages/Contato/Contato";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}
