import { useState } from "react";
import { Link } from "react-router-dom";
import DialogBox from "./pages/commission.dialog";

const NavBar: React.FC = () => {
  const [isCollectionOpen, setCollectionOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <Link to="/">Home</Link>
      
      <Link to="/sale">Sale</Link>
      <div
        className="dropdown-item"
        onClick={() => setCollectionOpen(!isCollectionOpen)}
      >
        Collection
      </div>

      {isCollectionOpen && (
        <div className="dropdown-menu">
          <Link to="/gallery?medium=oil-color" onClick={() => setCollectionOpen(false)}>Oil</Link>
          <Link to="/gallery?medium=watercolor" onClick={() => setCollectionOpen(false)}>Water Color</Link>
          <Link to="/gallery?medium=charcoal" onClick={() => setCollectionOpen(false)}>Charcoal</Link>
          <Link to="/gallery?medium=drawings-sketches" onClick={() => setCollectionOpen(false)}>Drawings & Sketches</Link>
        </div>
      )}
      <div onClick={() => setIsOpen(true)} className="dropdown-item">
        Commission
      </div>
      <DialogBox isOpen={isOpen} setIsOpen={setIsOpen} />
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
