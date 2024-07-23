import React from "react";
import MusicalNoteBed from "./musical-note-bed.component";
import MusicalNoteCap from "./musical-note-cap.component";
import LeafBorder from "./leaf-border.component";
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
        imageSrc='https://raw.githubusercontent.com/linyu3294/kxf-react/main/src/media/bouquet1.png?token=GHSAT0AAAAAACP3SE722444SNKV26BDATX2ZU737EQ'
      />
      <div> <MusicalNoteCap /></div>
        <div className="note-container">
          <p className="tribute-name">{props.name}</p>
            <div className="tribute-date">{props.created_at}</div>
          <p className="tribute-body">{props.tribute}</p>
        <div> <MusicalNoteBed /></div>
        <br/>
        <div><LeafBorder/></div>
      </div>
    </div>
  );
};

export default MusicalNote;
