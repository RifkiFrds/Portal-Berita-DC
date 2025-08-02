import React from "react";

function Card({ children }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {children}
    </div>
  );
}

export default Card;
