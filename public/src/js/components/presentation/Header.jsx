import React, { Component } from "react";

class Header extends Component {

    constructor(props) {
        super(props);
        this.inputBox = React.createRef();
    }


    submitForm(event) {
        event.preventDefault();
        window.location.href = `/at/${this.inputBox.current.value}`
    }

    render() {
        return (
            <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">Add some information about the album below, the author, or any
                                    other background context. Make it a few sentences long so folks can pick up some
                                    informative tidbits. Then, link them off to some social networking sites or contact
                                    information.</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                                    <li><a href="#" className="text-white">Email me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between">
                        <form
                              id={"navbarForm"}
                              onSubmit={(event) => this.submitForm(event)}>
                            <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"/>
                                <input ref={this.inputBox} className="form-control" placeholder={"Show me the weather in... City, Zip, or Place"}
                                   aria-label="Location Search" role="textbox"  type="text" />
                            </div>
                        </form>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
                                aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;