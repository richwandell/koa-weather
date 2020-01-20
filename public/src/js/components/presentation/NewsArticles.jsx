import React, { Component } from "react";

class NewsArticles extends Component {
    render() {
        let articles = this.props.newsArticles.map((article, i) => {
            return (
                <div className={"col-md-4 d-flex"}>
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top"
                             data-src={article.urlToImage}
                             alt="Thumbnail [100%x225]"
                             style={{height: "225px", width: "100%", display: "block"}}
                             src={article.urlToImage}
                             data-holder-rendered="true" />
                        <div className="card-body flex-fill">
                            <p className="card-text">{article.title}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                    </button>
                                    <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                    </button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {articles}
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsArticles;