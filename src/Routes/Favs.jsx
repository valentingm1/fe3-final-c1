import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();
  const darkmode = state.theme ? "dark" : "";
  return (
    <>
      <h1 className={`${darkmode}`}>Dentists Favs</h1>
      <div className={`card-grid ${darkmode}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((dentista) => {
          return <Card item={dentista} key={dentista.id} />;
        })}
      </div>
    </>
  );
};

export default Favs;
