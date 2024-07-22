// SongInfo.js
import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { FaUser, FaPlay } from 'react-icons/fa'; // Import icons
import { IoIosSend } from 'react-icons/io'; // Import icons


const SongInfo = ({ isFilterOpen, setIsFrench, song, setActiveSong }) => {
    const { isFrench } = useLanguage();

    const handleLeavingFrench = () => {
        if (isFrench) {
          setIsFrench(!isFrench);
        }
      }

    const [comments, setComments] = useState([
        { timestamp: "Jimmy @0:32", text: isFrench ? "mon Dieu, cette chanson est tellement bonne" : "omg this song is so good" },
        { timestamp: "Sarah @1:46", text: isFrench ? "J'aime vraiment cette partie" : "I really like this part" },
        { timestamp: "Andrew @2:14", text: isFrench ? "comment m'ont-ils fait ressentir 24 émotions différentes ici ??" : "how did they make me feel 24 different emotions here??" }
    ]);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim() === "") {
            alert(isFrench ? "Veuillez entrer du texte pour commenter !" : "Please enter text to comment!");
            return;
        }

        const randomTimestamp = `${isFrench ? "Toi" : "You"} @${Math.floor(Math.random() * 3 + 1)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
        const newCommentObj = {
            timestamp: randomTimestamp,
            text: newComment
        };

        setComments([newCommentObj, ...comments]);
        setNewComment("");
    };

    const handlePlayButtonClick = () => {
        // Assume you have the cover image URL available for the active song
        const songCover = song.coverSmall; // Update with actual cover image URL
        const titleName = song.title;
        const artistName = song.artist;
        setActiveSong(songCover, titleName, artistName);
      }

    return (
        <div>
            <div className="Song-info-container">
                <div className="Song-left-container">
                    <div className="Song-info-player">
                        <div onClick={handlePlayButtonClick} className="Play-button"><FaPlay /></div>
                        <div>
                            <div className="Song-info-title">
                                {song.title}
                            </div>
                            <div className="Artist-info-name">
                                {song.artist}
                            </div>
                        </div>
                    </div>
                    <div className="Song-bar-container">
                        <div className="Artist-info-name">
                            0:00
                        </div>
                        <div className="Song-bar"></div>
                        <div className="Artist-info-name">
                            X:XX
                        </div>
                    </div>
                </div>
                <div className="Song-right-container">
                    <img className="Song-cover-prev" src={song.coverBig}></img>
                </div>
            </div>

            <div className="Song-lower-container">
                <div style={{ height: isFilterOpen ? '160px' : '220px', overflow: isFilterOpen ? 'auto' : 'none'}} className="Song-left-lower-container">
                    <div className="Post-comment-contatiner">
                        <input
                            className="Write-comment"
                            placeholder={isFrench ? "Écrire un commentaire" : "Write a comment"}
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <div className="Light-icon" onClick={handleAddComment}>
                            <IoIosSend />
                        </div>
                    </div>
                    <div style={{ height: isFilterOpen ? '70px' : '130px', overflow: isFilterOpen ? 'auto' : 'none'}} className="Comment-section">
                        {comments.map((comment, index) => (
                            <div className="Comment-container" key={index}>
                                <div className="Comment-icon"><FaUser color="white"/></div>
                                <div className="Comment-content">
                                    <div className="Comment-timestamp">
                                        {comment.timestamp}
                                    </div>
                                    <div className="Comment-text">
                                        {comment.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ height: isFilterOpen ? '160px' : '220px', overflow: isFilterOpen ? 'auto' : 'none'}} className="Song-right-lower-container">
                    <div className="Mini-song-card">
                        <div className="Mini-song-info">
                            <div className="Mini-song-title">
                                BANG!!!
                            </div>
                            <div className="Mini-artist-name">
                                EGOIST
                            </div>
                        </div>
                    </div>
                    <div className="Mini-song-card">
                        <div className="Mini-song-info">
                            <div className="Mini-song-title">
                                Kokoro Odoru
                            </div>
                            <div className="Mini-artist-name">
                                Nobodyknows
                            </div>
                        </div>
                    </div>
                    <div className="Mini-song-card">
                        <div className="Mini-song-info">
                            <div className="Mini-song-title">
                                Ashes of the Dawn
                            </div>
                            <div className="Mini-artist-name">
                                DragonForce
                            </div>
                        </div>
                    </div>
                    <div className="Mini-song-card">
                        <div className="Mini-song-info">
                            <div className="Mini-song-title">
                                Lionheart
                            </div>
                            <div className="Mini-artist-name">
                                Serenity
                            </div>
                        </div>
                    </div>
                    <div className="Mini-song-card">
                        <div className="Mini-song-info">
                            <div className="Mini-song-title">
                                Uta
                            </div>
                            <div className="Mini-artist-name">
                                ICDD
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongInfo;
