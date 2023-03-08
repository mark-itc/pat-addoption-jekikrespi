import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";
import PetDetails from "./views/PetDetails";
import MyPets from "./views/MyPets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/searchpet",
    element: <SearchPage />,
  },
  {
    path: "/petdetails/:id",
    element: <PetDetails />,
  },
  {
    path: "/mypets",
    element: <MyPets />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
