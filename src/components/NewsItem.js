import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://img.jakpost.net/c/2021/03/22/2021_03_22_111551_1616400460._large.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
