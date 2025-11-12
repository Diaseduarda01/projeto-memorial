import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-center gap-12 text-sm font-medium">
        <button className="hover:opacity-80 transition">Home</button>
        <button className="hover:opacity-80 transition">História</button>
        <button className="hover:opacity-80 transition">Memórias</button>
      </div>
    </nav>
  );
};

export default Navbar;