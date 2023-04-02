import React from 'react'
import { useMovieContext } from './Context/GlobalContext'
import * as actions from "./Context/ActionTypes"


export const MovieControls = ({movie, type}) => {
    const {MoviesDispath} =      useMovieContext()
  return (
    <div className='inner-card-controls'>
        {type === 'watchlist' && (
            <>
            <button onClick={()=> MoviesDispath({type : actions.ADD_MOVIE_TO_WATCHED, payload :movie })}  className='ctrl-btn'>
            <i className="fa-solid fa-eye"></i>
            </button>
            <button onClick={()=> MoviesDispath({type : actions.REMOVE_MOVIE_FROM_WATCHLIST, payload : movie.imdbID})} className='ctrl-btn'>
            <i className='fa-fw fa fa-times' />
            </button>
            </>
        )}
        {type === 'watched' && (
            <>
            <button onClick={()=> MoviesDispath({type : actions.MOVE_TO_WATCHLIST, payload :movie })} className='ctrl-btn'>
            <i className="fa-solid fa-eye-slash"></i>
            </button>
            <button onClick={()=> MoviesDispath({type : actions.REMOVE_FROM_WATCHED, payload :movie.imdbID })} className='ctrl-btn'>
            <i className='fa-fw fa fa-times' />
            </button>
            </>
        )}
    </div>
  )
}
