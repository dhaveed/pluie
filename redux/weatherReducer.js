import { GET_WEATHER } from "./action-types"

const initialState = {
    weather: [],
};

function weatherReducer(state = initialState, action){
    switch(action.type){
        case GET_WEATHER:
            return {
                ...state,
                weather: action.payload
            };
        default:
            return state;
    }
}

export default weatherReducer;