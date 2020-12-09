import { FETCH_QUOTES } from "../actions";

const quoteReducer = (state = [], action) => {
  // TODO: handle actions
  switch (action.type) {
    case FETCH_QUOTES:
      return action.payload;
    default:
      return state;
  }
};

export default quoteReducer;
