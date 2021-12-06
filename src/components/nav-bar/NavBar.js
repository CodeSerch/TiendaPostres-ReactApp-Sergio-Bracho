import "./NavBar.css";
import { Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CardWidget from "../CartWidget";
import React, { useState } from "react";
import SignUp from "../signup";

export const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#7D5A50', marginRight: "auto", marginLeft: "auto" }}>
      <a className="navbar-brand" href="/">
        PostresOlavarria
      </a>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="navbarToggler"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={`/`} style={{ textDecoration: "none", marginRight: "10px" }}>
                Inicio
              </Link>

            </li>
            <li className="nav-item">
              <Link to={`/products`} style={{ textDecoration: "none", marginRight: "10px" }}>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/orders`} style={{ textDecoration: "none", marginRight: "10px" }}>
                Ordenes
              </Link>
            </li>

            <div className="dropdown" style={{ marginRight: "10px" }}>
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="/category/1">
                    Categoria 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/category/2">
                    Categoria 2
                  </a>
                </li>
              </ul>
            </div>
          </ul>
          <SignUp />
          <Link to={`/cart`} style={{ textDecoration: "none", marginRight: "10px" }}>
            <CardWidget />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
