import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type CommissionState = {
  tierLevel: 'Tier_1' | 'Tier_2' | 'Tier_3' | undefined,
}

const ArtCommissionForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {tierLevel} = location.state;
  const [size, setSize] = useState<'small' | 'medium' | 'large' | undefined>(undefined);

  useEffect(()=>{
    if(tierLevel){
      if(tierLevel === 'Tier_1') {
        setSize('small')
      }
      else if(tierLevel === 'Tier_2') {
        setSize('medium')
      }
      else if(tierLevel === 'Ter_3') {
        setSize('large')
      }
  }}, [tierLevel])

  const [email, setEmail] = useState<string | undefined>('Email');
  const [subjectTheme, setSubjectTheme] = useState<string | undefined>(undefined);
  const [style, setStyle] = useState<string | undefined> ('Figurative');
  const [medium, setMedium] = useState<string | undefined>('Oil');
  const [background, setBackground] = useState<string | undefined> ('Artists_Choice');
  const [deadline, setDeadline] = useState<string | undefined> (undefined);
  const [revisionAllowed, setRevisionAllowed] = useState<string | undefined>('None');
  const [preferredContactMethod, setPreferredContactMethod] = useState<string | undefined>('Email');
  const [artworkUse, setArtworkUse] = useState<string | undefined>('Personal');
  const [socialMediaHandle, setSocialMediaHandle] = useState<string | undefined>(undefined);
  
  const proceedToPaymentOption = () => {
      setEmail(undefined);
      setSize(undefined);
      setSubjectTheme(undefined);
      setStyle(undefined);
      setMedium(undefined);
      setBackground(undefined);
      setDeadline(undefined);
      setRevisionAllowed(undefined);
      setPreferredContactMethod(undefined);
      setArtworkUse(undefined);
      setSocialMediaHandle(undefined);

      navigate("/payment", {
        state: 
        {
          isCommission: true, 
          isSale: false,
          tierLevel,
          size,
          email,
          subjectTheme,
          style,
          medium,
          background,
          deadline,
          revisionAllowed,
          preferredContactMethod,
          artworkUse,
          socialMediaHandle
        }
      });
  };
  
  return (
    <div className="page-container centered-container">
      <div className="form-container">
        <form className="commission-form" onSubmit={proceedToPaymentOption}>

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
            defaultValue={"Small"} 
            required 
            disabled={true}
          >
            <option value={'Small'}>4 X 8</option>
            <option value={'Medium'}>8 X 10</option>
            <option value={'Large'}>11 X 14</option>
            <option>Other</option>
          </select>

          <label>Style</label>
          <select 
            value={style}
            defaultValue={"Figurative"} 
            onChange={(e)=>{setStyle(e.target.value)}}
          required>
            <option value={'Figurative'}>Figurative</option>
            <option value={'Abstract'}>Abstract</option>
            <option>Other</option>
          </select>

          <label>Medium</label>
          <select
            value = {medium}
            onChange = {(e)=>{setMedium(e.target.value)}}
          >
            <option>Oil</option>
            <option value={'oil'}>Oil</option>
            <option value={'Watercolor'}>Watercolor</option>
            <option value={'Charcoal'}>Charcoal</option>
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
            <option value='Unlimited'>Unlimited</option>
          </select>

          {/* Contact & Updates */}
          <label>Preferred Contact Method</label>
          <select
            value = {preferredContactMethod} 
            onChange={(e)=>{setPreferredContactMethod(e.target.value)}}
            defaultValue={"Email"} 
          required>
            <option value="Email">Email</option>
            <option value="Discord">Discord</option>
            <option value="Instagram">Instagram DMs</option>
          </select>

          {preferredContactMethod === "Email" && (
            <>
              <label>Email for Updates</label>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email" 
              />
            </>
          )}
          {(preferredContactMethod === "Discord" || preferredContactMethod === "Instagram") && (
            <>
              <label>Email for Updates</label>
              <input 
                required
                type="text" 
                value={socialMediaHandle}
                placeholder="Your Social Media Handle"
                onChange={(e) => {setSocialMediaHandle(e.target.value)}}
              />
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

          <button className="submit-btn" type="submit">
              Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArtCommissionForm;
