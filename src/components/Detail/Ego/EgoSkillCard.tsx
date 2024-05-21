import React from "react";
import KeywordHighlighted from "../KeywordHighlighted";

interface SkillCardProps {
  type: string;
  synchronization: number; // 3동기화 기준 0, 4동기화 기준 1
  skill: Skill[];
}

interface Skill {
  name: string;
  power: string;
  mentalConsume: number; // 정신력 소모량
  atkType: string;
  resource: string;
  skillPower: number;
  coinPower: number;
  atkWeight: number;
  construeLevel: number;
  coinNum: number;
  normalEffect: string;
  coin1Effect: string;
  coin2Effect: string;
  coin3Effect: string;
  coin4Effect: string;
  coin5Effect: string;
}

const EgoSkillCard = ({ type, synchronization, skill }: SkillCardProps) => {
  const currentSkill = skill[synchronization];

  return (
    <div className="p-3 bg-primary-500 mb-2">
      <div className="xl:flex xl:gap-3 items-center pb-2 lg:pb-4 ">
        {/* 스킬 이름 */}
        <div
          className={`text-sm sm:text-lg xl:text-xl font-bold pr-4 lg:p-0 pb-2 mb-2 xl:mb-0 border-b-4 ${
            resourceColorMap[currentSkill.resource]
          }`}
        >
          {currentSkill.resource !== "없음" && (
            <img
              src={`/assets/resource/${currentSkill.resource}.png`}
              alt="resourceImg"
              className="inline-block w-auto h-6 mr-1 mb-1"
            />
          )}
          <span className="pr-4">{type}</span> {/* 1 Skill, 2 Skill, 3 Skill, DEFENSE */}
          <span>{currentSkill.name}</span>
          <img
            src={`/assets/attackType/${currentSkill.atkType}.png`}
            alt="attackTypeImg"
            className="inline-block w-auto h-8 ml-[1px] mb-1"
          />
        </div>
        {/* 스킬 스펙 */}
        <div className=" items-center text-primary-100 text-xs lg:text-base">
          {/* 윗단 */}
          <div className="sm:flex pb-2 items-center gap-1 md:gap-3">
            <span className="flex items-center">
              <span className="pr-1">정신력 소모량</span>
              <div className="flex items-center gap-1">
                <img
                  src={`/assets/정신 소모량.png`}
                  alt="attackTypeImg"
                  className="inline-block w-auto h-5 ml-[1px] mb-1"
                />
                <span className="text-white">{currentSkill.mentalConsume}</span>
              </div>
            </span>
            <span className="flex items-center">
              <span className="w-[3em]">가중치 </span>
              {[...Array(currentSkill.atkWeight)].map((_, index) => (
                <div key={index} className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-600 ml-[3px] mb-0.5"></div>
              ))}
            </span>
            <span className="mr-2 sm:mr-0">
              스킬 위력 <span className="text-white">{currentSkill.skillPower}</span>
            </span>
            <span className="">
              코인 위력 <span className="text-white">{currentSkill.coinPower}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="text-sm sm:text-base">
        {/* <Typography placeholder={"power"}>{currentSkill.normalEffect}</Typography> */}
        <KeywordHighlighted text={currentSkill.normalEffect} />
        <div>
          {[...Array(currentSkill.coinNum)].map((_, index) => {
            const effectKey = `coin${index + 1}Effect`;
            const effect = (currentSkill as any)[effectKey];
            if (effect.trim() !== "") {
              const effectParts = effect.split("\n");

              return (
                <div className="flex items-start" key={index}>
                  <img
                    src={`/assets/coin/coin${index + 1}.png`}
                    alt="coinImg"
                    className="mr-1 mt-0.5"
                    style={{ width: "auto", height: "16px" }}
                  />
                  <div>
                    {effectParts.map((part: any, partIndex: any) => (
                      <React.Fragment key={partIndex}>
                        <KeywordHighlighted text={part} />
                        {partIndex !== effectParts.length - 1}
                      </React.Fragment>
                    ))}
                  </div>
                  {/* <Typography placeholder={"power"}>{effect}</Typography> */}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
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

export default EgoSkillCard;
