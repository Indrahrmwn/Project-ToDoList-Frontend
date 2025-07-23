import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios"; // Pastikan path-nya sesuai

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", form);
      navigate("/dashboard");
    } catch (err) {
      setError("Pendaftaran gagal. Coba lagi.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <header className="bg-white flex justify-between items-center px-10 py-5 shadow">
        <h1 className="text-4xl font-bold text-green-700">ToDoin</h1>
        <p className="text-lg text-gray-800 font-medium">
          Sudah punya akun?{" "}
          <a href="/login" className="text-green-700 font-bold hover:underline">
            Login
          </a>
        </p>
      </header>

      {/* Register Card */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg px-12 py-14 w-full max-w-lg">
          <h2 className="text-5xl font-bold text-green-700 text-center mb-10">
            Daftar Akun
          </h2>

          {error && (
            <div className="text-red-600 text-center mb-4 font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-lg text-green-700 font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded bg-green-200 text-black focus:outline-none text-base"
              />
            </div>
            <div>
              <label className="block text-lg text-green-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded bg-green-200 text-black focus:outline-none text-base"
              />
            </div>
            <div>
              <label className="block text-lg text-green-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded bg-green-200 text-black focus:outline-none text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded font-bold text-lg hover:bg-green-800"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
