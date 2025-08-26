import { NavLink } from "react-router-dom";

const linkBase =
  "sm:text-lg text-base font-medium md:text-[22px] lg:text-2xl transition hover:text-[#0065FF]";
const active = "text-[#2B7FFF]";

export default function Navbar() {
  return (
    <header className="background: linear-gradient(to bottom, #6eb9f7, #1f2b48);">
      <div className="container mx-auto  px-0 py-0 md:flex md:px-1 md:py-2 lg:px-2 lg:py-3 md:items-center md:justify-between lg:flex lg:items-center lg:justify-between ">
        <h1 className=" text-2xl md:text-[45px] lg:text-5xl font-bold text-white text-center mb-2 ">
          PORTFOLIO
        </h1>

        {/* Menu konsisten di semua ukuran layar */}
        <ul className="flex items-center gap-6  md:gap-7 pb-1  justify-center border-b border-white lg:border-0 md:border-0">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : "text-white"}`
              }
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tentang"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : "text-white"}`
              }
            >
              Tentang
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/proyek"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : "text-white"}`
              }
            >
              Proyek
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kontak"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : "text-white"}`
              }
            >
              Kontak
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
