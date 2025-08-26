export default function Beranda() {
  return (
    <div className="hero lg:mb-20 md:mb-74 ">
      <div>
        <h1 className="md:text-5xl lg:text-6xl font-bold lg:mb-7 mb-2 text-2xl my-10 md:my-12 lg:my-13 lg:px-8 px-0 mt-5">
          Hai, Saya Raihan Thaffan.
        </h1>
        <p className="text-[20px] md:text-4xl lg:text-4xl lg:mb-9 lg:px-8 px-0 mb-10 md:mb-10">
          Saya adalah mahasiswa Teknik Telekomunikasi semester 6 yang memiliki
          ketertarikan di bidang teknologi. Saya pernah terlibat dalam beberapa
          proyek seperti pengembangan web dan Internet of Things (IoT). Meskipun
          saya menyadari bahwa kemampuan saya masih perlu ditingkatkan, saya
          memiliki semangat dan kesiapan untuk terus belajar dan berkembang.
        </p>
        <div className="flex justify-center  mb-21 lg:mb-10  ">
          <a
            href="\cv\cv_raihan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="  text-[20px] md:text-5xl  lg:text-4xl bg-gradient-to-b from-blue to-black text-[#FFFF] p-2 rounded-2xl hover:bg-gradient-to-b hover:from-black hover:to-white md:p-4 lg:p-5 lg:my-4 mb-6"
          >
            Download CV <i className="ri-download-line ri-lg "></i>
          </a>
        </div>
      </div>
    </div>
  );
}
