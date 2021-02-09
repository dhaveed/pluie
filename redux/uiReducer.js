import { SET_LOADING, SET_THEME, TOGGLE_MODAL } from "./action-types";

const initialState = {
  theme: "light",
  loading: false,
  unit: "metric",
  modalVisible: false,
};

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TOGGLE_MODAL:
        return {
            ...state,
            modalVisible: action.payload,
        }
    default:
      return state;
  }
}

export default uiReducer;
