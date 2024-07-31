import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style/styles.css";
import NavBar from "./components/navbar.component";
import FooterBar from "./components/footerbar.component";
import Donate from "./components/pages/donate.page";
import Home from "./components/pages/home.page";
import Tribute from "./components/pages/tribute.page";
import Life from "./components/pages/life.page";
import Gallery from "./components/pages/gallery.page";
import Visit from "./components/pages/visit.page";
import DonateSuccess from "./components/pages/donate-success.page.";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/donate" Component={Donate} />
        <Route path="/" Component={Home} />
        <Route path="/tribute" Component={Tribute} />
        <Route path="/life" Component={Life} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/visit" Component={Visit} />
        <Route path="/donate/success" Component={DonateSuccess} />
      </Routes>
      <FooterBar />
    </Router>
  );
};

export default App;
