//import { Fragment } from "react";
import React from "react";
import "../styles/styles.scss";
import 'fontsource-roboto';
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import store from "../redux/store"


const App = () => (
  <Provider store={store}>
    <AppRouter/>
    
  </Provider>
)

export default App;
