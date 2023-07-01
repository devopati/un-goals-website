import React from "react";
import { WebRoutes as Routes } from "./Routes/Routes";
import { Store } from "./Redux/Store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <>
      <Provider store={Store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
