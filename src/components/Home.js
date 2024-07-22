import React, { useContext } from "react";
import { LanguageContext } from '../components/LanguageContext'; // Import LanguageContext

const Home = ({ setPage, isFilterOpen, songData, onSongSelect, recommendedText }) => {
  const { isFrench, setIsFrench } = useContext(LanguageContext); // Use LanguageContext

  const handleSongCardClick = (songIndex) => {
    if (songIndex === 14) { // The second song card
      setIsFrench(!isFrench); // Toggle language
    }
    onSongSelect(songIndex);
    setPage("song-info");
  }

  return (
    <div style={{ height: isFilterOpen ? '420px' : '480px', overflow: isFilterOpen ? 'auto' : 'none' }} className="Home-nav">
      <div className="Title">
        {recommendedText}
      </div>

      <div className="Nav-card-section">
        <div onClick={() => handleSongCardClick(0)} className="Nav-card">
          <img className="Nav-card-img" src={songData[0].cover} alt="Cover 1" />
          <div className="Song-title">{songData[0].title}</div>
          <div className="Artist-title">{songData[0].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(1)} className="Nav-card">
          <img className="Nav-card-img" src={songData[1].cover} alt="Cover 1" />
          <div className="Song-title">{songData[1].title}</div>
          <div className="Artist-title">{songData[1].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(2)} className="Nav-card">
          <img className="Nav-card-img" src={songData[2].cover} alt="Cover 1" />
          <div className="Song-title">{songData[2].title}</div>
          <div className="Artist-title">{songData[2].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(3)} className="Nav-card">
          <img className="Nav-card-img" src={songData[3].cover} alt="Cover 1" />
          <div className="Song-title">{songData[3].title}</div>
          <div className="Artist-title">{songData[3].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(4)} className="Nav-card">
          <img className="Nav-card-img" src={songData[4].cover} alt="Cover 1" />
          <div className="Song-title">{songData[4].title}</div>
          <div className="Artist-title">{songData[4].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(5)} className="Nav-card">
          <img className="Nav-card-img" src={songData[5].cover} alt="Cover 1" />
          <div className="Song-title">{songData[5].title}</div>
          <div className="Artist-title">{songData[5].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(6)} className="Nav-card">
          <img className="Nav-card-img" src={songData[6].cover} alt="Cover 1" />
          <div className="Song-title">{songData[6].title}</div>
          <div className="Artist-title">{songData[6].artist}</div>
        </div>
      </div>

      <div className="Title">
        {isFrench ? "Chansons Populaires" : "Popular Songs"}
      </div>

      <div className="Nav-card-section">
        <div onClick={() => handleSongCardClick(8)} className="Nav-card">
          <img className="Nav-card-img" src={songData[8].cover} alt="Cover 1" />
          <div className="Song-title">{songData[8].title}</div>
          <div className="Artist-title">{songData[8].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(9)} className="Nav-card">
          <img className="Nav-card-img" src={songData[9].cover} alt="Cover 1" />
          <div className="Song-title">{songData[9].title}</div>
          <div className="Artist-title">{songData[9].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(10)} className="Nav-card">
          <img className="Nav-card-img" src={songData[10].cover} alt="Cover 1" />
          <div className="Song-title">{songData[10].title}</div>
          <div className="Artist-title">{songData[10].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(11)} className="Nav-card">
          <img className="Nav-card-img" src={songData[11].cover} alt="Cover 1" />
          <div className="Song-title">{songData[11].title}</div>
          <div className="Artist-title">{songData[11].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(12)} className="Nav-card">
          <img className="Nav-card-img" src={songData[12].cover} alt="Cover 1" />
          <div className="Song-title">{songData[12].title}</div>
          <div className="Artist-title">{songData[12].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(13)} className="Nav-card">
          <img className="Nav-card-img" src={songData[13].cover} alt="Cover 1" />
          <div className="Song-title">{songData[13].title}</div>
          <div className="Artist-title">{songData[13].artist}</div>
        </div>
        <div onClick={() => handleSongCardClick(14)} className="Nav-card">
          <img className="Nav-card-img" src={songData[14].cover} alt="Cover 1" />
          <div className="Song-title">{songData[14].title}</div>
          <div className="Artist-title">{songData[14].artist}</div>
        </div>
      
      </div>
    </div>
  );
}

export default Home;

