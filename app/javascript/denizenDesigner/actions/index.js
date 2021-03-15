const ROOT_URL =
  'https://raw.githubusercontent.com/bmchavez/EHI-Lab--Denizen-Designer-Website/main/app/javascript/participants.json';

export const SET_PARTICIPANTS = 'SET_PARTICIPANTS';
export const SET_NAV_SECONDARY = 'SET_NAV_SECONDARY';
export const DENIZEN_TAB_SELECTED = 'DENIZEN_TAB_SELECTED';
export const HOPD_TAB_SELECTED = 'HOPD_TAB_SELECTED';
export const FETCH_PARTICIPANTS = 'FETCH_PARTICIPANTS';
export const FETCH_PARTICIPANT = 'FETCH_PARTICIPANT';

export const FETCH_QUOTES = 'FETCH_QUOTES';

export function setParticipants() {
  // switch this url to local route once in rails
  return fetch(`${ROOT_URL}`)
    .then((response) => response.json())
    .then((data) => {
      return {
        type: SET_PARTICIPANTS,
        payload: data,
      };
    });
}

export function setNavSecondary() {
  return {
    type: SET_NAV_SECONDARY,
    payload: '???',
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
  const promise = fetch(`${ROOT_URL}`).then((response) => response.json());

  return {
    type: FETCH_PARTICIPANT,
    payload: promise,
  };
}

export function fetchParticipants() {
  const promise = fetch(`${ROOT_URL}`).then((response) => response.json());
  return {
    type: FETCH_PARTICIPANTS,
    payload: promise,
  };
}

// QUOTES
export async function fetchQuotes() {
  const promise = await fetch(
    'https://raw.githubusercontent.com/bmchavez/EHI-Lab--Denizen-Designer-Website/main/app/javascript/quotes.json'
  ).then((response) => response.json());
  return {
    type: FETCH_QUOTES,
    payload: promise,
  };
}

// export const fetchQuoteDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: FETCH_QUOTE_REQUEST });

//     // const { data } = await axios.get (${id})

//     dispatch({
//       type:
//     })
//   }
// }
