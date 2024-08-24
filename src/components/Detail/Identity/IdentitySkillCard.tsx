import React from "react";
import KeywordHighlighted from "../KeywordHighlighted";
import { Tooltip } from "@material-tailwind/react";

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
      {currentSkill.name === "비탄하고, 애탄하며, 파탄하라" && (
        <Tooltip
          placement="right"
          content={
            <div>
              <span className="text-xs">
                데이터베이스 정해진 크기보다 와일드헌트 히스클리프의 '비탄하고,
                애탄하며, 파탄하라' 스킬의 텍스트가 길어 표시되지 않은 부분이
                있습니다.
              </span>
              <br />
              <br />
              <span className="text-xs"> 3동기화</span>
              <br />
              <span className="text-xs">
                {" "}
                [공격 종료시] 자신의 정신력이 0 미만이면, 정신력 10 회복.
                정신력이 0보다 낮을수록 정신력 추가 회복 (차이 1당 1 회복, 최대
                25)
                <br />
                [턴 종료시] 듀라한 제거
              </span>
              <br />
              <br />
              <span className="text-xs"> 4동기화</span>
              <br />
              <span className="text-xs">
                {" "}
                [공격 종료시] 자신의 정신력이 0 미만이면, 정신력 10 회복.
                정신력이 0보다 낮을수록 정신력 추가 회복 (차이 1당 2 회복, 최대
                50)
                <br />
                [턴 종료시] 듀라한 제거
              </span>
              <br />
              <br />
              <span className="text-xs">
                빠르게 수정하도록 하겠습니다. 불편을 드려 죄송합니다.
              </span>
            </div>
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-3.5 w-3.5 cursor-pointer text-primary-100 ml-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </Tooltip>
      )}
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
