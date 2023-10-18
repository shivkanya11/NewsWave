import React, { useEffect, useState } from 'react'
// import Navbar from '../component/Navbar/Navbar'
// import Footer from '../component/Footer/Footer'
import axios from 'axios'
import './Home.css'
import NewsCard from './../component/NewsCard/NewsCard'

export default function Home() {
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('solapur')

    const loadNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2023-10-16&to=2023-09-16&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
            setNews(response.data.articles)
        }
        catch (error) {
            <h1>error</h1>
            console.log(error)
        }

    }

    useEffect(() => {
        loadNews();
    }, [])

    useEffect(() => {
        loadNews()
    }, [query])

    return (
        <div>
            <h1 className='page-head'>📰News App</h1>

            <input type='text'
                value={query}
                className='search-box'
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
            />

            <div className='newsRow'>
                {
                    news.map((newsArtical, index) => {
                        const { author, title, description, urlToImage, publishedAt, url } = newsArtical
                        return (
                            <NewsCard author={author} title={title} description={description} urlToImage={urlToImage} publishedAt={publishedAt} url={url} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}