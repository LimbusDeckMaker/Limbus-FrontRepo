import React from "react";
import { Button } from "@material-tailwind/react";

interface FilterEtcButtonProps {
  name: string;
}

const FilterEtcButton = ({ name }: FilterEtcButtonProps) => {
  return (
    <Button
      size="sm"
      key={`button:${name}`}
      className="bg-primary-450 w-[86px] h-[40px] px-1 py-1 hover:bg-primary-300 rounded"
      placeholder={undefined}
    >
      <span className="text-xs text-white leading-tight">{name}</span>
    </Button>
  );
};

export default FilterEtcButton;
