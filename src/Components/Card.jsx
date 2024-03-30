import React from "react";
import "./Card.css";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { state, dispatch } = useContextGlobal();

  const addFav = (item) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    let existeEnLS = false;
    state.favs.map((dentistas) => {
      if (JSON.stringify({ ...dentistas }) === JSON.stringify({ ...item }))
        existeEnLS = true;
    });

    if (existeEnLS) {
      dispatch({ type: "DELETE_FAV", payload: item.id });
      alert("Se borró de favoritos");
    } else {
      dispatch({ type: "ADD_FAV", payload: item });
      alert("Se agregró a favoritos");
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <img src="/images/doctor.jpg" alt="Descripción de la imagen" />                           
      <Link to={"/details/" + item.id}>                                           {/* Click en nombre/username/id para ir al detalle */}
        <div className="card-body">
          <h3 className="card-title">{item.name}</h3>
          <p className="card-subtitle">{item.username}</p>
          <p>ID: {item.id}</p>
        </div>
      </Link>

      <button onClick={() => addFav(item)} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
