import { Link } from "react-router-dom";
import DonationIcon from "./donation-icon.component";
import MusicPlayer from "./music-player.component";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <DonationIcon />
      {/* <Link to="/donate">Donate</Link> */}
      <MusicPlayer url="https://kxf-s3-music.s3.amazonaws.com/Luma's+Lullaby+-+Mario+Galaxy.mp3" />
      <div className="spacer" />
      <div
       className="navbar-profile"
       style={{ 
        backgroundImage: `url('https://kxf-s3-public.s3.amazonaws.com/kathy-profile-2.JPG')`,
        backgroundSize: 'cover', // Optional: adjust as needed
        backgroundPosition: 'center' // Optional: adjust as needed
      }}
      />
      <Link to="/">Home</Link>
      <Link to="/tribute">Tribute</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
