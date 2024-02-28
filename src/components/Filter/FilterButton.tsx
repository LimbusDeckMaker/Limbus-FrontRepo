import React from "react";
import { Button, Tooltip } from "@material-tailwind/react";

interface FilterButtonProps {
  name: string;
  imgSrc: string;
  type?: string;
}

const FilterButton = ({ name, imgSrc, type }: FilterButtonProps) => {
  return (
    <Tooltip
      content={name}
      className={`bg-primary-400 text-primary-100 text-xs rounded ${
        type === "text" && "hidden"
      }`}
    >
      <Button
        key={`button:${name}`}
        className={`bg-primary-400 w-[40px] h-[40px] px-1 py-1 text-md text-primary-100 hover:bg-primary-300 rounded ${
          type === "text" && "!pt-2"
        }`}
        placeholder={undefined}
      >
        {type === "text" ? (
          <span className="text-xl text-white">{name}</span>
        ) : (
          <img
            src={imgSrc}
            alt={name}
            className={`w-auto h-6 object-fill mx-auto ${
              name.includes("성") && "!h-5"
            }`}
          />
        )}
      </Button>
    </Tooltip>
  );
};

export default FilterButton;
