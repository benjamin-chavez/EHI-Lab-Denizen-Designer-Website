import { SET_NAV_SECONDARY } from '../actions';

const navSecondaryReducer = (state, action) => {
  // Compute and return the new state
  if (state == null) {
    return [];
  }
  switch (action.type) {
    case SET_NAV_SECONDARY:
      return action.payload;
    default:
      return state;
  }
};

export default navSecondaryReducer;
