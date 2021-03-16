import axios from 'axios';

export const FETCH_QUOTES_REQUEST = 'FETCH_QUOTES_REQUEST';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE';

export const fetchQuotesRequest = () => {
  return {
    type: FETCH_QUOTES_REQUEST,
  };
};

export const fetchQuotesSuccess = (quotes) => {
  return {
    type: FETCH_QUOTES_SUCCESS,
    payload: quotes,
  };
};

export const fetchQuotesFailure = (error) => {
  return {
    type: FETCH_QUOTES_FAILURE,
    payload: error,
  };
};

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const fetchQuotes = () => {
  return (dispatch) => {
    dispatch(fetchQuotesRequest);
    axios
      .get(
        'https://raw.githubusercontent.com/bmchavez/EHI-Lab--Denizen-Designer-Website/main/app/javascript/quotes.json'
      )
      .then((response) => {
        const quotes = shuffleArray(response.data);
        dispatch(fetchQuotesSuccess(quotes));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchQuotesFailure(errorMsg));
      });
  };
};
