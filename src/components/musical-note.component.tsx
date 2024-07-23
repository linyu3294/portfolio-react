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
        imageSrc='https://kxf-s3-public.s3.us-east-1.amazonaws.com/bouquet-1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCeA7Do8G2kGXV%2FpG7z8FC%2BqmmC2Zszy%2BnmDISddBTKwQIhAM6Naw%2B9zCU2cF0CjeRRaJFUhkQYMLU2wsVJGulBwJzyKvECCJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAhoMMDU4NzM5OTI0ODQ1Igy17ppaWIYrxacatisqxQK%2B7lqNjsa3M3rG0otT859dZ6dqPxb3OrzLZk%2BAMfnuc9EdvSBjHRCUKvHfWVH2ow715OHZZ9ol2L2NkDbNkGVYmf8F5uKQf25XrK4eg1WMFywn1C4tNpv4h1cxl7FphR6Zf8zIc2%2Fc9j%2FUYWTTbyQeYnZAZAMyqd8Ge7dW1qNeHKBzqL130LN1QUEczoutJRpSieaM8%2BLN6Y5dvOlIo5TiR4f8qiJu%2FL4WbjUwMQTyps5cLwDFdPRpsp5V9k9QJ%2Bzw%2BV3w30xA%2FJRwDa3PrpY9g%2F7Z166xCa0uxoCEc%2BoJO4y8%2FUmihTu5vaaxGCK269w%2FhOVpvwqBPB5n8amGfss%2BbSH9BDhwDEC1fGFx%2BcrSaqTou7%2Bc1bG9d2oKC2FjGYqlzkgwlXi7KXMfdxQx1wvcUd1OB0SxK9INKlT2uinumc571HztMMuy%2F7QGOrICOr7Ajbhf3x%2BWBgoVtDXCRjn46jqDIm36Mj7%2B%2Ft000dCF7GHskJbpqJH6I67i12kyi%2Fm%2Fp3oiXfIs5exQJ0mn7gs7JTulW3msL1V5SauyVJZR02T%2Fx%2BZI3859otE9uaj%2FlM6JBcGZDc7a9uM6KhtwtCh9GhP5Ei8xGumRC%2FGuVb7ZzxHz2W0092oQqDuX9tcRSjHEEj%2FsnHO1PxTQPkG%2FRGd5I3XCvXOZWZyxRUNrDmbua7TIGk48RmUG0D2UMvKjeWWDbk3rgZUzov67Tll6X6MgLjmHRGBAOlHQEa63yvRSrCP05xU0wyca7yf4JGhIPV39HuTSIPR0hLUh0AkCN%2FwCkxsxO06B6MzCLqoFjKcZU9hJu%2BZDhGlAnH93gaqL8MQqFKxgSV2WNglc5QKrkUC6&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240723T162949Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3LJMD5WUSA5RBMP%2F20240723%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=30735edc8b6fd3fcb1acf152d99756f4379df97ee7883c48353cea7406138953'
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
