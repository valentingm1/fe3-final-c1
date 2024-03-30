import { useContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContextGlobal();
  const darkmode = state.theme ? "dark" : "";
  return (
    <main className={`${darkmode}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((dentista) => {
          return <Card item={dentista} key={dentista.id} />;
        })}
      </div>
    </main>
  );
};

export default Home;
