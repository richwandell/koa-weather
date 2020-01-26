import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../presentation/App";
import { changeState, setStateData } from "../../actions/"

const mapStateToProps = state => {
    return {
        city: state.rootReducer.city,
        state: state.rootReducer.state,
        weather: state.rootReducer.weather,
        newsArticles: state.rootReducer.newsArticles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setStateData: (stateData) => {
            dispatch(setStateData(stateData));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);