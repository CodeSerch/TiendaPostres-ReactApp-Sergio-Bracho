import "./NavBar.css";
import { Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CardWidget from "../CartWidget";
import React from "react";


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#7D5A50'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          PostresOlavarria
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to={`/`} style={{textDecoration:"none", marginRight:"10px"}}>
                Inicio
              </Link>

            </li>
            <li className="nav-item">
            <Link to={`/products`} style={{textDecoration:"none", marginRight:"10px"}}>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/category/id`} style={{textDecoration:"none", marginRight:"10px"}}>
                Categoria 1
              </Link>
            </li>

            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Encargar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </ul>
          <CardWidget />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
