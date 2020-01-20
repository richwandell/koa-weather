import React, { Component } from "react";
import Skycon from "../presentation/Skycon";
import Header from "../presentation/Header";
import Main from "../presentation/Main";

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = window.applicationVariables;
    }

    render() {
        return (
            <div>
                <Header />
                <Main
                    city={this.state.city}
                    state={this.state.state}
                    weather={this.state.weather}
                    newsArticles={this.state.newsArticles} />
            </div>
        )
    }
}

export default MainContainer;