import React from "react";
import userImg from "../assets/profile.jpeg";

const Profile = () => {
  return (
    <div className="min-h-screen flex bg-green-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-green-700 mb-6">ToDoin</h1>
        <img
          src={userImg}
          alt="Profile"
          className="w-28 h-28 rounded-full mb-2 object-cover"
        />
        <p className="mb-6 text-center text-green-700 font-medium">
          Indra dermawan
        </p>
        <div className="w-full h-[2px] bg-green-700 mb-4"></div>
        <nav className="space-y-4 w-full text-left">
          <a
            href="/dashboard"
            className="block px-4 py-2 text-green-700 font-bold hover:bg-green-100 rounded"
          >
            Dashboard
          </a>
          <a
            href="/todolist"
            className="block px-4 py-2 text-green-700 font-bold hover:bg-green-100 rounded"
          >
            Todo List
          </a>
          <a
            href="/profile"
            className="block px-4 py-2 bg-green-700 text-white rounded font-bold"
          >
            My Profile
          </a>
          <a
            href="/settings"
            className="block px-4 py-2 text-green-700 font-bold hover:bg-green-100 rounded"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header */}
        <h2 className="bg-green-700 text-white text-3xl font-bold rounded px-6 py-4 mb-6">
          My Profile
        </h2>

        {/* Profile Card */}
        <div className="bg-green-700 p-6 rounded-lg shadow w-full max-w-md ml-0 mr-auto border border-green-700">
          <img
            src={userImg}
            alt="Avatar"
            className="w-full h-48 object-cover rounded mb-4"
          />

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                Name
              </label>
              <input
                type="text"
                defaultValue="Yixuan"
                className="w-full px-4 py-2 text-black bg-white rounded focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="yixuan082@gmail.com"
                className="w-full px-4 py-2 text-black bg-white rounded focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-1">
                Avatar
              </label>
              <input
                type="text"
                defaultValue="Gambar.JPEG"
                className="w-full px-4 py-2 text-black bg-white rounded focus:outline-none"
              />
            </div>

            <div className="flex justify-between gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-white text-black px-4 py-2 rounded hover:bg-green-800 font-bold"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="flex-1 bg-white text-black px-4 py-2 rounded hover:bg-green-800 font-bold"
              >
                Delete Avatar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
