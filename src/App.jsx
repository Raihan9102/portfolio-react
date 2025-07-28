function App() {
  return (
    <>
      <div className="hero ">
        <div>
          <h1 className="md:text-5xl lg:text-6xl font-bold mb-7 text-[27px] my-10 md:my-12 lg:my-13 animate__animated animate__fadeInDown animate__delay-2s">
            Hai, Saya Raihan Thaffan.
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl mb-10 animate__animated animate__fadeInUp animate__delay-3s">
            Saya adalah mahasiswa Teknik Telekomunikasi semester 6 yang memiliki
            ketertarikan di bidang teknologi. Saya pernah terlibat dalam
            beberapa proyek seperti pengembangan web dan Internet of Things
            (IoT). Meskipun saya menyadari bahwa kemampuan saya masih perlu
            ditingkatkan, saya memiliki semangat dan kesiapan untuk terus
            belajar dan berkembang.
          </p>
          <div className="flex justify-center ">
            <a
              href="\cv\cv_raihan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-2xl md:text-3xl lg:text-4xl bg-[#696969] p-2 rounded-2xl hover:bg-[#808080] md:p-4 lg:p-5 lg:my-4 animate__animated animate__fadeInLeft animate__delay-2s"
            >
              Download CV{" "}
              <i className="ri-download-line ri-lg animate__animated animate__fadeInRight animate__delay-4s"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Tentang*/}

      <div
        className="tentang mt-0 py-30  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center lg:gap-10 animate__animated animate__fadeInUp animate__delay-5s"
        id="tentang"
      >
        <img
          src="asset/portfolio/pp.jpeg"
          alt="Image"
          className="w-80  rounded-xl  mb-10 mx-auto md:w-150 lg:w-125 lg:mx-auto "
          data-aos="fade-up"
          data-aos-duration="1500"
        />
        <div>
          <h1
            className="text-3xl md:text-[40px] lg:text-[33px] mb-2 text-center md:text-left "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Muhammad Raihan Thaffan Hidayat
          </h1>
          <ul
            className="list-disc pl-10 text-xl md:text-3xl mb-2 "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <li>Kampus : Telkom University</li>
            <li>Jurusan : Teknik Telekomunikasi</li>
            <li>Usia : 20 Tahun</li>
            <li>Minat : IoT, Web Dev, (Embedded System)</li>
            <li>Tools (Basic) : React, Arduino, ESP32, Excel, Mysql</li>
          </ul>
          <p
            className="text-xl md:text-3xl italic mb-10 text-center md:text-left "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            "Hard work never betrays the result. If the result isn't right,
            maybe it's the way you worked that needs to change."
          </p>
        </div>
      </div>

      {/*Projek */}

      <div className="projek mt-0  py-15  " id="proyek">
        <h1
          className="italic text-4xl md:text-5xl lg:text-6xl mb-10 font-bold"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Projek Kolaborasi
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
          <div>
            <h2
              className="text-[32px] md:text-4xl lg:text-4xl mb-3 md:mb-4 text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Website CryptoCurrency
            </h2>
            <img
              src="asset\portfolio\cryptomania.png"
              alt="Image"
              className="w-full h-100 rounded-xl shadow-md  "
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
          <div>
            <h3
              className="text-3xl md:text-4xl lg:text-4xl mb-2 text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Front-End
            </h3>
            <ul
              className="list-disc   pl-10 text-xl md:text-3xl lg:text-2xl mb-2  lg:py-8 "
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <li>
                Mengembangkan antarmuka pengguna website cryptocurrency
                menggunakan React.js dan CSS untuk menampilkan data pasar kripto
                secara real-time.
              </li>
              <li>
                Membuat halaman About Us menggunakan React.js dan CSS dengan
                tampilan yang responsif dan menarik.
              </li>
              <li>
                Menampilkan foto profil dan ikon media sosial seperti Instagram,
                GitHub, dan Email.
              </li>
              <li>Ikon dapat diklik untuk langsung menuju ke tautan tujuan.</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-7">
          <p>
            <a
              href="https://cryptomania-app.vercel.app/AI"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl md:text-3xl lg:text-4xl bg-[#696969] p-4 rounded-2xl hover:bg-[#808080]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              LINK WEBSITE
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Raihan9102/crypto-mania/tree/bbd948674977595f41b6b4c33605f7e939e08a5f/src"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl  md:text-3xl lg:text-4xl bg-[#696969] p-4 rounded-2xl hover:bg-[#808080]"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              LINK GITHUB
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2 mt-20 ">
          <div className="flex flex-col items-center">
            <h3
              className="text-[32px] md:text-4xl lg:text-4xl mb-3 md:mb-4 text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Alat Bantu Tunanetra Dengan ESP32
            </h3>
            <img
              src="asset/portfolio/alat_bantu_tunanetra.jpeg"
              alt="Alat Bantu Tunanetra"
              className="w-95 lg:w-full h-100 lg:h-120 rounded-xl shadow-md"
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-4xl mb-2 text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              IoT Developer
            </h2>
            <ul
              className="list-disc   pl-10 text-xl md:text-3xl lg:text-2xl mb-2  lg:py-17 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <li>
                Mengembangkan sistem alat bantu berbasis IoT untuk tunanetra
                menggunakan mikrokontroler ESP32 guna mendeteksi rintangan dan
                memberikan umpan balik secara real-time.
              </li>
              <li>
                Mengintegrasikan sensor ultrasonik untuk mendeteksi jarak
                terhadap objek di sekitar, buzzer sebagai alat peringatan suara,
                dan sensor kemiringan (tilt sensor) untuk mendeteksi posisi
                perangkat saat digunakan.
              </li>
              <li>
                Menggunakan aplikasi Blynk untuk pemantauan dan notifikasi jarak
                jauh terhadap status perangkat dan kondisi lingkungan.
              </li>
              <li>
                Mengimplementasikan kode modular berbasis Arduino (C/C++).
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-10 lg:mt-0 gap-10 ">
          <p>
            <a
              href="https://www.tinkercad.com/things/kg79GtpWaSQ-magnificent-rottis/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard%2Fdesigns%2Fcircuits&sharecode=wCYvbc2WEY2uRxNBIdB_I8HOngmrJJwIBeNs6F3fQrQ"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xl md:text-3xl lg:text-4xl bg-[#696969] p-4 rounded-2xl hover:bg-[#808080] "
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              LINK PROTOTYPE WITH ARDUINO
            </a>
          </p>
        </div>
      </div>

      {/* Kontak */}

      <div className="kontak mt-0 px-6 py-10 my-10 pt-15" id="kontak">
        <div
          className=" text-4xl text-center mb-10 font-bold md:text-6xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1>Kontak Saya</h1>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="text-3xl  bg-[#696969] space-y-4  rounded-xl justify-center px-7 py-2 lg:py-10">
            <div className="border border-[#ffff] rounded-2xl p-4 space-y-6 my-7 px-4 text-2xl md:p-6 md:space-y-8 ">
              <ul className="italic">
                <li className="flex items-center gap-3 px-6">
                  <a
                    href="mailto:raihan.rahmat2019@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-2xl md:text-4xl lg:text-5xl"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <i className="ri-mail-line ri-lg hover:text-[#D93025] cursor-pointer"></i>
                    <span
                      className="text-2xl md:text-3xl lg:text-3xl"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
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
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <i className="ri-instagram-line ri-lg hover:text-pink-600 cursor-pointer"></i>
                    <span
                      className="text-2xl md:text-3xl lg:text-3xl"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
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
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <i className="ri-whatsapp-line ri-lg hover:text-[#25D366] cursor-pointer"></i>
                    <span
                      className="text-2xl md:text-3xl lg:text-3xl"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      Whatsapp
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="italic">
                <li className="flex items-center gap-3 px-6">
                  <a
                    href="https://github.com/Raihan9102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-2xl md:text-4xl lg:text-5xl"
                    data-aos="fade-down"
                    data-aos-duration="20a00"
                  >
                    <i className="ri-github-line ri-lg hover:text-[#1E1E1E] cursor-pointer"></i>
                    <span
                      className="text-2xl md:text-3xl lg:text-3xl"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      Github
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
                    data-aos="fade-down"
                    data-aos-duration="20a00"
                  >
                    <i className="ri-linkedin-box-line ri-lg hover:text-[#1E90FF] cursor-pointer"></i>
                    <span
                      className="text-2xl md:text-3xl lg:text-3xl"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
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
              className="bg-[#696969] p-10 mx-auto rounded-xl"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label
                    className="font-semibold  md:text-3xl "
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="Nama"
                    placeholder="Masukkan Nama..."
                    className="border border-[#FFFFFF] p-2 rounded-md md:text-2xl"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="font-semibold md:text-3xl"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="Email"
                    placeholder="Masukkan Email..."
                    className="border border-[#FFFFFF] p-2 rounded-md md:text-2xl"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="Pesan"
                    className="font-semibold md:text-3xl"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    Pesan
                  </label>
                  <textarea
                    name="pesan"
                    id="pesan"
                    cols="45"
                    rows="5"
                    placeholder="Pesan..."
                    className="border border-[#FFFFFF] p-2 rounded-md md:text-2xl"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#a6a6a6] hover:bg-[#1E90FF] rounded-2xl p-2  w-full cursor-pointer md:text-3xl"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
