import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  return (
    <nav className={state.theme ? "dark-navbar" : "navbar"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <img src="/images/DH.png" alt="" />
      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button
          className="button-dark"
          onClick={() => dispatch({ type: "TOGGLE_THEME"})}
        >
          Change theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
