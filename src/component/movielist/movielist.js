import React,{useState,useEffect} from "react"
import "./movielist.css"
import Card from "../card/card"
import { useParams } from "react-router-dom"
import { getDefaultNormalizer } from "@testing-library/react"

const MovieList = ()=>{
    const[movielist,setMovielist] = useState([])
    const{type} = useParams()

    useEffect(()=>{
     getData()
    },[])

    useEffect(()=>{
     getData()
    },[type])

    const getData = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).
        then(res => res.json())
        .then(data => setMovielist(data.results))
    }
    return (
       <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movielist.map(movie => (
                        <Card movie={movie}/>
                    ))
                }
            </div>
       </div>
    )

    
}

export default MovieList;