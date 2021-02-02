import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import interfaceReducer from "./interfaceReducer";
import weatherReducer from "./weatherReducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ['weather', "interface"]
}

const rootReducer = combineReducers({
//   weather: weatherReducer,
    weatherReducer: persistReducer(persistConfig, weatherReducer),
    interface: interfaceReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
