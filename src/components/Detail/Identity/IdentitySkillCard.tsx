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
  type: string;
  resource: string;
  skillSeq: number;
  skillPower: number;
  coinPower: number;
  coinNum: number;
  atkWeight: number;
  level: number;
  normalEffect: string;
  coin1Effect: string;
  coin2Effect: string;
  coin3Effect: string;
  coin4Effect: string;
  coin5Effect: string;
}

const IdentitySkillCard = ({
  type,
  synchronization,
  skill,
}: SkillCardProps) => {
  const currentSkill = skill[synchronization];

  return (
    <div className="p-3 bg-primary-450 rounded-md mb-2 border border-primary-300">
      <div className="xl:flex xl:gap-3 items-center pb-2 lg:pb-4 ">
        {/* 스킬 이름 */}
        <div
          className={`text-sm sm:text-lg xl:text-xl font-bold pr-4 lg:p-0 pb-2 mb-2 xl:mb-0 border-b-4 border-primary-200 ${
            resourceColorMap[currentSkill.resource]
          }`}
        >
          {currentSkill.resource !== "없음" && (
            //  자원 이미지
            <img
              src={`/assets/resource/${currentSkill.resource}.webp`}
              alt="resourceImg"
              className="inline-block w-auto h-6 mr-1 mb-1"
            />
          )}
          <span className="pr-2">{type}</span>{" "}
          {/* 1 Skill, 2 Skill, 3 Skill, DEFENSE */}
          <span>{currentSkill.name}</span>
          {/* 공격 타입 이미지 */}
          <img
            src={`/assets/attackType/${currentSkill.type}.webp`}
            alt="attackTypeImg"
            className="inline-block w-auto h-8 ml-[1px] mb-1"
          />
        </div>

        {/* 스킬 스펙 */}
        <div className=" items-center text-primary-100 text-xs lg:text-base">
          {/* 윗단 */}
          <div className="flex items-center pb-2 gap-1 md:gap-3">
            <span className="flex items-center justify-center">
              {/* 코인 이미지 */}
              {[...Array(currentSkill.coinNum)].map((_, index) => (
                <img
                  key={index}
                  src={`/assets/coin/normal_coin.webp`}
                  alt="coinImg"
                  className="w-auto h-[1em] mr-[2px]"
                />
              ))}
            </span>
            <span className="flex items-center">
              <span className="w-[3em]">가중치 </span>
              {[...Array(currentSkill.atkWeight)].map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-600 ml-[3px] mb-0.5"
                ></div>
              ))}
            </span>
            {/* 만약 type 이 DEFENSE면 /assets/방어코인.webp 사용 */}

            <span className="">
              {type === "DEFENSE" ? "방어 레벨" : "공격 레벨"}{" "}
              <img
                src={
                  type === "DEFENSE"
                    ? "/assets/방어코인.webp"
                    : "/assets/공격 레벨.webp"
                }
                alt={type === "DEFENSE" ? "defenseTypeImg" : "attackTypeImg"}
                className="inline-block w-auto h-5 pr-1 mb-1"
              />
              <span className="text-white">{currentSkill.power}</span>
            </span>

            <span className="">
              스킬 위력{" "}
              <span className="text-white">{currentSkill.skillPower}</span>
            </span>
            <span className="">
              코인 위력{" "}
              <span className="text-white">{currentSkill.coinPower}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="text-xs sm:text-sm">
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
                    src={`/assets/coin/coin${index + 1}.webp`}
                    alt="coinImg"
                    className="mr-1 mt-0.5 w-auto h-4"
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

export default IdentitySkillCard;
