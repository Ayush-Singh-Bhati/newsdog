import React from 'react'

const Newsitem = (props) => {

    let {title, description, imgUrl, newsUrl,author, date,source} = props;
    return (
      <div>
        <div className="card my-4" style={{backgroundColor:"#F3C07B"}}>
          <img src={! imgUrl ?"https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
          <footer className="blockquote-footer"> <cite title="Source Title">Source "{source}"</cite></footer>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitem