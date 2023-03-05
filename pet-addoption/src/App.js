import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import HomePage from "./views/HomePage";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Welcome To Pet Rescue and Adopt</h2>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
