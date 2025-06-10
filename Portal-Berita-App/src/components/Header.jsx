import React from "react";
import Logo from "../assets/images/logo.jpg"

function Header() {
  return (
    <header class="navbar-container">
        <div class="logo">
            <img src={Logo} alt="logo portal berita" />
        </div>
        <nav class="nav-list">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header
