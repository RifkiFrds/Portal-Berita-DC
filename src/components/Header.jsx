import React from "react";

function Header({ siteTitle }) {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1>{siteTitle}</h1>
    </header>
  );
}

export default Header;