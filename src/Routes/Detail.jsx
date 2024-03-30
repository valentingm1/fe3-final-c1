import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDentistaById } from "../api/getData";
import "./Detail.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [dentistaSelected, setDentistaSelected] = useState({});
  /*  const {favs, setFavs, setCart} = useProductStates() */
  useEffect(() => {
    const getData = async () => {
      let dentistaData = await getDentistaById(id);
      setDentistaSelected(dentistaData);
    };
    getData();
  }, [id]);

  console.log(dentistaSelected);
  return (
    <>
      {dentistaSelected.id ? (
        <div className="container">
          <h1>Detalles del dentista</h1>
          <div>
            <img className="photo" src="/images/doctor.jpg" alt="" />
            <h1>Nombre: {dentistaSelected.name}</h1>
            <h1>Email: {dentistaSelected.email}</h1>
            <h1>Teléfono: {dentistaSelected.phone}</h1>
            <h1>Website: {dentistaSelected.website}</h1>
          </div>
        </div>
      ) : (
        <h1>No se encontró ningún dentista</h1>
      )}
    </>
  );
};

export default Detail;
