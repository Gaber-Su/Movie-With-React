import React from 'react'
import { useMovieContext } from './Context/GlobalContext'
import { MovieCard } from './MovieCard'


export const Watched = () => {
  const MovieContext = useMovieContext()

  return (
    <div className="movie-page">
    <div className="container">
      <div className="header">
      <h1 className='heading'>My Watched</h1>
    <span className='count-pill'>
      {MovieContext.watched.length} {MovieContext.watched.length === 1 ? 'Movie':
    'Movies' }</span>
  </div>
      {MovieContext.watched.length > 0 ? 
      (<div className="movie-grid">
         {MovieContext.watched.map((movie)=>(
            <MovieCard key={movie.imdbID} movie={movie} type='watched'/>
          ))}
     </div>):(<h2  className='no-movies'>No movies in your list, add some!</h2>)
    
    }
    </div>
  </div>
  )
}
