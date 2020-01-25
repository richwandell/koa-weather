import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../presentation/Header";
import Main from "../presentation/Main";

class MainContainer extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main
                    city={this.props.city}
                    state={this.props.state}
                    weather={this.props.weather}
                    newsArticles={this.props.newsArticles} />
            </div>
        )
    }
}

const select = state => {
    return {
        city: state.rootReducer.city,
        state: state.rootReducer.state,
        weather: state.rootReducer.weather,
        newsArticles: state.rootReducer.newsArticles
    };
};

export default connect(select)(MainContainer);