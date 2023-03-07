import { Button, Link, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import Pets from "../components/pets/Pets";
import Signup from "../components/Signup";

export default function HomePage() {
  const [open, setOpen] = useState("");
  return (
    <div>
      <NavBar />
      <Header />
      <Button onClick={() => setOpen("Login")}>Login</Button>
      <Button onClick={() => setOpen("Signup")}>Signup</Button>
      <Modal open={open !== ""} onClose={() => setOpen("")}>
        <>
          {open === "Login" && <Login />}
          {open === "Signup" && <Signup />}
        </>
      </Modal>
      <Typography>This is pet rescue</Typography>
      <Link href="/search" variant="body1">
        Search Pet
      </Link>{" "}
      <Pets></Pets>
    </div>
  );
}
