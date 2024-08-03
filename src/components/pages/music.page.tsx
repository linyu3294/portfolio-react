import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Music: React.FC = () => {

    return (
        <div className="page-container">
        <h3> Remake of Luma Theme - Super Mario Galaxy </h3>

            <AudioPlayer
                autoPlay
                src="https://kxf-s3-music.s3.amazonaws.com/Luma's+Lullaby+-+Mario+Galaxy.mp3"
                onPlay={ e => console.log("onPlay")}
                autoPlayAfterSrcChange={false}
            />
        </div>
    );
};

export default Music;
