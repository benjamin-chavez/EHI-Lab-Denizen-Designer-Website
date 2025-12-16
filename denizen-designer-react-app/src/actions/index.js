const ROOT_URL = '/api/v1/participants';

export const SET_PARTICIPANTS = 'SET_PARTICIPANTS';
export const SET_NAV_SECONDARY = 'SET_NAV_SECONDARY';
export const DENIZEN_TAB_SELECTED = 'DENIZEN_TAB_SELECTED';
export const HOPD_TAB_SELECTED = 'HOPD_TAB_SELECTED';
export const FETCH_PARTICIPANTS = 'FETCH_PARTICIPANTS';
export const FETCH_PARTICIPANT = 'FETCH_PARTICIPANT';
export const PARTICIPANT_CREATED = 'PARTICIPANT_CREATED';
export const DELETE_PARTICIPANT = 'DELETE_PARTICIPANT';
export const PARTICIPANT_UPDATED = 'PARTICIPANT_UPDATED';

export const FETCH_PARTICIPANTS_REQUEST = 'FETCH_PARTICIPANTS_REQUEST';
export const FETCH_PARTICIPANTS_SUCCESS = 'FETCH_PARTICIPANTS_SUCCESS';
export const FETCH_PARTICIPANTS_FAILURE = 'FETCH_PARTICIPANTS_FAILURE';

// QUOTE TYPES
// export const FETCH_QUOTES = 'FETCH_QUOTES';
export * from './quoteActions';
export * from './cityActions';
export * from './participantActions';

export function setParticipants() {
  // Import the hardcoded data
  const { participants } = require('../data/participants');
  
  return {
    type: SET_PARTICIPANTS,
    payload: participants,
  };
}

export function selectDenizenTab(denizenTab) {
  return {
    type: DENIZEN_TAB_SELECTED,
    payload: denizenTab,
  };
}

export function selectHopdTab(hopdTab) {
  return {
    type: HOPD_TAB_SELECTED,
    payload: hopdTab,
  };
}

export function fetchParticipant(id) {
  // Import the hardcoded data
  const { participants } = require('../data/participants');
  
  // Find the specific participant by id
  const participant = participants.find(p => p.id === parseInt(id));
  
  // Return a resolved promise with the participant data
  const promise = Promise.resolve(participant);

  return {
    type: FETCH_PARTICIPANT,
    payload: promise,
  };
}

export function fetchParticipants() {
  // Import the hardcoded data
  const { participants } = require('../data/participants');
  
  // Return a resolved promise with the hardcoded data
  const promise = Promise.resolve(participants);
  
  return {
    type: FETCH_PARTICIPANTS,
    payload: promise,
  };
}

export function createParticipant(body, callback) {
  const request = fetch(`${ROOT_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then(callback);

  return {
    type: PARTICIPANT_CREATED,
    payload: request,
  };
}

export function updateParticipant(id, body, callback) {
  const request = fetch(`${ROOT_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then(callback);

  return {
    type: PARTICIPANT_UPDATED,
    payload: request,
  };
}

export function deleteParticipant(id) {
  const promise = fetch(`${ROOT_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return {
    type: DELETE_PARTICIPANT,
    payload: promise,
  };
}
