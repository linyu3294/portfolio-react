import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Music: React.FC = () => {

    const divider = () => {
        return <div> <br/> <br/> <br/> <br/> <br/> </div>
    }

    return (
        <div className="page-container">
            <h3> Remake of Luma Theme - Super Mario Galaxy </h3>
            <AudioPlayer
                autoPlay={false}
                src="https://kxf-s3-music.s3.amazonaws.com/Luma's+Lullaby+-+Mario+Galaxy.mp3"
                onPlay={ e => console.log(`There is an error loading this song, ${e}`)}
                autoPlayAfterSrcChange={false}
            />
            {divider()}
            <h3> National Park - Pokemon HGSS (MIT Video Game Orchestra)</h3>
            <AudioPlayer
                autoPlay={false}
                src="https://kxf-s3-music.s3.amazonaws.com/vgo-national-park-pokemon-hgss.mp3"
                onPlay={ e => console.log(`There is an error loading this song, ${e}`)}
                autoPlayAfterSrcChange={false}
            />
            {divider()}
            <h3> Another Core - Undertale (MIT Video Game Orchestra)</h3>
            <AudioPlayer
                autoPlay={false}
                src="https://kxf-s3-music.s3.amazonaws.com/vgo-another-core-undertale.wav"
                onPlay={ e => console.log(`There is an error loading this song, ${e}`)}
                autoPlayAfterSrcChange={false}
            />
            {divider()}
            <h3> Orchestral Piece </h3>
            <AudioPlayer
                autoPlay={false}
                src="https://kxf-s3-music.s3.amazonaws.com/orchestral-piece.wav"
                onPlay={ e => console.log(`There is an error loading this song, ${e}`)}
                autoPlayAfterSrcChange={false}
            />
            {divider()}
            <h3> Homage to Bach - Two Fugues and Preludes</h3>
            <AudioPlayer
                autoPlay={false}
                src="https://kxf-s3-music.s3.amazonaws.com/homage-to-bach-two-fugues-and-preludes.mp3"
                onPlay={ e => console.log(`There is an error loading this song, ${e}`)}
                autoPlayAfterSrcChange={false}
            />
            {divider()}
            <h3> Faded </h3>
            <AudioPlayer
                autoPlay={false}
                src="https://kxf-s3-music.s3.amazonaws.com/faded.wav"
                onPlay={ e => console.log(`There is an error loading this song, ${e}`)}
                autoPlayAfterSrcChange={false}
            /> 
            {divider()}
            <h3> Credits Theme </h3>
            <AudioPlayer
                autoPlay={false}
                src="https://kxf-s3-music.s3.amazonaws.com/credits-theme.wav"
                onPlay={ e => console.log(`There is an error loading this song, ${e}`)}
                autoPlayAfterSrcChange={false}
            />
        </div>
    );
};

export default Music;
