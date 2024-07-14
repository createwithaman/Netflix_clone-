import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import cardsData from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {

  const[apiData,setApiData]=useState([])
  
  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjQzOGQwMWI4N2NjYWRkYmVmMTZmYmEyZmYyM2M0MSIsIm5iZiI6MTcyMDk0MTY2My42MjIxNiwic3ViIjoiNjY5MzdiNGViMDU0M2Y5ZGY0ODhjZTk4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gz058l7cQnMYHGZdUrupW7Vb8YMuG_Q8NcY0P1y45g4'
    }
  };
  
  
  const handleWheel =(event)=>{
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])

  return (
    <div className='titleCards'>
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((item,index)=>{
          return <Link to={`/player/${item.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} alt="" />
              <p>{item.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards