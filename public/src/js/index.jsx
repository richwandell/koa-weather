import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Container from "./components/container/"
import store from "./store/index";
import '../scss/style.scss';
import { Router, Link } from "@reach/router"

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('../ServiceWorker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

            ReactDOM.render(
                <Provider store={store}>
                    <Router>
                        <Container path="/" />
                        <Container path="at/:_city" />
                    </Router>
                </Provider>,
                document.getElementById("react-container")
            );
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}


