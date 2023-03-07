import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="navbar">
      <h2 className="navbar__logo">AdoptaPET</h2>
      <div className="navbar__links">
        {isLoggedIn && (
          <Link className="navbar__link" to="/mypets">
            My Pets
          </Link>
        )}
        {isLoggedIn && (
          <Link className="navbar__link" to="/profile">
            username
          </Link>
        )}
      </div>
      <div className="navbar__profile">
        {!isLoggedIn && (
          <Link className="navbar__link navbar__link-btn" to="/login">
            Login
          </Link>
        )}
        {!isLoggedIn && (
          <Link className="navbar__link navbar__link-btn" to="/signup">
            Sign up
          </Link>
        )}
      </div>
    </div>
  );
}
