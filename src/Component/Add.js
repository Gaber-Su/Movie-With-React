import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { ResultCard } from './ResultCard'

export const Add = () => {
      const [movies, setMovies] = useState([])  
      const [searcValue, setSearchValue] = useState("")
      
      useEffect(()=> {
      axios.get(`https://www.omdbapi.com/?s=${searcValue}&apikey=ab904024`)
      .then((response)=> {
        if (response.data.Search) {
          setMovies(response.data.Search)
          console.log(movies);
        }
      })
      .catch((error) => console.log('In-valid search Value') )
      }, [searcValue])

  return (
    <div className='add-page'>
    <div className="container">
      <div className="add-content">
        <div className="input-wrapper">
            <input  type="text" placeholder='Search For A Movie' value={searcValue} onChange={(e)=> setSearchValue(e.target.value)} />
        
        </div>
   {movies.length > 0 &&   <ul className='results'>
    {movies.map((movie)=><li key={movie.imdbID}>{<ResultCard movie={movie}/>}</li> )}
    </ul>}
      </div>
    </div>
  </div>
  )
}
