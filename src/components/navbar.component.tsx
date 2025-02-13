import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isCollectionOpen, setCollectionOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <Link to="/">Home</Link>
      <div
        className="dropdown-item"
        onClick={() => setCollectionOpen(!isCollectionOpen)}
      >
        Collection
      </div>
      {isCollectionOpen && (
        <div className="dropdown-menu">
          <Link to="/gallery">Paintings</Link>
          <Link to="/gallery">Charcoal</Link>
          <Link to="/gallery">Drawings & sketches</Link>
        </div>
      )}
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
