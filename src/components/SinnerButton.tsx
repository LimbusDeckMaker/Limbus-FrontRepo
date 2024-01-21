import React from "react";
import { Button, Avatar } from "@material-tailwind/react";

interface Props {
  name: string;
  src: string;
  className?: string;
  onClick?: () => void;
}

const SinnerButton = ({ name, src, className, onClick }: Props) => {
  let padding = "px-2 md:px-3";

  if (name.length === 3) padding = "px-1 md:px-2";
  if (name.length === 4) padding = "px-0.5 md:px-1";
  if (name.length === 5) padding = "px-0 md:px-[0.05rem]";

  return (
    <Button
      className={`rounded-full py-1.5 px-1.5 bg-white w-[105px] md:w-[150px] ${className}`}
      placeholder={undefined}
      onClick={onClick}
    >
      <div className="flex items-center">
        <Avatar
          size="xs"
          variant="circular"
          className="h-4 w-4 md:h-7 md:w-7 -translate-x-0.5"
          alt="Tania Andrew"
          src={`/assets/profile/${src}.png`}
          placeholder={undefined}
        />
        <div className="inline w-[75px] md:w-[105px]">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className={`text-xs md:text-lg font-sans text-center inline-block ${padding}`}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </Button>
  );
};

export default SinnerButton;
