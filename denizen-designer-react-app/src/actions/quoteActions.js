import { quotes as quotesData } from '../data/quotes';

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

// The below function randomizes the quotes so that they do not populate in the order in which they were entered into the database.
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
    dispatch(fetchQuotesRequest());
    // Simulate async behavior with setTimeout
    setTimeout(() => {
      try {
        // Use hardcoded quotes data and shuffle them
        const quotes = shuffleArray([...quotesData]);
        dispatch(fetchQuotesSuccess(quotes));
      } catch (error) {
        dispatch(fetchQuotesFailure(error.message));
      }
    }, 100);
  };
};

export function selectQuoteCategory(quoteCategory) {
  return {
    type: QUOTE_CATEGORY_SELECTED,
    payload: quoteCategory,
  };
}
