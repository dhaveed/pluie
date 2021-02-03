import { WEATHER_BASE_URL } from "../config"
import { GET_WEATHER, SET_LOADING } from "./action-types";

const setLoading = (status) => {
    return {
        type: SET_LOADING,
        payload: status
    }
}

// Get weather with user coords
export const getWeather = (coords) => async dispatch =>  {
    let uri = WEATHER_BASE_URL + "&lat=" + coords.lat + "&lon=" + coords.long;
    // console.log(uri);
    dispatch(setLoading(true));
    
    try {
        let req = await fetch(uri, { method: "GET" });
        let res = await req.json();
        // console.log(res);
        dispatch(setLoading(false));
        if(res.cod === 200){
            dispatch({
                type: GET_WEATHER,
                payload: res
            });
        }
    } catch (error) {
        
    }
}