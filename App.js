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
    Time Spent => 2hrs 43mins [1:45pm - 2:40pm, 2:45pm - 3:45pm, 4:07pm - 5:00pm]
    Tasks Completed => {
      1. Set up and configure navigation
      2. Set up and configure navigation headers
      3. Set up and hookup theming functionality
    }
  _____________________________________________________________________________________

  What's left to do?
   [] Retrieve live weather data from API on weather screen
   [] Retrieve live data on Forecast screen
   [] Connect all Settings options as appropriate
   [] Cities "add" functionality
*/
