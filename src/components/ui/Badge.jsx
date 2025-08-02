import React from "react";

function Badge({ children }) {
  return (
    <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
      {children}
    </div>
  );
}

export default Badge;
