import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style/styles.css";
import NavBar from "./components/navbar.component";
import Gallery from "./components/pages/gallery.page";
import Contact from "./components/pages/contact.page";
import Home from "./components/pages/home.page";
import Sale from "./components/pages/sale.page";
import Commission from "./components/pages/commision.page";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/contact" Component={Contact} />
        <Route path="sale" Component={Sale} />
        <Route path="commission" Component={Commission} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
