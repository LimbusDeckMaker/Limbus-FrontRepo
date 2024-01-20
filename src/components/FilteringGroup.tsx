import React, { useState } from "react";

import { Button, ButtonGroup } from "@material-tailwind/react";
import Slider from "./Slider";

const buttonStyle =
  "py-0.5 px-1.5 md:py-1 md:px-2.5 border-none w-full text-xs md:text-lg lg:text-xl";

const FilteringGroup = () => {
  const [selectedType, setSelectedType] = useState<string>("전체");
  const [selectedGrades, setSelectedGrades] = useState<number[]>([]);

  const toggleGradeButton = (name: number) => {
    setSelectedGrades((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((btnName) => btnName !== name)
        : [...prevSelected, name]
    );
  };

  const handleSelectedType = (type: string) => {
    setSelectedType(type);
  };

  const isSelectedType = (type: string) => selectedType === type;

  return (
    <div className="grid grid-rows-2 grid-flow-col my-3 gap-1 md:gap-6 lg:gap-8 items-end">
      <div className="min-w-40">
        <Slider title="속도" minValue={1} maxValue={9} />
      </div>
      <div className="min-w-40">
        <Slider title="가중치" minValue={1} maxValue={9} />
      </div>
      <div>
        <ButtonGroup
          className="rounded-full gap-0.5 max-w-80"
          size="sm"
          placeholder={undefined}
        >
          <Button
            onClick={() => handleSelectedType("인격")}
            className={`${
              isSelectedType("인격")
                ? "bg-primary-500 text-primary-100"
                : "bg-gray-500 text-white"
            } rounded-l-3xl rounded-r-md ${buttonStyle}`}
            placeholder={undefined}
          >
            인격
          </Button>
          <Button
            onClick={() => handleSelectedType("에고")}
            className={`${
              isSelectedType("에고")
                ? "bg-primary-400 text-primary-100"
                : "bg-gray-500 text-white"
            } rounded ${buttonStyle}`}
            placeholder={undefined}
          >
            에고
          </Button>
          <Button
            onClick={() => handleSelectedType("전체")}
            className={`${
              isSelectedType("전체")
                ? "bg-primary-300 text-primary-100"
                : "bg-gray-500 text-white"
            } rounded-l-md rounded-r-3xl ${buttonStyle}`}
            placeholder={undefined}
          >
            전체
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup
          className="rounded-full gap-0.5 max-w-80"
          size="sm"
          placeholder={undefined}
        >
          <Button
            onClick={() => toggleGradeButton(1)}
            className={`${
              selectedGrades.includes(1)
                ? "bg-primary-500 text-primary-100"
                : "bg-gray-400 text-white"
            } rounded-l-3xl rounded-r-md ${buttonStyle}`}
            placeholder={undefined}
          >
            <img
              src="/assets/grade1.png"
              alt="1성 이미지"
              className="h-4 md:h-7 mx-auto"
            />
          </Button>
          <Button
            onClick={() => toggleGradeButton(2)}
            className={`${
              selectedGrades.includes(2)
                ? "bg-primary-400 text-primary-100"
                : "bg-gray-400 text-white"
            } rounded ${buttonStyle}`}
            placeholder={undefined}
          >
            <img
              src="/assets/grade2.png"
              alt="1성 이미지"
              className="h-4 md:h-7 mx-auto"
            />
          </Button>
          <Button
            onClick={() => toggleGradeButton(3)}
            className={`${
              selectedGrades.includes(3)
                ? "bg-primary-300 text-primary-100"
                : "bg-gray-400 text-white"
            } rounded-l-md rounded-r-3xl ${buttonStyle}`}
            placeholder={undefined}
          >
            <img
              src="/assets/grade3.png"
              alt="1성 이미지"
              className="h-4 md:h-7 mx-auto"
            />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default FilteringGroup;
