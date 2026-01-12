// Static data - no database queries
import { participants } from '../data/participants';

export const FETCH_PARTICIPANTS_REQUEST = 'FETCH_PARTICIPANTS_REQUEST';
export const FETCH_PARTICIPANTS_SUCCESS = 'FETCH_PARTICIPANTS_SUCCESS';
export const FETCH_PARTICIPANTS_FAILURE = 'FETCH_PARTICIPANTS_FAILURE';

export const fetchParticipantsRequest = () => {
  return {
    type: FETCH_PARTICIPANTS_REQUEST,
  };
};

export const fetchParticipantsSuccess = (participants1) => {
  return {
    type: FETCH_PARTICIPANTS_SUCCESS,
    payload: participants1,
  };
};

export const fetchParticipantsFailure = (error) => {
  return {
    type: FETCH_PARTICIPANTS_FAILURE,
    payload: error,
  };
};

export const fetchParticipants1 = () => {
  return (dispatch) => {
    dispatch(fetchParticipantsRequest());
    // Use static data instead of API call
    setTimeout(() => {
      try {
        dispatch(fetchParticipantsSuccess(participants));
      } catch (error) {
        dispatch(fetchParticipantsFailure(error.message));
      }
    }, 100);
  };
};
