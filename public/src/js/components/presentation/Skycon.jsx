import React, { Component } from "react";

class Skycon extends Component {

    constructor(props) {
        super(props);
        this.skycons = new Skycons({"color": "pink"});
        this.elementId = String(Math.random() * 10000).replace(".", "");
    }

    componentDidMount() {
        this.skycons.add(document.getElementById(this.elementId), this.props.icon);
        this.skycons.play();
    }

    componentWillUnmount() {
        this.skycons.remove(this.elementId);
    }

    render() {
        return (
            <canvas id={this.elementId} width={128} height={128}/>
        );
    }
}

export default Skycon;