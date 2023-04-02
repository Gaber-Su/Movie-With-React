import {createContext, useContext, useReducer,useEffect} from "react"


import {reducer} from "./reducer"

export const intialState = {
    watchList : localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [],
    watched : localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
}

export const GlobalContext = createContext(intialState)

const ContextProvider = ({children})=> {
    const [state, dispatch] = useReducer(reducer, intialState)
    useEffect(() => {
  localStorage.setItem("watchList", JSON.stringify(state.watchList))
  localStorage.setItem("watched", JSON.stringify(state.watched))
    
    }, [state])
    

    return (
        <GlobalContext.Provider value={{watchList : state.watchList, watched : state.watched,  MoviesDispath: dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider

export const useMovieContext = ()=> {
    return useContext(GlobalContext)
}