import React, { Component } from "react";
import Skycon from "./Skycon";

class Weather extends Component {
    render() {
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1>{this.props.city}, {this.props.state}</h1>
                    <p>{this.props.weather.temperature}&deg; <span>{this.props.weather.summary}</span></p>
                    <Skycon icon={this.props.weather.icon} />
                    <p>
                        <a href="#" className="btn btn-primary my-2">Main call to action</a>
                        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                </div>
            </section>
        );
    }
}

export default Weather;