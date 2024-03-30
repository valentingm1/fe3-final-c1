import { createContext, useEffect, useReducer, useContext } from "react";
import { reducer } from "../../reducer/reducer";
import { getDentistas } from "../../api/getData";

export const ContextGlobal = createContext();

const dentistasFav = JSON.parse(localStorage.getItem("favs"));

export const initialState = {
  theme: false,
  data: [],
  favs: dentistasFav || [],
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await getDentistas();
        dispatch({ type: "GET_DATA", payload: userData });
      } catch (error) {
        console.error("Error en global.context.jsx", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  let data = { state, dispatch };
  return (
    <ContextGlobal.Provider value={data}>{children}</ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
