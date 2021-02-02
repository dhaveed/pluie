import { SET_THEME } from "./action-types";

const initialState = {
    theme: "light",
};

function interfaceReducer(state = initialState, action){
    switch(action.type){
        case SET_THEME:
            return {
                ...state,
                theme: action.payload
            };
        default:
            return state;
    }
};

export default interfaceReducer;