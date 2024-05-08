import React, { useState } from "react";

import SinnerButtonGroup from "@components/SinnerButtonGroup";
import FilteringGroup from "@components/FilteringGroup";
import { Button, Switch } from "@material-tailwind/react";
import KeywordModal from "@components/KeywordModal";

// 안씀

const DictionaryPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen((prev: boolean) => !prev);

  return (
    <div className="">
      <SinnerButtonGroup />
      <FilteringGroup />
      <div className="flex gap-2 h-9 justify-between items-center lg:justify-center">
        <div className="lg:mr-4">
          <Button
            size="sm"
            variant="outlined"
            className="!text-xs font-gLight md:font-sans md:text-base lg:text-lg rounded-full py-0.5 md:py-1 px-2 md:px-3 border-2 border-primary-300"
            onClick={handleOpen}
            placeholder={undefined}
          >
            키워드
          </Button>
          <KeywordModal open={open} handler={handleOpen} />
        </div>
        <div className="flex gap-2 md:gap-4 text-[0.5rem] md:text-xs lg:text-base">
          <Switch
            color="indigo"
            label="4동기화 정보"
            crossOrigin={undefined}
            labelProps={{
              className: "ml-1",
            }}
            circleProps={{
              className: "w-4 h-4 ml-1",
            }}
          />
          <Switch
            color="indigo"
            label="동기화 일러스트"
            crossOrigin={undefined}
            labelProps={{
              className: "ml-1",
            }}
            circleProps={{
              className: "w-4 h-4 ml-1",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DictionaryPage;
