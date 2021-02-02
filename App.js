import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import RootNavigator from "./screens/RootNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}

/*
  Day 1:
    Time Spent => 2hrs [1pm - 3pm]
    Tasks Completed => {
      1. Project and git repo setup
      2. Files and Directories Setup
      3. Core Dependencies Installed [navigation, icons, appearance for themeing etc]
      4. All screens basic structure and components created [Cities, Settings, Forecast, Weather Screens]
    }
  _____________________________________________________________________________________
  
  Day 2:
    Time Spent => xhrs [1:45pm - 2:40pm, 2:45pm - Xpm]
    Tasks Completed => {
      1. 
    }
  _____________________________________________________________________________________

  What's left to do?
   [x] Set up and configure navigation
   [x] Set up and configure navigation headers
   [x] Set up and configure redux/redux-thunk/async-storage
   [] Set up and hookup theming functionality
   [] Retrieve live weather data from API on weather screen
   [] Retrieve live data on Forecast screen
   [] Connect all Settings options as appropriate
   [] Cities "add" functionality
*/
