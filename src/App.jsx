import React from 'react'
import MovieCard from './components/MovieCard'
import "./css/App.css"
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
//   const movieNumber = 2;
 
//   return (
//    <div>
//     {movieNumber === 1 ? (<MovieCard movie={{title:"Good Movie", release_date:"2024"}} />)
//     :(
// <MovieCard movie={{title:"Good Modvie", release_date:"20224"}} />
//     )}
    
//    </div>
 // )
 return (
<MovieProvider>
    <Navbar />
   <main>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/favourites' element={<Favorites />} />

  </Routes>
 </main>
</MovieProvider>
 )
}

export default App