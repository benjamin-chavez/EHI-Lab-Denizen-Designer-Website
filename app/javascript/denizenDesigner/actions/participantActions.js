import axios from 'axios';

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
    dispatch(fetchParticipantsRequest);
    axios
      .get(
        // 'https://raw.githubusercontent.com/bmchavez/EHI-Lab--Denizen-Designer-Website/main/app/javascript/participants.json'
        '/api/v1/participants'
      )
      .then((response) => {
        const participants1 = response.data;
        dispatch(fetchParticipantsSuccess(participants1));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchParticipantsFailure(errorMsg));
      });
  };
};
