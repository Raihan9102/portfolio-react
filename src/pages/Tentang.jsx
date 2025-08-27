export default function Tentang() {
  return (
    <div className="tentang mt-0  mb-20" id="tentang">
      <h1 className=" text-3xl lg:text-5xl md:text-5xl text-center font-semibold  my-9">
        Tentang Saya
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center lg:gap-10 my-12">
        <img
          src="asset/portfolio/pp.png"
          alt="Image"
          className="lg:w-150 w-80  rounded-xl  mb-10 mx-auto md:w-150 lg:mx-auto  border border-[#ffff] rounded-3xl "
        />
        <div className=" bg-gradient-to-b from-blue to-black border border-[#FFFF] rounded-2xl mb-10 p-2 ">
          <h1 className=" text-2xl lg:text-[32px] md:text-[39px]  mb-2 text-center md:text-left lg:ml-20 font-semibold">
            Muhammad Raihan Thaffan Hidayat
          </h1>
          <ul className="list-disc pl-10  text-[18px] lg:text-[28px] md:text-[30px] mb-2 lg:mb-2">
            <li>Kampus : Telkom University</li>
            <li>Jurusan : Teknik Telekomunikasi</li>
            <li>Usia : 20 Tahun</li>
            <li>Minat : IoT, Web Dev, (Embedded System)</li>
            <li>Tools (Basic) : React, Arduino, ESP32, Excel, Mysql</li>
          </ul>
          <p className="text-[15px] lg:text-[26px] md:text-[28px] items-center italic mb-1 lg:mb-10 text-center md:text-left ">
            "Hard work never betrays the result. If the result isn't right,
            maybe it's the way you worked that needs to change."
          </p>
        </div>
      </div>
    </div>
  );
}
