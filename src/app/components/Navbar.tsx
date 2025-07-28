"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { productos } from "@/lib/productos";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Detectar clic afuera para cerrar dropdown (importante en móvil)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Detectar tamaño pantalla para habilitar hover solo en desktop
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 992); // Bootstrap lg breakpoint
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg bg-white shadow"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container">
        <Link
          href="/"
          className="navbar-brand"
          style={{ color: "var(--foreground)" }}
          onClick={() => setIsOpen(false)}
        >
          <img src="/bassai-logo.png" alt="Bassai Logo" style={{ height: 60 }} />
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

            {/* Dropdown Productos */}
            <li
              className={`nav-item dropdown${dropdownOpen ? " show" : ""}`}
              ref={dropdownRef}
              onMouseEnter={() => {
                if (isDesktop) setDropdownOpen(true);
              }}
              onMouseLeave={() => {
                if (isDesktop) setDropdownOpen(false);
              }}
            >
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                aria-expanded={dropdownOpen}
                onClick={(e) => {
                  e.preventDefault();
                  if (!isDesktop) setDropdownOpen(!dropdownOpen);
                }}
                style={{ color: "var(--foreground)" }}
              >
                Productos
              </a>
              <ul
                className={`dropdown-menu dropdown-menu-end${dropdownOpen ? " show animate-dropdown" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                {productos.map((producto) => (
                  <li key={producto.slug}>
                    <Link
                      href={`/productos/${producto.slug}`}
                      className="dropdown-item"
                      onClick={() => {
                        setIsOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      {producto.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Otros links */}
            <li className="nav-item">
              <Link
                href="/sobre-nosotros"
                className="nav-link"
                style={{ color: "var(--foreground)" }}
                onClick={() => setIsOpen(false)}
              >
                Sobre Nosotros
              </Link>
            </li>

          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Animación simple para dropdown */
        .animate-dropdown {
          animation: fadeInDown 0.3s ease forwards;
          transform-origin: top center;
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
