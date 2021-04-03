import {
  SET_PARTICIPANTS,
  FETCH_PARTICIPANTS,
  FETCH_PARTICIPANT,
  PARTICIPANT_CREATED,
  DELETE_PARTICIPANT,
} from '../actions';

const participantReducer = (state, action) => {
  // Compute and returen the new state
  if (state == undefined) {
    return [];
  }

  // Handle Actions
  switch (action.type) {
    case SET_PARTICIPANTS:
      return action.payload;
    case FETCH_PARTICIPANTS:
      return action.payload;
    case FETCH_PARTICIPANT:
      return action.payload;
    // case PARTICIPANT_CREATED:
    // // TODO: push it to the array of participants
    //   return state;
    case DELETE_PARTICIPANT:
      // return action.payload;
      return state.filter((participant) => participant.id !== action.id);
    default:
      return state;
  }
};

export default participantReducer;
