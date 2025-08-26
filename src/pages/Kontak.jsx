export default function Kontak() {
  return (
    <div className="kontak mt-0 px-6 py-5 my-10 " id="kontak">
      <div className=" text-4xl lg:text-5xl md:text-5xl text-center mb-10 font-semibold ">
        <h1>Kontak Saya</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 ">
        <div className="text-3xl  bg-gradient-to-b from-blue to-black space-y-4  rounded-xl justify-center px-7 py-2 lg:py-10 border border-white rounded-2xl p-1">
          <div className="border border-[#ffff] rounded-2xl p-4 space-y-6 my-7 px-4 text-2xl md:p-6 md:space-y-8 ">
            <ul className="italic">
              <li className="flex items-center gap-3 px-6">
                <a
                  href="https://github.com/Raihan9102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-2xl md:text-4xl lg:text-5xl"
                >
                  <i className="ri-github-line ri-lg hover:text-[#1E1E1E] cursor-pointer"></i>
                  <span className="text-2xl md:text-3xl lg:text-3xl">
                    Github
                  </span>
                </a>
              </li>
            </ul>
            <ul className="italic">
              <li className="flex items-center gap-3 px-6">
                <a
                  href="mailto:raihan.rahmat2019@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-2xl md:text-4xl lg:text-5xl"
                >
                  <i className="ri-mail-line ri-lg hover:text-[#D93025] cursor-pointer"></i>
                  <span className="text-2xl md:text-3xl lg:text-3xl">
                    Gmail
                  </span>
                </a>
              </li>
            </ul>
            <ul className="italic">
              <li className="flex items-center gap-3 px-6">
                <a
                  href="https://instagram.com/_raihanthaffan_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-2xl md:text-4xl lg:text-5xl"
                >
                  <i className="ri-instagram-line ri-lg hover:text-pink-600 cursor-pointer"></i>
                  <span className="text-2xl md:text-3xl lg:text-3xl">
                    Instagram
                  </span>
                </a>
              </li>
            </ul>
            <ul className="italic">
              <li className="flex items-center gap-3 px-6">
                <a
                  href="https://wa.me/6282246269033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-2xl md:text-4xl lg:text-5xl"
                >
                  <i className="ri-whatsapp-line ri-lg hover:text-[#25D366] cursor-pointer"></i>
                  <span className="text-2xl md:text-3xl lg:text-3xl">
                    Whatsapp
                  </span>
                </a>
              </li>
            </ul>

            <ul className="italic">
              <li className="flex items-center gap-3 px-6">
                <a
                  href="https://www.linkedin.com/in/muhammad-raihan-thaffan-hidayat-21091826b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-2xl md:text-4xl lg:text-5xl"
                >
                  <i className="ri-linkedin-box-line ri-lg hover:text-[#1E90FF] cursor-pointer"></i>
                  <span className="text-2xl md:text-3xl lg:text-3xl">
                    LinkedIn
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <form
            action="https://formsubmit.co/raihan.rahmat2019@gmail.com"
            method="POST"
            className="bg-gradient-to-b from-blue to-black p-10 mx-auto rounded-xl border border-white rounded-2xl p-1 "
          >
            <div className="flex flex-col gap-2 ">
              <div className="flex flex-col gap-1">
                <label className="font-semibold  md:text-3xl ">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="Nama"
                  placeholder="Masukkan Nama..."
                  className="border border-[#FFFFFF] p-2 rounded-md md:text-2xl"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold md:text-3xl">Email</label>
                <input
                  type="text"
                  name="Email"
                  placeholder="Masukkan Email..."
                  className="border border-[#FFFFFF] p-2 rounded-md md:text-2xl"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="Pesan" className="font-semibold md:text-3xl">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="45"
                  rows="5"
                  placeholder="Pesan..."
                  className="border border-[#FFFFFF] p-2 rounded-md md:text-2xl"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#6BA6FF] hover:bg-gradient-to-b hover:from-blue hover:to-white rounded-2xl p-2  w-full cursor-pointer md:text-3xl"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
