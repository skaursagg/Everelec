"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-yellow-500">
          <img src="/logo.png" alt="Everelec Logo" className="h-18 inline-block w-45" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="space-x-6 hidden md:flex">
          <span className="text-yellow-500 font-semibold"> 24x7 Service</span>
          <Link href="/" className="hover:text-yellow-500">Home</Link>
          <Link href="/about" className="hover:text-yellow-500">About</Link>
          <Link href="/services" className="hover:text-yellow-500">Services</Link>
          <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            About
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block">
            Services
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
