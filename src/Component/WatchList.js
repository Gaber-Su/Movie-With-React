import React from 'react'
import { useMovieContext } from './Context/GlobalContext'
import { MovieCard } from './MovieCard'


export const WatchList = () => {
  const MovieContext = useMovieContext()

  return (
    <div className="movie-page">
    <div className="container">
      <div className="header">
      <h1 className='heading'>My Watchlist</h1>
    <span className='count-pill'>
      {MovieContext.watchList.length} {MovieContext.watchList.length === 1 ? 'Movie':
    'Movies' }</span>
  </div>
      {MovieContext.watchList.length > 0 ? 
      (<div className="movie-grid">
         {MovieContext.watchList.map((movie)=>(
            <MovieCard key={movie.imdbID} movie={movie} type='watchlist'/>
          ))}
     </div>):(<h2  className='no-movies'>No movies in your list, add some!</h2>)
    
    }
    </div>
  </div>
  )
}
