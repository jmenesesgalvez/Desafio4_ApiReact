import React from 'react'
import '../style/musicard.css';


export const MusiCards = ({secondSearch}) => {

  secondSearch.sort((a, b) => {
    const nameA = a.data.name.toUpperCase(); 
    const nameB = b.data.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

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