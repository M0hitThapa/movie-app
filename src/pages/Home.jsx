import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react'
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id:1, title:"john wick", release_date:"2020"},
        {id:2, title:"john kick", release_date:"2021"},
        {id:3, title:"john sick", release_date:"2022"},
        {id:4, title:"john bick", release_date:"2023"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")

    }
  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input type='text'
             placeholder='search for movies...'
              className='search-input'
               value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type='submit' className='search-button'>Search</button>
        </form>
        <div className='movies-grid'>
            {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} />))}
        </div>
    </div>
  )
}

export default Home