import { Typography } from "@material-tailwind/react";
import React from "react";
import KeywordHighlighted from "./KeywordHighlighted";

interface SkillCardProps {
  type: string;
  synchronization: number;
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

const SkillCard = ({ type, synchronization, skill }: SkillCardProps) => {
  const currentSkill = skill[synchronization];

  return (
    <div className="p-2 bg-primary-500 mb-2 ">
      <div className="xl:flex xl:gap-3 items-center pb-6 ">
        <div className="text-xl font-bold pr-4 lg:p-0 pb-4">
          <span className="pr-4">{type}</span>
          <span>{currentSkill.name}</span>
        </div>
        <div className=" items-center text-primary-100">
          <div className="flex pb-2">
            <span className="flex w-20 items-center justify-center pr-4">
              {[...Array(currentSkill.coinNum)].map((_, index) => (
                <img
                  key={index}
                  src={`/assets/coin/normal_coin.png`}
                  alt="coinImg"
                  style={{ width: "12px", height: "auto", marginRight: "2px" }}
                />
              ))}
            </span>
            <span className="flex items-center pr-4">
              가중치
              {[...Array(currentSkill.atkWeight)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "yellow",
                    marginLeft: "2px",
                  }}
                ></div>
              ))}
            </span>
            <span>{currentSkill.resource}</span>
            {currentSkill.resource !== "없음" && (
              <img
                src={`/assets/resource/${currentSkill.resource}.png`}
                alt="resourceImg"
                style={{ width: "20px", height: "auto", marginLeft: "4px" }}
              />
            )}
          </div>
          <div className="flex">
            <span className="flex pr-1 items-center w-16">
              {currentSkill.type}
              <img
                src={`/assets/attackType/${currentSkill.type}.png`}
                alt="resourceImg"
                style={{ width: "20px", height: "auto", marginLeft: "4px" }}
              />
            </span>
            <span className="pr-1 w-24">
              스킬 위력
              <span className="text-white">{currentSkill.skillPower}</span>
            </span>
            <span className=" w-24">
              코인 위력{" "}
              <span className="text-white">{currentSkill.coinPower}</span>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div>
          {/* <Typography placeholder={"power"}>{currentSkill.normalEffect}</Typography> */}
          <KeywordHighlighted text={currentSkill.normalEffect} />
          <div>
            {[...Array(currentSkill.coinNum)].map((_, index) => {
              const effectKey = `coin${index + 1}Effect`;
              const effect = (currentSkill as any)[effectKey];
              if (effect.trim() !== "") {
                // Splitting the effect string based on newline characters
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
    </div>
  );
};

export default SkillCard;
