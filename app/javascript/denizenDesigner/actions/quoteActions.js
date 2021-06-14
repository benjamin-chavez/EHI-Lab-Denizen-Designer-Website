import axios from 'axios';

export const FETCH_QUOTES_REQUEST = 'FETCH_QUOTES_REQUEST';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE';
export const QUOTE_CATEGORY_SELECTED = 'QUOTE_CATEGORY_SELECTED';

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

// The below funtion randomizes the quotes so that they do not populate in the order in which they were entered into the database.
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
      .get('/api/v1/quotes')
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

export function selectQuoteCategory(quoteCategory) {
  return {
    type: QUOTE_CATEGORY_SELECTED,
    payload: quoteCategory,
  };
}
