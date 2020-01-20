import React, { Component } from "react";
import NewsArticles from "./NewsArticles";
import Weather from "./Weather";

class Main extends Component {
    render() {
        return (
            <main role="main">
                <Weather weather={this.props.weather} city={this.props.city} state={this.props.state} />
                <NewsArticles newsArticles={this.props.newsArticles} />
            </main>
        );
    }
}

export default Main;