import React from "react";
import { Link } from "react-router-dom";
import ilustrasi from "../assets/ilustrasi.jpeg";
import aboutImg from "../assets/aboutImg.jpeg";
import aboutImg2 from "../assets/aboutImg2.jpeg";
import aboutImg3 from "../assets/aboutImg3.jpeg";
import contactIlustrasi from "../assets/contactIlustrasi.png";

const Landing = () => {
  return (
    <>
      <section className="pt-24 bg-white">{/* isi landing page... */}</section>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-0">
          {/* Teks */}
          <div className="md:w-1/2 pl-10">
            <h2 className="text-5xl md:text-7xl font-bold text-green-700 leading-tight">
              Atur Harimu Lebih Mudah <br />
              Cukup Sekali Sentuh
            </h2>
            <p className="mt-6 text-2xl font-semibold text-gray-700">
              Catat, atur, dan selesaikan semua tugasmu dalam satu tempat.
            </p>
            <section className="pt-10 bg-white">
              {/* isi landing page... */}
            </section>
            <div className="flex justify-start pl-1">
              <Link
                to="/login"
                className="bg-green-600 text-white text-xl md:text-2xl font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>

          {/* Gambar */}
          <div className="md:w-1/2 pr-0">
            <img
              src={ilustrasi}
              alt="Ilustrasi"
              className="w-full h-auto object-cover rounded-tl-[120px] rounded-bl-[120px]"
            />
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-20 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-10">
          <div className="md:w-1/2">
            <img
              src={aboutImg}
              alt="Tentang ToDolist"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 pl-10">
            <h2 className="text-5xl md:text-6xl font-bold text-green-700 leading-tight mb-4">
              Kenapa Harus Pakai <br /> ToDoList?
            </h2>
            <p className="text-2xl font-semibold text-gray-700 leading-relaxed">
              <span className="font-bold text-black">Biar Gak Keteteran!</span>
              <br />
              Hidupmu penuh tugas, jadwal padat, dan kadang suka lupa?{" "}
              <strong>ToDoList</strong> hadir buat bantu kamu lebih teratur.
              Cukup tulis semua kegiatan, centang yang udah selesai, dan rasakan
              hari-hari yang lebih terarah tanpa stres.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-10">
          <div className="md:w-1/2 pl-10">
            <h2 className="text-5xl md:text-6xl font-bold text-green-700 leading-tight mb-4">
              Fitur-Fitur Utama yang <br /> Bikin Produktif
            </h2>
            <p className="text-2xl font-semibold text-gray-700 leading-relaxed">
              <span className="font-bold text-black">
                Mudah, Cepat, Efisien
              </span>
              <br />
              Tambah tugas hanya dengan sekali klik. Atur prioritas, beri
              deadline, dan tandai tugas selesai. Desainnya simpel, ringan, dan
              responsif — pas banget buat kamu yang pengen produktif tanpa
              ribet.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={aboutImg2}
              alt="Tentang ToDolist"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-10">
          <div className="md:w-1/2">
            <img
              src={aboutImg3}
              alt="Tentang ToDolist"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 pl-10">
            <h2 className="text-5xl md:text-6xl font-bold text-green-700 leading-tight mb-4">
              Siapa Saja Bisa Pakai <br /> ToDoList Ini
            </h2>
            <p className="text-2xl font-semibold text-gray-700 leading-relaxed">
              <span className="font-bold text-black">
                Buat Semua Orang, Kapan Saja
              </span>
              <br />
              Pelajar, mahasiswa, pekerja, bahkan kamu yang suka menunda.
              ToDoList ini cocok banget buat siapa pun yang pengen lebih
              disiplin dan gak lagi bingung mau mulai dari mana. Mulai aja dulu
              — sisanya tinggal jalan.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="bg-white py-12">
        <div className="flex justify-center">
          <Link
            to="/login"
            className="bg-green-600 text-white text-xl md:text-2xl font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transition"
          >
            Create Your List
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-10">
          <div className="md:w-1/2 bg-green-600 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Hubungi Kami</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-400 bg-white focus:outline-none border border-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-400 bg-white focus:outline-none border border-white"
              />
              <input
                type="text"
                placeholder="Subjek"
                className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-400 bg-white focus:outline-none border border-white"
              />
              <textarea
                placeholder="Pesan"
                rows="4"
                className="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-400 bg-white focus:outline-none border border-white"
              />
              <button
                type="submit"
                className="bg-white text-green-600 px-6 py-2 rounded font-bold hover:bg-gray-100"
              >
                Kirim
              </button>
            </form>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={contactIlustrasi}
              alt="Ilustrasi Kontak"
              className="w-[40%] md:w-[45%] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="bg-white py-20">
        <h2 className="text-7xl md:text-7xl font-bold text-center text-green-700 mb-14">
          Berlangganan untuk menikmati <br /> Todolist yang tidak terbatas
        </h2>
        <div className="flex justify-center">
          <div className="bg-green-700 text-white rounded-xl p-10 w-full max-w-lg text-center space-y-5 mt-10">
            <h3 className="text-2xl font-bold">Berlangganan</h3>
            <p className="text-base">
              Atur harimu dengan lebih rapi dan bebas gangguan
            </p>
            <div className="text-3xl font-bold">25.000/bulan</div>
            <button className="bg-white text-green-700 font-bold px-5 py-2 rounded hover:bg-gray-100">
              Berlangganan
            </button>
            <ul className="text-base space-y-2 pt-5">
              <li>Simpan tugas tanpa batas</li>
              <li>Sinkron otomatis di semua perangkat</li>
              <li>Tema premium & bebas iklan</li>
              <li>Pengingat pintar & notifikasi rutin</li>
              <li>Statistik produktivitas mingguan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Footer Section */}
      <footer className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo & Slogan */}
          <div>
            <h3 className="text-4xl font-bold mb-2">ToDoin</h3>
            <p className="text-base text-gray-200 max-w-xs">
              Membantumu lebih teratur setiap hari dan menyelesaikan tugas
              dengan lebih efisien.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-2xl font-semibold mb-3">Informasi Kontak</h4>
            <ul className="space-y-2 text-lg text-gray-100">
              <li>
                <strong>Email:</strong> todoin@gmail.com
              </li>
              <li>
                <strong>WhatsApp:</strong> 0812-3456-7890
              </li>
              <li>
                <strong>Instagram:</strong> @todoin.id
              </li>
              <li>
                <strong>Twitter:</strong> @todoin_app
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-200 mt-10 border-t border-white/20 pt-4">
          © {new Date().getFullYear()} ToDoin. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Landing;
