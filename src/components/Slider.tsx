import { optionsState } from "@recoils/atoms";
import React from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useRecoilState } from "recoil";

interface Props {
  minValue: number;
  maxValue: number;
  name: string;
}

const Slider = ({ name, minValue, maxValue }: Props) => {
  const [value, setValue] = React.useState([minValue, maxValue]);

  const handleChange = (newValue: [number, number]) => {
    setValue(newValue);
  };

  const [options, setOptions] = useRecoilState(optionsState);

  React.useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      ["min" + name]: value[0],
      ["max" + name]: value[1],
    }));
  }, [value]);

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
