import { SET_LOADING, SET_THEME } from "./action-types";

const initialState = {
    theme: "light",
    loading: false,
    unit: "metric"
};

function uiReducer(state = initialState, action){
    switch(action.type){
        case SET_THEME:
            return {
                ...state,
                theme: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
};

export default uiReducer;