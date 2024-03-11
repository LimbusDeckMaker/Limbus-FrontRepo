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
      <div className="w-full flex gap-1 items-center lg:gap-2">
        <div className="text-xs lg:text-sm text-primary-300 w-4">
          {value[0]}
        </div>
        <RangeSlider
          id="mySlider"
          min={minValue}
          max={maxValue}
          value={value}
          onInput={handleChange}
        />
        <div className="text-xs lg:text-sm text-primary-300 w-3">
          {value[1]}
        </div>
      </div>
    </div>
  );
};

export default Slider;
