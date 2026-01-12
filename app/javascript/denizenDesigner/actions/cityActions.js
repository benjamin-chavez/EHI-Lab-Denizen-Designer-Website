// Static data - no database queries
import { participants } from '../data/participants';

export const FETCH_CITIES_REQUEST = 'FETCH_CITIES_REQUEST';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';

export const fetchCitiesRequest = () => {
  return {
    type: FETCH_CITIES_REQUEST,
  };
};

export const fetchCitiesSuccess = (cities) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: cities,
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
    // Use static data instead of API call
    setTimeout(() => {
      try {
        dispatch(fetchCitiesSuccess(participants));
      } catch (error) {
        dispatch(fetchCitiesFailure(error.message));
      }
    }, 100);
  };
};
