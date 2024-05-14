import React from "react";

interface passive {
  name: string;
  isMain: boolean;
  resource: string;
  resQuantity: number;
  activeCond: string;
  effect: string;
  level: number; // 동기화 레벨
}

const PassiveCard = ({ name, isMain, resource, resQuantity, activeCond, effect, level }: passive) => {
  return (
    <div className="p-3 bg-primary-500 mb-2">
      <div className="xl:flex xl:gap-3 items-center pb-6 ">
        <div className={`text-xl font-bold pr-4 lg:p-0 pb-4 border-b-4 ${resourceColorMap[resource]}`}>
          <img
            src={`/assets/resource/${resource}.png`}
            alt="resourceImg"
            style={{
              width: "auto",
              height: "1.1em",
              marginRight: "4px",
              marginBottom: "2px",
            }}
            className="inline-block"
          />
          {name}
        </div>
        {isMain ? <span>주</span> : <span>부</span>}
        {resource}
        {resQuantity}
        {activeCond}
        {effect}
        {level}
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
