import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import uiReducer from "./uiReducer";
import weatherReducer from "./weatherReducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    // whitelist: ["ui"]
}

const rootReducer = combineReducers({
    weather: weatherReducer,
    ui: uiReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
