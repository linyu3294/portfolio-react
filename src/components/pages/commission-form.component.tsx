import React, { useState } from "react";

const ArtCommissionForm = () => {
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "social" | null>(null);
  const [socialStep, setSocialStep] = useState(1);
  const [contactMethod] = useState("undefined");


  return (
    <div className="page-container">
      <div className="form-container">
        <form className="commission-form">
          {/* Artwork Details */}
          <label>Subject/Theme</label>
          <input type="text" placeholder="Describe the artwork" />

          <label>Style</label>
          <select>
            <option>Abstract</option>
            <option>Modern</option>
            <option>Traditional</option>
            <option>Other</option>
          </select>

          <label>Medium</label>
          <select>
            <option>Oil</option>
            <option>Watercolor</option>
            <option>Charcoal</option>
            <option>Graphite</option>
            <option>Pen</option>
            <option>Other</option>
          </select>

          {/* Composition & Format */}
          <label>Include Background?</label>
          <select>
            <option>Yes</option>
            <option>No</option>
            <option>Artist’s Choice</option>
          </select>

          {/* Timeline & Revisions */}
          <label>Deadline</label>
          <input type="date" />

          <label>Revisions Allowed</label>
          <select>
            <option>None</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>Unlimited</option>
          </select>

          {/* Payment Options */}
          <label>Payment Method</label>
          <div className="payment-options">
            <div
              className={`payment-card ${paymentMethod === "paypal" ? "selected" : ""}`}
              onClick={() => setPaymentMethod("paypal")}
            >
              PayPal
            </div>
            <div
              className={`payment-card ${paymentMethod === "social" ? "selected" : ""}`}
              onClick={() => setPaymentMethod("social")}
            >
              Social Credit
            </div>
          </div>

          {paymentMethod === "social" && (
            <div className="social-steps">
              <label>1. Verify Account</label>
              <label>2. Receive Artist’s Work</label>
              <label>3. Share Artist’s Work On Social Media</label>
            </div>
          )}

          {/* Contact & Updates */}
          <label>Preferred Contact Method</label>
          <select>
            <option>Email</option>
            <option>Discord</option>
            <option>Instagram DMs</option>
          </select>

          {contactMethod === "Email" && (
          <>
            <label>Email for Updates</label>
            <input type="email" placeholder="Your email" />
          </>
        )}

          {/* Usage Rights */}
          <label>Artwork Use</label>
          <select>
            <option>Personal</option>
            <option>Commercial</option>
            <option>Artist’s Portfolio Allowed</option>
            <option>Exclusive Rights</option>
          </select>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ArtCommissionForm;
