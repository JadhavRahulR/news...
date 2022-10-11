import React from 'react';


const NewsItem = (props) => {

    const { title, description, imageurl, newsurl } = props;
    return (
        <>
            
                   
                        <div className="card" style={{width:" 18rem"}}>
                            <img src={imageurl} className="card-img-top" alt="failed to load image" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <a href={newsurl} className="btn btn-primary">see More</a>
                            </div>
                        </div>
                 
        </>
    )
}

export default NewsItem;