import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("navbarHeader");
    if (window.scrollY > 50) {
      header.classList.add("header-dark"); // Cambia sfondo a nero e testo a bianco
    } else {
      header.classList.remove("header-dark"); // Ripristina colori originali
    }
  });

  return (
    <header
      className="position-fixed top-0 start-0 w-100"
      style={{ zIndex: 999 }}
      id="navbarHeader"
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-0">
        <div className="container-fluid">
          {/* BRAND (logo + testo) */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/images/logo.png"
              alt="logo CAI"
              style={{ maxHeight: "50px" }}
            />
            <span className="ms-2 text-white title">
              <strong> CLUB ALPINO ITALIANO </strong>
              <br />
              <small>Sezione Appiano del CAI A.A.</small>
            </span>
          </a>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-2 ">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home Page
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="https://www.caiappiano.family/"
                >
                  Cai Family
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/escursioni">
                  Escursioni 2025
                </Link>
              </li>
              {/*  <li className="nav-item">
                <Link className="nav-link text-white" to="/storia">
                  Storia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/collaboratori">
                  Accompagnatori & Collaboratori
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link text-white" to="/direttivo">
                  Direttivo
                </Link>
              </li>
              {/*  <li className="nav-item">
                <Link className="nav-link text-white" to="/documenti">
                  Documenti
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
