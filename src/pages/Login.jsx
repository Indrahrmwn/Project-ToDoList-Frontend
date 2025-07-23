import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <header className="bg-white flex justify-between items-center px-10 py-5 shadow">
        <h1 className="text-4xl font-bold text-green-700">ToDoin</h1>
        <p className="text-lg text-gray-800 font-medium">
          Belum punya akun?{""}
          <a
            href="/register"
            className="text-green-700 font-bold hover:underline"
          >
            Yuk daftar sekarang!
          </a>
        </p>
      </header>

      {/* Login Card */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg px-12 py-14 w-full max-w-lg">
          <h2 className="text-5xl font-bold text-green-700 text-center mb-10">
            Login
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg text-green-700 font-bold mb-2">Username</label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded bg-green-200 text-black focus:outline-none text-base"
              />
            </div>
            <div>
              <label className="block text-lg text-green-700 font-bold mb-2">Password</label>
              <input
                type="password"
                className="w-full px-5 py-3 rounded bg-green-200 text-black focus:outline-none text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded font-bold text-lg hover:bg-green-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
