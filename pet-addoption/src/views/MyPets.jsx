import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import PetsList from "../components/PetsList";
import StatusFilter from "../components/StatusFilter";
import "./MyPets.css";

function MyPets() {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <NavBar />
      <StatusFilter />
      <PetsList />
    </div>
  );
}

export default MyPets;
