import { Link } from "react-router-dom";
import DonationIcon from "./donation-icon.component";
import MusicPlayer from "./music-player.component";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <DonationIcon />
      <Link to="/donate">Donate</Link>
      <MusicPlayer url="https://kxf-s3-music.s3.amazonaws.com/Luma's+Lullaby+-+Mario+Galaxy.mp3" />
      <div className="spacer" />
      <div
       className="navbar-profile"
       style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover', // Optional: adjust as needed
        backgroundPosition: 'center' // Optional: adjust as needed
      }}
      />
      <Link to="/">Home</Link>
      <Link to="/tribute">Tribute</Link>
      <Link to="/life">Life</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
