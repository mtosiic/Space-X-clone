export const initialRockets = {
  rockets: [],
  loading: false,
  error: null,
};

export const rocketsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ROCKETS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ROCKETS_SUCCESS":
      return {
        ...state,
        loading: false,
        rockets: action.payload,
      };
    case "FETCH_ROCKETS_FAILURE":
      return {
        ...state,
        loading: false,
        rockets: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
