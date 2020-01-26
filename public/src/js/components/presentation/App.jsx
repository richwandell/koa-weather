import React, { Component } from "react";
import Header from "../presentation/Header";
import Main from "../presentation/Main";

class App extends Component {

    componentDidMount() {
        if (typeof this.props._city === "undefined") {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                fetch(`../getCityName/${lat},${lng}`, {
                    method: 'GET',
                    cache: 'force-cache',
                    headers: {
                        'Content-Type': 'application/vnd.api+json'
                    }
                }).then((response) => {
                    response.json()
                        .then((data) => {
                            const att = data.data.attributes;
                            if (
                                typeof att.name !== "undefined"
                                && att.name !== ""
                                && typeof att.state !== "undefined"
                                && att.state !== ""
                            ) {
                                window.location.href = `/at/${att.name},${att.state}`;
                            }
                        });
                });
            });
        } else {
            fetch(`../get/${this.props._city}`, {
                method: 'GET',
                cache: 'force-cache',
                headers: {
                    'Content-Type': 'application/vnd.api+json'
                }
            }).then((response) => {
                response.json()
                    .then((data) => {
                        this.props.setStateData(data);
                    });
            });
        }
    }

    render() {
        return (
            <div>
                <Header/>
                {typeof this.props.weather !== "undefined" ?
                    <Main
                        city={this.props.city}
                        state={this.props.state}
                        weather={this.props.weather}
                        newsArticles={this.props.newsArticles}/>
                    : ""}
            </div>
        )
    }
}

export default App;