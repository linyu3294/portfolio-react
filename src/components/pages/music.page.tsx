import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Music: React.FC = () => {

    return (
        <div className="page-container">
        <h3> Remake of Luma Theme - Super Mario Galaxy </h3>

            <AudioPlayer
                autoPlay={false}
                src="https://kxf-s3-music.s3.amazonaws.com/Luma's+Lullaby+-+Mario+Galaxy.mp3"
                onPlay={ e => console.log(`There is an error loading this song, ${e}`)}
                autoPlayAfterSrcChange={false}
            />
        </div>
    );
};

export default Music;
