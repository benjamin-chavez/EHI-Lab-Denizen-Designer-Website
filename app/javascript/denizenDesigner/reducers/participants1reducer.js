import {
  FETCH_PARTICIPANTS_REQUEST,
  FETCH_PARTICIPANTS_SUCCESS,
  FETCH_PARTICIPANTS_FAILURE,
} from '../actions';

const initialState = {
  loading: false,
  participants1: [],
  error: '',
};

const participant1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARTICIPANTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PARTICIPANTS_SUCCESS:
      return {
        participants1: action.payload,
        error: '',
        loading: false,
      };
    case FETCH_PARTICIPANTS_FAILURE:
      return {
        loading: false,
        participants1: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default participant1Reducer;
