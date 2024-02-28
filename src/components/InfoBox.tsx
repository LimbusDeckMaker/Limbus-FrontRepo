import { Typography } from "@material-tailwind/react";
import React from "react";

interface InfoBoxProps {
  character: string;
  name: string;
  affiliation: string;
  afterProfileImage: string;
  grade: number;
  releaseDate: string;
  obtainingMethod: string;
  resistance: string[];
  status: {
    life: string;
    speed: string;
    defend: string;
  };
}

const imagePaths = ["/assets/grade1.png", "/assets/grade2.png", "/assets/grade3.png"];

const InfoBox = ({
  character,
  name,
  afterProfileImage,
  affiliation,
  grade,
  releaseDate,
  obtainingMethod,
  resistance,
  status,
}: InfoBoxProps) => {
  return (
    <div className="bg-primary-500 text-white w-64 h-auto py-4 flex flex-col items-center gap-2">
      <img src={afterProfileImage} alt="beforeImage" style={{ width: "40%", height: "auto" }} />
      <img src={imagePaths[grade - 1]} alt="grade" style={{ width: "15%", height: "auto" }} />

      <p className="text-xl font-bold text-primary-100">{name}</p>
      <p className="text-xl font-bold text-primary-100">{character}</p>

      <Typography variant="small" className="p-1 md:text-xs" placeholder={affiliation}>
        <span className="text-primary-100">소속</span> : {affiliation}
      </Typography>

      <Typography variant="small" className="p-1 md:text-xs" placeholder={releaseDate}>
        <span className="text-primary-100">출시시기</span> : {releaseDate}
      </Typography>

      <Typography variant="small" className="p-1 md:text-xs" placeholder={resistance.join(", ")}>
        {resistance.map((type, index) => (
          <span key={index} className={type === "내성" ? "text-gray-400" : type === "취약" ? "text-red-500" : ""}>
            {type}{" "}
          </span>
        ))}
      </Typography>

      <Typography variant="small" className="p-1 md:text-xs" placeholder={status.life}>
        {status.life} {status.speed} {status.defend}
      </Typography>

      <Typography variant="small" className="p-1 md:text-xs" placeholder={obtainingMethod}>
        {obtainingMethod}
      </Typography>
    </div>
  );
};

export default InfoBox;
