import React from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface Props {
  title: string;
  minValue: number;
  maxValue: number;
}

const Slider = ({ title, minValue, maxValue }: Props) => {
  const [value, setValue] = React.useState([minValue, maxValue]);

  const handleChange = (newValue: [number, number]) => {
    setValue(newValue);
  };

  return (
    <div className="md:flex md:gap-2">
      <span className="font-gLight md:font-sans whitespace-nowrap text-xs md:text-base lg:text-lg bg-gray-100 rounded px-0.5 md:px-2 lg:py-0.5 text-blue-500 w-3 md:w-20 text-center">
        {title}
      </span>
      <div className="w-full flex gap-0.5 items-center lg:gap-2">
        <div className="text-xs lg:text-base text-blue-500">{value[0]}</div>
        <RangeSlider
          id="mySlider"
          min={minValue}
          max={maxValue}
          value={value}
          onInput={handleChange}
        />
        <div className="text-xs lg:text-base text-blue-500">{value[1]}</div>
      </div>
    </div>
  );
};

export default Slider;
