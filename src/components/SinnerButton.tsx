import React from "react";
import { Button, Avatar } from "@material-tailwind/react";

const SinnerButton = () => {
  return (
    <Button className="rounded-full py-1.5 px-1.5" placeholder={undefined}>
      <div className="flex items-center">
        <Avatar
          size="xs"
          variant="circular"
          className="h-6 w-6 -translate-x-0.5"
          alt="Tania Andrew"
          src="/assets/profile/faust.png"
          placeholder={undefined}
        />
        <span className="text-base tracking-[.2em] w-[110px]">히스클리프</span>
      </div>
    </Button>
  );
};

export default SinnerButton;
