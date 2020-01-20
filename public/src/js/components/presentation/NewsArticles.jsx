import React, { Component } from "react";
import moment from "moment";

class NewsArticles extends Component {
    render() {
        const articles = this.props.newsArticles.map((article, i) => {
            const date = moment(article.publishedAt).format("MMM Do YY");
            const imageSrc = article.urlToImage == null ?
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16fc47ac090%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16fc47ac090%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                : article.urlToImage;
            const imageDataSrc = article.urlToImage == null ?
                "holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                : article.urlToImage;
            return (
                <div className={"col-md-4 d-flex"}>
                    <div className="card mb-4 box-shadow">
                        <a href={article.url} target="_blank">
                            <img className="card-img-top"
                                 data-src={imageDataSrc}
                                 alt="Thumbnail [100%x225]"
                                 style={{height: "225px", width: "100%", display: "block"}}
                                 src={imageSrc}
                                 data-holder-rendered="true" />
                        </a>
                        <div className="card-body flex-fill">
                            <p className="card-text">{article.title}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <a href={article.url} target="_blank">
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                        </button>
                                    </a>
                                </div>
                                <small className="text-muted">{date}</small>
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