import React from 'react'
import '../style/musicard.css';
import { useState, useEffect } from 'react'

export const MusiCards = ({secondSearch}) => {
  // console.log(secondSearch)
  // const [artists] = secondSearch;
  // song.data[artists]
  // console.log(artists.data.albumOfTrack.coverArt.sources[0].url)
    return (
    <div className='container'>
      {secondSearch.map((song,i) => (
        
        <div key={i}>
          <div className="song">
            <h2>{song.data.name}</h2>
            <a href={song.data.uri} className="title">Escuchala </a>
            <h4>{song.data.artists.items[0].profile.name}</h4>
            <img src={song.data.albumOfTrack.coverArt.sources[0].url}/>
          </div>
        </div>
      ))}
      
    </div>
  )
}