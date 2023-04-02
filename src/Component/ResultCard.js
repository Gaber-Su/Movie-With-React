import React from 'react'
import { useMovieContext } from './Context/GlobalContext'
import  * as actions from "../Component/Context/ActionTypes"

export const ResultCard = ({movie}) => {

    const MoviesContext = useMovieContext()
    const storedMovie = MoviesContext.watchList.find((o)=> o.imdbID === movie.imdbID)
    const storedMovieWatched = MoviesContext.watched.find((o)=> o.imdbID === movie.imdbID)

    const watchListDisabled = storedMovie 
                                                ? true 
                                                : storedMovieWatched
                                                ? true : false
    const watchedDisabled = storedMovieWatched 
                                                ? true 
                                                : false
                                            

  return (
    <div className='result-card'>
    <div className='poster-wrapper'>
        {
            movie.Poster ? (
                <img src={movie.Poster} alt={movie.Title}></img>
            ): <div className='filter-poster'></div>
        }
    </div>
    <div className="info">
        <div className="header">
            <h3 className='title'>{movie.Title}</h3>
            {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : '-'}
        </div>

        <div className='controls'>
            <button disabled={watchListDisabled} onClick={()=>MoviesContext.MoviesDispath({type :actions.ADD_MOVIE_TO_WATCHLIST, payload : movie }) } className='btn'>Add To Watch List</button>
            <button disabled={watchedDisabled} onClick={()=>MoviesContext.MoviesDispath({type : actions.ADD_MOVIE_TO_WATCHED, payload : movie}) } className='btn'>Add To Watched</button>
        </div>
    
    </div>
</div>
  )
}
