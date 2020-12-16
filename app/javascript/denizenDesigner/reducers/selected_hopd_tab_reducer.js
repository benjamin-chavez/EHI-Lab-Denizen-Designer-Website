import { HOPD_TAB_SELECTED } from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case HOPD_TAB_SELECTED: {
      // console.log("test");
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
