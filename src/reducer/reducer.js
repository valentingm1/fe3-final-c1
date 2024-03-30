export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      console.log("GETTING DATA");
      return {
        ...state,
        data: action.payload,
      };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "TOGGLE_THEME":
      return { ...state, theme: !state.theme};
    case "DELETE_FAV":
      return {
        ...state,
        favs: state.favs.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};
