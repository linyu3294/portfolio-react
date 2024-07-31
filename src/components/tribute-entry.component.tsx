import React from "react";
import ImageComponent from "./flower-image.component";


type TributeProps ={
  id: string;
  name: string;
  tribute: string;
  created_at: string;
}

const MusicalNote: React.FC<TributeProps> = (props: TributeProps) => {
  return (
    <div className="musical-note">
      <ImageComponent
        imageSrc='https://kxf-s3-public.s3.amazonaws.com/pink-rose.jpg'
      />
        <div className="note-container">
          <p className="tribute-name">{props.name}</p>
            <div className="tribute-date">{props.created_at}</div>
          <p className="tribute-body">{props.tribute}</p>
        <br/>
      </div>
    </div>
  );
};

export default MusicalNote;
