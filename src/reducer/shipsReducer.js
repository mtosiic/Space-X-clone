export const initialShips = {
  ships: [],
  loading: false,
  error: null,
};

export const shipsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SHIPS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SHIPS_SUCCESS":
      return {
        ...state,
        loading: false,
        ships: action.payload,
      };
    case "FETCH_SHIPS_FAILURE":
      return {
        ...state,
        loading: false,
        ships: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
