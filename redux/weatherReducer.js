import { ADD_WEATHER_TO_COLLECTION, GET_WEATHER } from "./action-types"

const initialState = {
    weather: [],
    primary: {},
};

function weatherReducer(state = initialState, action){
    switch(action.type){
        case GET_WEATHER:
            return {
                ...state,
                primary: action.payload,
                weather: [
                    ...state.weather,
                    action.payload
                ]
            }
        case ADD_WEATHER_TO_COLLECTION:
            return {
                ...state,
                weather: [...state.weather, action.payload]
            }
        default:
            return state;
    }
}

export default weatherReducer;