import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type CommissionState = {
  tierLevel: 'tier1' | 'tier2' | 'tier3' | undefined,
}


const ArtCommissionForm: React.FC = () => {
  const [contactMethod] = useState("undefined");

  const location = useLocation();
  const {tierLevel} = location.state;

  const [size, setSize] = useState<'small' | 'medium' | 'large' | undefined>(undefined);

  useEffect(()=>{
    if(tierLevel){
      if(tierLevel === 'tier1') {
        setSize('small')
      }
      else if(tierLevel === 'tier1') {
        setSize('small')
      }
      else if(tierLevel === 'tier1') {
        setSize('small')
      }
  }}, [tierLevel])

  const [email, setEmail] = useState<string | undefined>(undefined);

  const [subjectTheme, setSubjectTheme] = useState<string | undefined>(undefined);
  const [style, setStyle] = useState<string | undefined> (undefined);
  const [medium, setMedium] = useState<string | undefined>(undefined);
  const [background, setBackground] = useState<string | undefined> (undefined);
  const [deadline, setDeadline] = useState<string | undefined> (undefined);
  const [revisionAllowed, setRevisionAllowed] = useState<string | undefined>(undefined);
  const [preferredContactMethod, setPreferredContactMethod] = useState<string | undefined>(undefined);
  const [artworkUse, setArtworkUse] = useState<string | undefined>(undefined);

  const navigate = useNavigate();
  
  const proceedToPaymentOption = () => {
      navigate("/payment", {state: {isCommission: true, isSale: false}});
  };
  
  return (
    <div className="page-container centered-container ">
      <div className="form-container">
        <form className="commission-form">

          {/* Artwork Details */}
          <label>Subject/Theme</label>
          <input
            value={subjectTheme}
            type="text"
            placeholder="Describe the artwork" 
            onChange={(e)=>{setSubjectTheme(e.target.value)}}
            required
          />

          <label>Size</label>
          <select 
            value={size}
            defaultValue={"small"} 
            required 
            disabled={true}
          >
            <option value={'small'}>4 X 8</option>
            <option value={'medium'}>8 X 10</option>
            <option value={'large'}>11 X 14</option>
            <option>Other</option>
          </select>

          <label>Style</label>
          <select 
            value={style}
            defaultValue={"figurative"} 
            onChange={(e)=>{setStyle(e.target.value)}}
          required>
            <option value={'figurative'}>Traditional</option>
            <option value={'abstract'}>Abstract</option>
            <option>Other</option>
          </select>

          <label>Medium</label>
          <select
            value = {medium}
            onChange = {(e)=>{setMedium(e.target.value)}}
          >
            <option>Oil</option>
            <option value={'Watercolor'}>Watercolor</option>
            <option value={'Charcoal'}>Charcoal</option>
            <option value={'Graphite'}>Graphite</option>
            <option value={'Pen'}>Pen</option>
            <option value={'Other'}>Other</option>
          </select>

          {/* Composition & Format */}
          <label>Include Background?</label>
          <select
              value = {background}
              onChange = {(e)=>{setBackground(e.target.value)}}
          >
            <option value={'Yes'}>Yes</option>
            <option value={'No'}>No</option>
            <option value={'Artists_Choice'}>Artist’s Choice</option>
          </select>

          {/* Timeline & Revisions */}
          <label>Deadline</label>
          <input 
            value={deadline}
            onChange={(e)=>{setDeadline(e.target.value)}}
            type="date" 
          />

          <label>Revisions Allowed</label>
          <select
            value={revisionAllowed}
            onChange={(e)=>{setRevisionAllowed(e.target.value)}}
          >
            <option value='None' >None</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='unlimited'>Unlimited</option>
          </select>

          {/* Contact & Updates */}
          <label>Preferred Contact Method</label>
          <select
            value = {preferredContactMethod} 
            onChange={(e)=>{setPreferredContactMethod(e.target.value)}}
            defaultValue={"email"} 
          required>
            <option value="email">Email</option>
            <option value="discord">Discord</option>
            <option value="instagram">Instagram DMs</option>
          </select>

          {contactMethod === "Email" && (
            <>
              <label>Email for Updates</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email" 
              />
            </>
          )}
          {(contactMethod === "discord" || contactMethod === "instagram") && (
            <>
              <label>Email for Updates</label>
              <input type="email" placeholder="Your email" />
            </>
          )}

          <label>Artwork Use</label>
          <select 
            value={artworkUse}
            onChange={(e)=>{setArtworkUse(e.target.value)}}
            >
            <option value='Personal'>Personal</option>
            <option value='Commercial'>Commercial</option>
            <option value='Exclusive_Rights'>Exclusive Rights</option>
          </select>

          <button type="submit" 
            onClick={()=>proceedToPaymentOption()} 
            className="submit-btn">
              Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArtCommissionForm;
