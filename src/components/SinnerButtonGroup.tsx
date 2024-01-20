import React, { useState } from "react";

import SinnerButton from "@components/SinnerButton";

// 수감자 목록
const sinners = [
  {
    name: "이상",
    src: "yisang",
  },
  {
    name: "파우스트",
    src: "faust",
  },
  {
    name: "돈키호테",
    src: "donquixote",
  },
  {
    name: "료슈",
    src: "ryoshu",
  },
  {
    name: "뫼르소",
    src: "meursault",
  },
  {
    name: "홍루",
    src: "honglu",
  },
  {
    name: "히스클리프",
    src: "heathcliff",
  },
  {
    name: "이스마엘",
    src: "ishmael",
  },
  {
    name: "로쟈",
    src: "rodion",
  },
  {
    name: "싱클레어",
    src: "sinclair",
  },
  {
    name: "오티스",
    src: "outis",
  },
  {
    name: "그레고르",
    src: "gregor",
  },
];

// 선택 전 스타일
const notSelectedcolorVariants: Record<string, string> = {
  yisang: "text-yisang border-yisang",
  faust: "text-faust border-faust",
  donquixote: "text-donquixote border-donquixote",
  ryoshu: "text-ryoshu border-ryoshu",
  meursault: "text-meursault border-meursault",
  honglu: "text-honglu border-honglu",
  heathcliff: "text-heathcliff border-heathcliff",
  ishmael: "text-ishmael border-ishmael",
  rodion: "text-rodion border-rodion",
  sinclair: "text-sinclair border-sinclair",
  outis: "text-outis border-outis",
  gregor: "text-gregor border-gregor",
};

// 선택 후 스타일
const selectedcolorVariants: Record<string, string> = {
  yisang: "bg-yisang border-yisang",
  faust: "bg-faust border-faust",
  donquixote: "bg-donquixote border-donquixote",
  ryoshu: "bg-ryoshu border-ryoshu",
  meursault: "bg-meursault border-meursault",
  honglu: "bg-honglu border-honglu",
  heathcliff: "bg-heathcliff border-heathcliff",
  ishmael: "bg-ishmael border-ishmael",
  rodion: "bg-rodion border-rodion",
  sinclair: "bg-sinclair border-sinclair",
  outis: "bg-outis border-outis",
  gregor: "bg-gregor border-gregor",
};

const SinnerButtonGroup = () => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const toggleButton = (name: string) => {
    setSelectedButtons((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((btnName) => btnName !== name)
        : [...prevSelected, name]
    );
  };

  return (
    <div className="overflow-x-scroll">
      {/* <div className="flex"> */}
      <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-2 w-fit">
        {sinners.map((sinner) => (
          <SinnerButton
            key={sinner.name}
            onClick={() => toggleButton(sinner.name)}
            name={sinner.name}
            src={sinner.src}
            className={`${
              selectedButtons.includes(sinner.name)
                ? `${selectedcolorVariants[sinner.src]} text-white shadow-inner`
                : notSelectedcolorVariants[sinner.src]
            } border-2`}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default SinnerButtonGroup;
