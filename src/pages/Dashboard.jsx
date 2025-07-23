import React from "react";
import userImg from "../assets/profile.jpeg";

const Dashboard = () => {
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
        <p className="mb-6 text-center text-green-700 font-medium">Indra dermawan</p>
        <div className="w-full h-[2px] bg-green-700 mb-4"></div>
        <nav className="space-y-4 w-full text-left">
          <a
            href="dashboard"
            className="block px-4 py-2 bg-green-700 text-white rounded font-bold"
          >
            Dashboard
          </a>
          <a href="/todolist" className="block px-4 py-2 text-green-700 font-bold hover:bg-green-100 rounded">
            Todo List
          </a>
          <a href="/profile" className="block px-4 py-2 text-green-700 font-bold hover:bg-green-100 rounded">
            My Profile
          </a>
          <a href="/settings" className="block px-4 py-2 text-green-700 font-bold hover:bg-green-100 rounded">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="bg-green-700 text-white text-3xl font-bold rounded px-6 py-4 mb-6">
          Dashboard
        </h2>
        <div className="bg-green-700 text-white font-bold px-6 py-4 rounded w-52">
          Total : 0
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
