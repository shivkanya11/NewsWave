import React from 'react'
import './NewsCard.css'

function NewsCard({author, title, description, urlToImage, publishedAt, url, index }) {
    return (
        <div className='card' key={index}>
            <h3 className='news-title'>{title}</h3>
            <img src={urlToImage} className='news-img'/>
            <div className='flexCard'><span className='news-autor'>Author: {author}</span><span className='news-publish'>{publishedAt}</span></div>
            <p className='news-desc'>{description}</p>
            <a href={url} className='news-url' target='_blank'>Read More</a>
        </div>
    )
}

export default NewsCard