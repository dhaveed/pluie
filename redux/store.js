import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import uiReducer from "./uiReducer";
import weatherReducer from "./weatherReducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ['weather', "interface"]
}

const rootReducer = combineReducers({
//   weather: weatherReducer,
    weatherReducer: persistReducer(persistConfig, weatherReducer),
    ui: uiReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
