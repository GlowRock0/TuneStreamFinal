import './App.css';
import './css/SongInfo.css';
import './css/Login.css';
import './css/Signup.css';
import './css/Profile.css';
import React, { useState, useContext } from "react";
import Home from './components/Home.js';
import SongInfo from './components/SongInfo.js';
import Login from './components/Login.js';
import Signup1 from './components/Signup1.js';
import Signup2 from './components/Signup2.js';
import Signup3 from './components/Signup3.js';
import Profile from './components/Profile.js';
import { LanguageContext } from './components/LanguageContext'; // Import LanguageContext
import { FaFilter, FaHome, FaSignInAlt, FaUserPlus, FaUser, FaStepBackward, FaPlay, FaStepForward, FaPause } from 'react-icons/fa'; // Import icons

function App() {
  const [page, setPage] = useState("home");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [recommendedText, setRecommendedText] = useState("For You");
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { isFrench, setIsFrench } = useContext(LanguageContext); // Use LanguageContext

  const [selectedSongIndex, setSelectedSongIndex] = useState(null);

  const [activeSong, setActiveSong] = useState({
    cover: null,
    title: "",
    artist: ""
  });

  const handleSongSelect = (index) => {
    setSelectedSongIndex(index);
    setPage("song-info");
  };

  const songData = [
    {
      title: "Lies in Reality",
      artist: "FELT",
      cover: require("./assets/cover0.png"),
      coverSmall: require("./assets/cover0-small.png"),
      coverBig: require("./assets/cover0-big.png")
    },
    {
      title: "Kokoro Odoru",
      artist: "Nobodyknows",
      cover: require("./assets/cover1.png"),
      coverSmall: require("./assets/cover1-small.png"),
      coverBig: require("./assets/cover1-big.png")
    },
    {
      title: "BANG!!!",
      artist: "EGOIST",
      cover: require("./assets/cover2.png"),
      coverSmall: require("./assets/cover2-small.png"),
      coverBig: require("./assets/cover2-big.png")
    },
    {
      title: "Itte.",
      artist: "Yorushika",
      cover: require("./assets/cover3.png"),
      coverSmall: require("./assets/cover3-small.png"),
      coverBig: require("./assets/cover3-big.png")
    },
    {
      title: "Lionheart",
      artist: "Serenity",
      cover: require("./assets/cover4.png"),
      coverSmall: require("./assets/cover4-small.png"),
      coverBig: require("./assets/cover4-big.png")
    },
    {
      title: "Fight Your Demons",
      artist: "EPICA",
      cover: require("./assets/cover5.png"),
      coverSmall: require("./assets/cover5-small.png"),
      coverBig: require("./assets/cover5-big.png")
    },
    {
      title: "Victims of Contingency",
      artist: "EPICA",
      cover: require("./assets/cover6.png"),
      coverSmall: require("./assets/cover6-small.png"),
      coverBig: require("./assets/cover6-big.png")
    },
    {
      title: "FREEDOM DIVE",
      artist: "xi",
      cover: require("./assets/cover7.png"),
      coverSmall: require("./assets/cover7-small.png"),
      coverBig: require("./assets/cover7-big.png")
    },
    {
      title: "Ashes of the Dawn",
      artist: "DragonForce",
      cover: require("./assets/cover8.png"),
      coverSmall: require("./assets/cover8-small.png"),
      coverBig: require("./assets/cover8-big.png")
    },
    {
      title: "Defenders",
      artist: "DragonForce",
      cover: require("./assets/cover9.png"),
      coverSmall: require("./assets/cover9-small.png"),
      coverBig: require("./assets/cover9-big.png")
    },
    {
      title: "Seasons",
      artist: "DragonForce",
      cover: require("./assets/cover10.png"),
      coverSmall: require("./assets/cover10-small.png"),
      coverBig: require("./assets/cover10-big.png")
    },
    {
      title: "Uta",
      artist: "ICDD",
      cover: require("./assets/cover11.png"),
      coverSmall: require("./assets/cover11-small.png"),
      coverBig: require("./assets/cover11-big.png")
    },
    {
      title: "Hanabi",
      artist: "Wagakki Band",
      cover: require("./assets/cover12.png"),
      coverSmall: require("./assets/cover12-small.png"),
      coverBig: require("./assets/cover12-big.png")
    },
    {
      title: "At the Speed of Light",
      artist: "Dimrain47",
      cover: require("./assets/cover13.png"),
      coverSmall: require("./assets/cover13-small.png"),
      coverBig: require("./assets/cover13-big.png")
    },
    {
      title: "Love La Femme",
      artist: "Hoy Me Desperté",
      cover: require("./assets/cover14.png"),
      coverSmall: require("./assets/cover14-small.png"),
      coverBig: require("./assets/cover14-big.png")
    }
];

const updateActiveSong = (coverSmall, title, artist) => {
  setActiveSong({ coverSmall, title, artist });
}

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  }

  const activateDefaultGenre = () => {
    setRecommendedText(isFrench ? "Pour Vous" : "For You");
  }

  const activateGenre1 = () => {
    setRecommendedText(isFrench ? "Rocher" : "Rock");
  }

  const activateGenre2 = () => {
    setRecommendedText(isFrench ? "Japonaise" : "Japanese");
  }

  const activateGenre3 = () => {
    setRecommendedText(isFrench ? "Électronique" : "Electronic");
  }

  const handleHomeClick = () => {
    activateDefaultGenre();
    handleLeavingFrench();
    setPage("home");
  }

  const handleLogin = (firstName, lastName) => {
    setIsLoggedIn(true);
    setUser({ firstName, lastName });
    setPage("home");
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ firstName: "", lastName: "" });
    setPage("home");
  }

  const handleLoginButton = () => {
    handleLeavingFrench();
    setPage("login")
  }

  const handleSignUpButton = () => {
    handleLeavingFrench();
    setPage("1")
  }

  const handleLeavingFrench = () => {
    if (isFrench) {
      setIsFrench(!isFrench);
    }
  }

  return (
    <div className="App">
      <div className="Main-container">
        <div className="UserHome-container">
          <div className="User-container">
            <div className="User-card">
              <div className="User-title">
                {isFrench ? "Aime" : "Likes"}
              </div>
              <div className="User-song-list">
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Uta
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Defenders
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Hanabi
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  At the Speed of Light
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  FREEDOM DIVE
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Victims of Contingency
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Ashes of the Dawn
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Lionheart
                </div>
              </div>
            </div>
            <div className="User-card">
              <div onClick={handleLeavingFrench} className="User-title">
              {isFrench ? "Listes de Lecture" : "Playlists"}
              </div>
              <div className="User-song-list">
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  My Rock Songs
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Study Playlist
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Happy Playlist
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Sad Playlist
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Japanese Music
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Metal
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  Feel Good Music
                </div>
                <div onClick={handleLeavingFrench} className="Song-list-item">
                  My friend's playlist
                </div>
              </div>

            </div>
            <img src={require("./assets/logo.png")}></img>
          </div>
          
          <div className="Home-container">
              <div className="Header-nav">
                <div className={`Search-nav ${isFilterOpen ? 'expanded' : ''}`}>
                  <input type="text" placeholder={isFrench ? "Rechercher" : "Search"} className="Search-bar" />
                  <div className="Filter-tab" onClick={toggleFilter}><FaFilter /></div>
                  {isFilterOpen && (
                    <div>
                      <div className="Filter-option-1" onClick={activateGenre1}>{isFrench ? "Rocher" : "Rock"}</div>
                      <div className="Filter-option-2" onClick={activateGenre2}>{isFrench ? "Japonaise" : "Japanese"}</div>
                      <div className="Filter-option-3" onClick={activateGenre3}>{isFrench ? "Électronique" : "Electronic"}</div>
                    </div>
                  )}
                </div>
                <div className="Home-button-container">
                  <div onClick={handleHomeClick} className="Home-button"><FaHome /></div>
                </div>
                <div className="Login-card">
                  <div onClick={handleLoginButton} className="Login-btn"> {isFrench ? "Se connecter " : "Login "}<FaSignInAlt /></div>
                  <div onClick={handleSignUpButton} className="Signup-btn"> {isFrench ? "S'inscrire " : "Sign Up "}<FaUserPlus /></div>
                  <div title={!isLoggedIn ? (isFrench ? "Veuillez vous connecter pour accéder à cette fonctionnalité." : "Please log in to access this feature.") : ""} className={`User-page-btn ${!isLoggedIn ? 'disabled' : ''}`} onClick={isLoggedIn ? () => setPage("pf") : null}><FaUser /></div>
                </div>
              </div>

            {page === "home" &&
              <Home setPage={setPage} isFilterOpen={isFilterOpen} recommendedText={recommendedText} songData={songData} onSongSelect={handleSongSelect}/>
            }
            {page === "song-info" &&
              <SongInfo isFilterOpen={isFilterOpen} isFrench={isFrench} song={songData[selectedSongIndex]} setActiveSong={updateActiveSong}/>
            }
            {page === "login" &&
              <Login setPage={setPage} handleLogin={handleLogin}/>
            }
            {page === "1" &&
              <Signup1 setPage={setPage}/>
            }
            {page === "2" &&
              <Signup2 setPage={setPage}/>
            }
            {page === "3" &&
              <Signup3 setPage={setPage} handleLogin={handleLogin}/>
            }
            {page === "pf" && isLoggedIn &&
              <Profile setPage={setPage} user={user} handleLogout={handleLogout} />
            }
          </div>
        </div>
        <div className="Song-control-container">
          <div className="First-control-icon"><FaStepBackward color="black"/></div>
          <div className="Control-icon"><FaPlay color="black"/></div>
          <div className="Control-icon"><FaStepForward color="black"/></div>
          <div className="Song-control-start-time">
            0:00
          </div>
          <div className="Song-time-bar">
            
          </div>
          <div className="Song-control-end-time">
            X:XX
          </div>
          <img className="Control-icon" src={activeSong.coverSmall}></img>
          <div className="Song-info">
            <div className="Song-control-title">
              {activeSong.title}
            </div>
            <div className="Artist-control-title">
              {activeSong.artist}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
