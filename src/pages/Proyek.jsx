export default function Proyek() {
  return (
    <div className="projek mt-0  " id="proyek">
      <h1 className="my-8 text-center text-3xl md:text-5xl lg:text-6xl mb-10 font-semibold">
        Projek Kolaborasi
      </h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[27px] md:text-4xl lg:text-4xl mb-3 md:mb-4 text-center">
            Website CryptoCurrency
          </h2>
          <img
            src="asset\portfolio\cryptomania.png"
            alt="Image"
            className="w-90 h-70 md:w-full md:h-90  lg:w-full lg:h-100 rounded-xl shadow-md  "
          />
        </div>
        <div className="border border-white rounded-2xl lg:border-0">
          <h3 className="text-[27px] md:text-4xl lg:text-4xl  text-center mb-4 ">
            Front-End
          </h3>
          <ul
            className=" text-[18px] list-disc bg-gradient-to-b from-blue to-black pl-10 rounded-2xl lg:text-2xl p-6  lg:p-9 lg:pb-11
             lg:border border-white rounded-2xl lg:items-center"
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
            className="italic text-xl md:text-3xl lg:text-4xl bg-gradient-to-b from-blue to-black p-4 rounded-2xl hover:bg-gradient-to-b hover:from-black hover:to-white"
          >
            LINK WEBSITE
          </a>
        </p>
        <p>
          <a
            href="https://github.com/Raihan9102/crypto-mania/tree/bbd948674977595f41b6b4c33605f7e939e08a5f/src"
            target="_blank"
            rel="noopener noreferrer"
            className="italic text-xl  md:text-3xl lg:text-4xl bg-gradient-to-b from-blue to-black p-4 rounded-2xl hover:bg-gradient-to-b hover:from-black hover:to-white"
          >
            LINK GITHUB
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2 mt-20 mb-10">
        <div className="flex flex-col items-center">
          <h3 className="text-[27px] md:text-4xl lg:text-4xl mb-3 md:mb-4 text-center">
            Alat Bantu Tunanetra Dengan ESP32
          </h3>
          <img
            src="asset/portfolio/alat_bantu_tunanetra.jpeg"
            alt="Alat Bantu Tunanetra"
            className="w-95 lg:w-full h-100 lg:h-120 rounded-xl shadow-md"
          />
        </div>
        <div className="border border-white rounded-2xl lg:border-0">
          <h2 className="text-[27px] md:text-4xl lg:text-4xl  md:mb-8 mb-1 lg:mb-4  text-center">
            IoT Developer
          </h2>
          <ul
            className="text-[18px] list-disc bg-gradient-to-b from-blue to-black pl-10 rounded-2xl lg:text-2xl p-6  lg:p-9 lg:pb-7
             lg:border border-white rounded-2xl lg:items-center"
          >
            <li>
              Mengembangkan sistem alat bantu berbasis IoT untuk tunanetra
              menggunakan mikrokontroler ESP32 guna mendeteksi rintangan dan
              memberikan umpan balik secara real-time.
            </li>
            <li>
              Mengintegrasikan sensor ultrasonik untuk mendeteksi jarak terhadap
              objek di sekitar, buzzer sebagai alat peringatan suara, dan sensor
              kemiringan (tilt sensor) untuk mendeteksi posisi perangkat saat
              digunakan.
            </li>
            <li>
              Menggunakan aplikasi Blynk untuk pemantauan dan notifikasi jarak
              jauh terhadap status perangkat dan kondisi lingkungan.
            </li>
            <li>Mengimplementasikan kode modular berbasis Arduino (C/C++).</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-10 lg:mt-0 gap-10 mb-15">
        <p>
          <a
            href="https://www.tinkercad.com/things/kg79GtpWaSQ-magnificent-rottis/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard%2Fdesigns%2Fcircuits&sharecode=wCYvbc2WEY2uRxNBIdB_I8HOngmrJJwIBeNs6F3fQrQ"
            target="_blank"
            rel="noopener noreferrer"
            className="italic text-xl md:text-3xl lg:text-4xl bg-gradient-to-b from-blue to-black p-4 rounded-2xl hover:bg-gradient-to-b hover:from-black hover:to-white "
          >
            LINK PROTOTYPE WITH ARDUINO
          </a>
        </p>
      </div>
    </div>
  );
}
