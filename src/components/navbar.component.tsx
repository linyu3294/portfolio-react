import { useState } from "react";
import { Link } from "react-router-dom";
import DialogBox from "./pages/commission.dialog";

const NavBar: React.FC = () => {
  const [isCollectionOpen, setCollectionOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          <Link to="/gallery">Water Color</Link>
          <Link to="/gallery">Charcoal</Link>
          <Link to="/gallery">Drawings & Sketches</Link>
        </div>
      )}
      <Link to="/sale">For Sale</Link>
      <div onClick={() => setIsOpen(true)} className="open-commission-btn">
        Commision
      </div>
      <DialogBox isOpen={isOpen} setIsOpen={setIsOpen} />
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
