import React from "react";
import userImg from "../assets/profile.jpeg";

const Settings = () => {
  return (
    <div className="min-h-screen flex bg-[#F5FBEF]">
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
            className="block px-4 py-2 text-green-700 font-bold hover:bg-green-100 rounded"
          >
            My Profile
          </a>
          <a
            href="/settings"
            className="block px-4 py-2 bg-green-700 text-white rounded font-bold"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header Full Width */}
        <div className="bg-green-700 text-white px-6 py-3 rounded-lg mb-10 w-full">
          <h1 className="text-4xl font-bold">Settings</h1>
        </div>

        {/* Change Password Card */}
        <div className="bg-green-700 text-white p-6 rounded-lg w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4">Change Password</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Old Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded bg-white text-black"
                placeholder="********"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded bg-white text-black"
                placeholder="********"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                New Password Confirmation
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border bg-white rounded text-black"
                placeholder="********"
              />
            </div>

            <button
              type="submit"
              className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200"
            >
              Change Password
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Settings;
