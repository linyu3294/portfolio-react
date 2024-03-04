import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Volume from './icon-volumn.component';
import Mute from './icon-mute.component';


type MusicPlayerProps = {
  url: string;
};

const MusicPlayer: React.FC<MusicPlayerProps> = (props: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    setIsMuted(false); // Ensure that when play is toggled, mute is also reset
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="sound-icon-container">
      <div onClick={handleTogglePlay}>
        { isPlaying && <div onClick={handleToggleMute} className="sound-icon" ><Volume /></div>}
        { !isPlaying && <div onClick={handleToggleMute} className="sound-icon" ><Mute /></div>}
      </div>

      <ReactPlayer url={props.url} playing={isPlaying} loop muted={isMuted} />
    </div>
  );
};

export default MusicPlayer;