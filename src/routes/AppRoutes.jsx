import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import TodoListPage from "../pages/ToDoList";
import AddTodoPage from "../pages/AddTodoPage";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = ["/login", "/register", "/dashboard", "/todolist", "/add", "/profile", "/settings"];
  const isHidden = hideNavbar.includes(location.pathname);

  return (
    <>
      {!isHidden && <Navbar />}
      {children}
    </>
  );
};

const AppRoutes = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todolist" element={<TodoListPage todos={todos} />} />
        <Route path="/add" element={<AddTodoPage onAdd={handleAddTodo} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
