import React from "react";
import KeywordHighlighted from "../KeywordHighlighted";

interface PassiveCardProps {
  type: string; // 패시브, 서포트 패시브
  passive: Passive;
}

interface Passive {
  name: string;
  isMain: boolean;
  resource: string;
  resQuantity: number;
  activeCond: string;
  effect: string;
}

const PassiveCard = ({ type, passive }: PassiveCardProps) => {
  return (
    <div className="p-3 bg-primary-500 mb-2 rounded-md">
      <div className="xl:flex xl:gap-3 items-center pb-2 lg:pb-4">
        <div
          className={`text-sm sm:text-lg xl:text-xl font-bold pr-4 lg:p-0 pb-2 mb-2 xl:mb-0 border-b-4 border-primary-200 ${
            resourceColorMap[passive.resource]
          }`}
        >
          <span className="pr-4">{type}</span>
          <span>{passive.name}</span>
        </div>
        {passive.resource !== "없음" && (
          <div className="flex gap-2 text-sm lg:text-base">
            <img
              src={`/assets/resource/${passive.resource}.webp`}
              alt="resourceImg"
              className="w-auto h-[1.3em] mb-0.5 inline-block"
            />
            <span>X</span>
            <span>{passive.resQuantity}</span>
            <span>{passive.activeCond}</span>
          </div>
        )}
      </div>
      <div className="text-sm sm:text-base">
        <KeywordHighlighted text={passive.effect} />
      </div>
    </div>
  );
};

const resourceColorMap: { [key: string]: string } = {
  분노: "border-b-res-red",
  색욕: "border-b-res-orange",
  나태: "border-b-res-yellow",
  탐식: "border-b-res-green",
  우울: "border-b-res-blue",
  오만: "border-b-res-navy",
  질투: "border-b-res-purple",
};

export default PassiveCard;
