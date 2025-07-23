import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../assets/profile.jpeg";

const AddTodoPage = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    onAdd({
      id: Date.now(),
      title,
      desc,
    });

    navigate("/todolist");
  };

  return (
    <div className="min-h-screen flex bg-green-50">
      {/* Sidebar langsung di sini */}
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
            href="/add"
            className="block px-4 py-2 bg-green-700 text-white font-bold rounded"
          >
            Add Todolist
          </a>
          <a
            href="/profile"
            className="block px-4 py-2 text-green-700 font-bold hover:bg-green-100 rounded"
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

      {/* Main content */}
      <main className="flex-1 p-10">
        <h2 className="bg-green-700 text-white text-3xl font-bold rounded px-6 py-4 mb-6">
          Add Todolist
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow max-w-md"
        >
          <div className="mb-4">
            <label className="block font-bold mb-2 text-green-800">Title</label>
            <input
              type="text"
              className="w-full p-2 border text-black border-green-300 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-green-800">
              Description
            </label>
            <textarea
              className="w-full p-2 border text-black border-green-300 rounded"
              rows="4"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded font-bold hover:bg-green-800"
          >
            Save
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddTodoPage;
