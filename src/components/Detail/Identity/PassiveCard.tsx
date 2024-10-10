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
  // resource 문자열을 ',' 기준으로 분리
  const resources = passive.resource.split(",").map((res) => res.trim());
  // const hasMultipleResources = resources.length > 1;

  return (
    <div className="p-3 bg-primary-500 mb-2 rounded-md">
      <div className="xl:flex xl:gap-3 items-center pb-2 lg:pb-4">
        {/* <div
          className={`text-sm sm:text-lg xl:text-xl font-bold pr-4 lg:p-0 pb-2 mb-2 xl:mb-0 border-b-4 ${
            hasMultipleResources
              ? "border-primary-200"
              : resourceColorMap[resources[0]]
          }`}
        > */}
        <div
          className={`text-sm sm:text-lg xl:text-xl font-bold pr-4 lg:p-0 pb-2 mb-2 xl:mb-0 border-b-4 ${
            resourceColorMap[resources[0]]
          }`}
        >
          <span className="pr-4">{type}</span>
          <span>{passive.name}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 text-sm lg:text-base">
          {resources.map((res, index) => (
            <div key={index} className={`flex items-center gap-2 `}>
              {res !== "없음" && (
                <>
                  <img
                    src={`/assets/resource/${res}.webp`}
                    alt="resourceImg"
                    className="w-auto h-[1.3em] mb-0.5 inline-block"
                  />
                  <span>X</span>
                  <span>{passive.resQuantity}</span>
                  <span>{passive.activeCond}</span>
                </>
              )}
            </div>
          ))}
        </div>
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
