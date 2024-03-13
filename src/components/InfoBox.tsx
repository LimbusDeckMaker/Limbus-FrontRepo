import { Button, Collapse, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

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

const gradeImg = ["/assets/common/1성.png", "/assets/common/2성.png", "/assets/common/3성.png"];
const statusImg = ["/assets/status/health.png", "/assets/status/speed.png", "/assets/status/deffense.png"];
const resistanceImg = ["/assets/attackType/slash.png", "/assets/attackType/pierce.png", "/assets/attackType/blunt.png"];

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
  const statusArray = [status.life, status.speed, status.defend];

  const [open, setOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const toggleOpen = () => setOpen((prevOpen) => !prevOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderCollapseContent = () => {
    return (
      <div className="flex flex-col items-center ">
        <Typography variant="small" className="p-1 md:text-xs flex" placeholder={status.life}>
          {statusArray.map((item, index) => (
            <span key={index} className="flex mr-2">
              <img src={statusImg[index]} alt="beforeImage" style={{ width: "14px", height: "14px" }} />
              {item}
            </span>
          ))}
        </Typography>

        <Typography variant="small" className="p-1 md:text-xs flex" placeholder={resistance.join(", ")}>
          {resistance.map((type, index) => (
            <span
              key={index}
              className={`flex mr-2 ${type === "내성" ? "text-gray-400" : type === "취약" ? "text-red-500" : ""}`}
            >
              <img src={resistanceImg[index]} alt="beforeImage" style={{ width: "14px", height: "14px" }} />
              {type}{" "}
            </span>
          ))}
        </Typography>

        <Typography variant="small" className="p-1 md:text-xs" placeholder={affiliation}>
          <span className="text-primary-100">소속</span> : {affiliation}
        </Typography>

        <Typography variant="small" className="p-1 md:text-xs" placeholder={releaseDate}>
          <span className="text-primary-100">출시시기</span> : {releaseDate}
        </Typography>

        <Typography variant="small" className="p-1 md:text-xs" placeholder={obtainingMethod}>
          {obtainingMethod}
        </Typography>
      </div>
    );
  };

  return (
    <div className="bg-primary-500 text-white w-64 rounded-md">
      <div className="w-64 h-auto py-4 gap-2 flex flex-col items-center relative">
        <img src={afterProfileImage} alt="beforeImage" style={{ width: "40%", height: "auto" }} />
        <img src={gradeImg[grade - 1]} alt="grade" style={{ width: "15%", height: "auto" }} />

        <p className="text-xl font-bold text-primary-100">{name}</p>
        <p className="text-xl font-bold text-primary-100">{character}</p>

        {/* Button to trigger collapse on smaller screens */}
        <div className="md:hidden">
          <Button
            onClick={toggleOpen}
            className="text-white flex items-center"
            style={{ backgroundColor: "transparent", border: "none", boxShadow: "none", outline: "none" }}
            placeholder={"button"}
          >
            상세정보
            {open ? <FaArrowUp /> : <FaArrowDown />}
          </Button>
        </div>
      </div>

      {/* Collapse content */}
      {!isLargeScreen ? <Collapse open={open}>{renderCollapseContent()}</Collapse> : renderCollapseContent()}
    </div>
  );
};

export default InfoBox;
