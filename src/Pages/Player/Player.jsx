import React, { useEffect, useState } from "react";
import "./Player.css";
import backIcon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const {id} = useParams()

  const naviGate = useNavigate()

  const [apiData,setApiData]=useState({
    name : "",
    key : "",
    published_at : "",
    typeof : ""
  })

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjQzOGQwMWI4N2NjYWRkYmVmMTZmYmEyZmYyM2M0MSIsIm5iZiI6MTcyMDk0MTY2My42MjIxNiwic3ViIjoiNjY5MzdiNGViMDU0M2Y5ZGY0ODhjZTk4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gz058l7cQnMYHGZdUrupW7Vb8YMuG_Q8NcY0P1y45g4",
    },
  };

  useEffect(()=>{
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));

  },[])


  return (
    <div className="player">
      <img
        src={backIcon}
        alt=""
        onClick={()=>{naviGate(-2)}}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  );
};

export default Player;
