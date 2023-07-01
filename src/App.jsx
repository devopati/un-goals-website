import React from "react";
import { WebRoutes as Routes } from "./Routes/Routes";
import { Store } from "./Redux/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Provider store={Store}>
        <ToastContainer />
        <Routes />
      </Provider>
    </>
  );
};

export default App;
