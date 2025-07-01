import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar py-1 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold py-4 text-white">
          PORTFOLIO
        </h1>
      </div>

      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0  
        md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none 
        ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li>
          <a
            href="#beranda"
            className="sm:text-lg text-base font-medium md:text-xl lg:text-2xl hover:text-[#696969]"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            className="sm:text-lg text-base font-medium md:text-xl lg:text-2xl hover:text-[#696969]"
          >
            Tentang
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            className="sm:text-lg text-base font-medium md:text-xl lg:text-2xl hover:text-[#696969]"
          >
            Proyek
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            className="sm:text-lg text-base font-medium md:text-xl lg:text-2xl hover:text-[#696969]"
          >
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
