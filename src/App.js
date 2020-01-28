import React from "react";
import "./App.css";

import { Provider } from "react-redux";

import MainComponent from "./components/MainComponent";
import { configureStore } from "./redux/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <h2>Music Player</h2>
      <MainComponent />
    </Provider>
  );
}

export default App;
