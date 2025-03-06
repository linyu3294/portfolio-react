import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style/styles.css";
import "./style/commission-form.css";

import NavBar from "./components/navbar.component";
import Gallery from "./components/pages/gallery.page";
import Contact from "./components/pages/contact.page";
import Home from "./components/pages/home.page";
import Sale from "./components/pages/sale.page";
import Commission from "./components/pages/commission.dialog";
import CommissionForm from "./components/pages/commission-form.component";
import Payment from "./components/pages/payment.component";
import PrivacyPolicy from "./components/pages/privacy-policy.component";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/contact" Component={Contact} />
        <Route path="/commission-form" Component={CommissionForm} />
        <Route path="/sale" Component={Sale} />
        <Route path="/commission" element={<Commission isOpen={true} setIsOpen={() => {}} />} />
        <Route path="/payment" Component={Payment} />
        <Route path="/privacy-policy" Component={PrivacyPolicy} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
