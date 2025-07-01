const Footer = () => {
  return (
    <div className="mt-32  md:text-3xl lg:text-3xl py-4 flex justify-between items-center font-bold lg:px-10">
      <h1>Portfolio</h1>
      <div className="px-10 space-x-4 opacity-90 md:px-18 md:space-x-6 lg:space-x-10 lg:px-70">
        <a href="#beranda" className="hover:text-[#696969]">
          Beranda
        </a>
        <a href="#tentang" className="hover:text-[#696969]">
          Tentang{" "}
        </a>
        <a href="#proyek" className="hover:text-[#696969]">
          Proyek
        </a>
      </div>
    </div>
  );
};

export default Footer;
