import { SET_THEME } from "./action-types";

const initialState = {
    theme: "dark",
};

function uiReducer(state = initialState, action){
    switch(action.type){
        case SET_THEME:
            console.log("Changing theme to " + action.payload)
            return {
                ...state,
                theme: action.payload
            };
        default:
            return state;
    }
};

export default uiReducer;