import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Button, Collapse, Typography } from "@material-tailwind/react";

interface EgoInfoBoxProps {
  character: string;
  name: string;
  zoomImage: string;
  grade: string; // 에고는 문자열, 인격은 넘버
  season: number;
  resistance: string[];
  releaseDate: string;
  obtainingMethod: string;
  cost: number[];
}

// TODO: 이미지 경로 변경된 점 있어서 머지 후 수정 필요
const resourseImg = [
  "/assets/resource/분노.png",
  "/assets/resource/색욕.png",
  "/assets/resource/나태.png",
  "/assets/resource/탐식.png",
  "/assets/resource/우울.png",
  "/assets/resource/오만.png",
  "/assets/resource/질투.png",
];

const EgoInfoBox = ({
  character,
  name,
  zoomImage,
  grade,
  season,
  resistance,
  releaseDate,
  obtainingMethod,
  cost,
}: EgoInfoBoxProps) => {
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
      <div className="flex flex-col items-center pb-4">
        <Typography className="text-primary-100" placeholder={cost}>
          내성
        </Typography>
        <Typography
          variant="small"
          className="p-1 text-xs md:text-sm flex flex-wrap justify-center items-center text-center"
          placeholder={resistance.join(", ")}
        >
          {resistance.map((type, index) => (
            <span
              key={index}
              className={`flex items-center mr-2 mb-2 ${
                type === "내성" ? "text-gray-400" : type === "취약" ? "text-red-500" : ""
              }`}
            >
              <img src={resourseImg[index]} alt="beforeImage" style={{ width: "14px", height: "14px" }} />
              {type}{" "}
            </span>
          ))}
        </Typography>
        <Typography className="text-primary-100" placeholder={cost}>
          코스트
        </Typography>
        <Typography variant="small" className="p-1 text-xs md:text-sm flex" placeholder={resistance.join(", ")}>
          {cost.map((type, index) => (
            <span key={index} className={`flex mr-2 ${type === 0 ? "text-gray-400" : ""}`}>
              <img src={resourseImg[index]} alt="beforeImage" style={{ width: "14px", height: "14px" }} />
              {type}{" "}
            </span>
          ))}
        </Typography>
        <Typography variant="small" className="p-1 md:text-xs" placeholder={season}>
          <span className="text-primary-100">시즌</span> : {season}
        </Typography>

        <Typography variant="small" className="p-1 md:text-xs" placeholder={releaseDate}>
          <span className="text-primary-100">출시시기</span> : {releaseDate}
        </Typography>

        <Typography variant="small" className="p-1 md:text-xs text-center" placeholder={obtainingMethod}>
          {obtainingMethod}
        </Typography>
      </div>
    );
  };

  return (
    <div className="bg-primary-500 text-white w-64 rounded-md">
      <div className="w-64 h-auto py-4 gap-2 flex flex-col items-center relative">
        <img src={zoomImage} alt="profile" style={{ width: "40%", height: "auto" }} />

        {/* TODO : 머지후 이미지로 넣기 */}
        <p className="text-xl font-bold font-sans text-primary-100">{grade}</p>

        <p className="text-xl font-bold font-sans text-primary-100">{name}</p>
        <p className="text-xl font-bold font-sans text-primary-100 -mt-2">{character}</p>

        {/* Button to trigger collapse on smaller screens */}
        <div className="md:hidden">
          <Button
            onClick={toggleOpen}
            className="text-white flex items-center"
            style={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              outline: "none",
            }}
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

export default EgoInfoBox;
