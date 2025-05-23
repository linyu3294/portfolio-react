import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommissionState } from "./commission-form.component";

type DialogProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

type Option = {
  id: 'Tier_1' | 'Tier_2' | 'Tier_3';
  label: string;
  info: string;
  path: string;
};

const Commission: React.FC<DialogProps> = (props: DialogProps) => {
  const { isOpen, setIsOpen } = props;
  const [tierLevel, setTierLevel] = useState<Option | undefined>(undefined);


  const options: Option[] = [
    { id: "Tier_1", label: "Mini (4 X 8)", info: "A little spark of creativity, small, simple, but full of charm. Think doodles, mini sketches, or small portraits that fits right in your pocket. Perfect to send as a gift or postcard.", path: "/commission-form" },
    { id: "Tier_2", label: "Concept (8 X 10)", info: "A bite-sized masterpiece, whether it’s a sketch, painting, or watercolor, this one’s perfect for quick inspiration, or testing out a cool concept.", path: "/commission-form" },
    { id: "Tier_3", label: "Gallery (11 X 14)", info: "A solid work of art that makes an impact. This piece is fully realized with rich details, powerful storytelling, and all the room needed to bring your vision to life.", path: "/commission-form" },
  ];
  const navigate = useNavigate();

  const handleNavigate = () => {
    setIsOpen(false);
    if (tierLevel) {
      const selectedOption = options.find((opt) => opt.id === tierLevel?.id);
      if (!selectedOption) return;

      const commissionFormState: CommissionState = {
        tierLevel: tierLevel.id
      }
      setTierLevel(undefined);
      navigate(selectedOption.path, {state: commissionFormState});
    }
  };

  return (
    <div className="container">
      {isOpen && (
        <div className="commission-dialog-overlay" onClick={() => setIsOpen(isOpen)}>
          <div className="commission-dialog-content" onClick={(e) => e.stopPropagation()}>
            {/* Close (X) Button */}
            <span className="close-commission-dialog-icon" onClick={() => setIsOpen(false)}>
              &times;
            </span>

            <h2>Choose Tier</h2>
            {options.map((option: Option) => (
              <div key={option.id} className="commission-option-container">
                <label className="commission-tier-label">
                  <input
                    type="radio"
                    name="options"
                    value={option.id}
                    checked={tierLevel?.id === option.id}
                    onChange={() => setTierLevel(option)}
                    className="commission-tier"
                  />
                  <span>{option.label}</span>
                </label>
                  <div className="commission-tier-description">
                    {option.info}
                  </div>
              </div>
            ))}

            {tierLevel && <button
              onClick={handleNavigate}
              className="submit-btn"
              >
                Request
              </button>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Commission;