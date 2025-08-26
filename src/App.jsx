import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";

import Beranda from "./pages/Beranda.jsx";
import Tentang from "./pages/Tentang.jsx";
import Proyek from "./pages/Proyek.jsx";
import Kontak from "./pages/Kontak.jsx";

function App() {
  return (
    <>
      <PreLoader />
      <div className="container mx-auto px-3">
        <Navbar />
        <div className="border-b-2 border-white mt-[0.1px] hidden md:block mb-10"></div>

        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/proyek" element={<Proyek />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>

        <div className="border-b-2 border-white mt-[0.1px]"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
