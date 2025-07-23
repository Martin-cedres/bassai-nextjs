"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg  bg-white shadow" style={{ backgroundColor: "var(--background)" }}>
      <div className="container">
        <Link href="/" className="navbar-brand" style={{ color: "var(--foreground)" }}>
          <img
            src="/bassai-logo.png" // ← Cambiá esto por la ruta real de tu logo
            alt="Bassai Logo"
            style={{ height: "60px" }} // ← Ajustá el tamaño a gusto
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
          style={{ borderColor: "var(--foreground)", color: "var(--foreground)" }}
        >
          &#9776;
        </button>

        <div className={`collapse navbar-collapse${isOpen ? " show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link href="/productos" className="nav-link" style={{ color: "var(--foreground)" }} onClick={() => setIsOpen(false)}>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/sobre-nosotros" className="nav-link" style={{ color: "var(--foreground)" }} onClick={() => setIsOpen(false)}>
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
