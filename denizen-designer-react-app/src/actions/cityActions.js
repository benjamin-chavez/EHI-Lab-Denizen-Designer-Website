import { participants } from '../data/participants';

export const FETCH_CITIES_REQUEST = 'FETCH_CITIES_REQUEST';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';

export const fetchCitiesRequest = () => {
  return {
    type: FETCH_CITIES_REQUEST,
  };
};

export const fetchCitiesSuccess = (quotes) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: quotes,
  };
};

export const fetchCitiesFailure = (error) => {
  return {
    type: FETCH_CITIES_FAILURE,
    payload: error,
  };
};

export const fetchCities = () => {
  return (dispatch) => {
    dispatch(fetchCitiesRequest());
    // Simulate async behavior with setTimeout
    setTimeout(() => {
      try {
        // Use hardcoded participant data (same as participants)
        dispatch(fetchCitiesSuccess(participants));
      } catch (error) {
        dispatch(fetchCitiesFailure(error.message));
      }
    }, 100);
  };
};
