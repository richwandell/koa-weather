import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MainContainer from "./components/container/MainContainer"
import store from "./store/index";

ReactDOM.render(
    <Provider store={store}>
        <MainContainer />
    </Provider>,
    document.getElementById("react-container")
);
