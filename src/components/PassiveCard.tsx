import React from "react";
import KeywordHighlighted from "./KeywordHighlighted";

interface PassiveCardProps {
  type: string; // 패시브, 서포트 패시브
  synchronization: number; // 3동기화 기준 0, 4동기화 기준 1
  passive: Passive;
}

interface Passive {
  name: string;
  isMain: boolean;
  resource: string;
  resQuantity: number;
  activeCond: string;
  effect: string;
  level: number; // 동기화 레벨
}

const PassiveCard = ({ type, synchronization, passive }: PassiveCardProps) => {
  return (
    <div className="p-3 bg-primary-500 mb-2">
      <div className="xl:flex xl:gap-3 items-center pb-6 ">
        <div className={`text-xl font-bold pr-4 lg:p-0 pb-4 border-b-4 ${resourceColorMap[passive.resource]}`}>
          <span className="pr-4">{type}</span>
          <span>{passive.name}</span>
        </div>
        <img
          src={`/assets/resource/${passive.resource}.png`}
          alt="resourceImg"
          style={{
            width: "auto",
            height: "1.1em",
            marginRight: "4px",
            marginBottom: "2px",
          }}
          className="inline-block"
        />
        <span className="pr-2">X</span>
        <span className="pr-2">{passive.resQuantity}</span>
        <span className="pr-4">{passive.activeCond}</span>
      </div>
      <KeywordHighlighted text={passive.effect} />
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
