import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ArtCommissionForm = () => {
  const [contactMethod] = useState("undefined");

    const navigate = useNavigate();
  
  const proceedToPaymentOption = () => {
      navigate("/payment");
  };
  

  return (
    <div className="page-container centered-container ">
      <div className="form-container">
        <form className="commission-form">
          {/* Artwork Details */}
          <label>Subject/Theme</label>
          <input 
            type="text" 
            placeholder="Describe the artwork" 
            required/>

          <label>Size</label>
          <select defaultValue={"small"} required disabled={true}>
            <option value={'small'}>4 X 8</option>
            <option value={'medium'}>8 X 10</option>
            <option value={'large'}>11 X 14</option>
            <option>Other</option>
          </select>

          <label>Style</label>
          <select defaultValue={"abstract"} required>
            <option value={'abstract'}>Abstract</option>
            <option value={'modernn'}>Modern</option>
            <option value={'traditional'}>Traditional</option>
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

          {/* Contact & Updates */}
          <label>Preferred Contact Method</label>
          <select defaultValue={"email"} required>
            <option value="email">Email</option>
            <option value="discord">Discord</option>
            <option value="instagram">Instagram DMs</option>
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

          <button type="submit" onClick={()=>proceedToPaymentOption()} className="submit-btn">Next</button>
        </form>
      </div>
    </div>
  );
};

export default ArtCommissionForm;
