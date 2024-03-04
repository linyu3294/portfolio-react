import React from "react";
import MusicalNoteBed from "./musical-note-bed.component";
import MusicalNoteCap from "./musical-note-cap.component";


type TributeProps ={
  id: string;
  name: string;
  tribute: string;
  created_at: string;
}

const MusicalNote: React.FC<TributeProps> = (props: TributeProps) => {
  return (
    <div className="musical-note">
      <div> <MusicalNoteCap /></div>
        <div className="note-container">
            <p className="tribute-name">{props.name}</p>
              <div className="tribute-date">{props.created_at}</div>
            <p className="tribute-body">{props.tribute}</p>
          <div> <MusicalNoteBed /></div>
        </div>
    </div>
  );
};

export default MusicalNote;
