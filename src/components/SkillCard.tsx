import { Typography } from "@material-tailwind/react";
import React from "react";

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
  quantity: number;
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
    <div className="p-2 bg-primary-500 mb-2">
      <div className="flex items-center">
        <div className="text-xl font-bold pr-2">
          <span className="pr-2">{type}</span>
          <span>{currentSkill.name}</span>
        </div>
        <div className="flex items-center text-primary-100">
          {[...Array(currentSkill.coinNum)].map((_, index) => (
            <img
              key={index}
              src={`/assets/coin/normal_coin.png`}
              alt="coinImg"
              style={{ width: "12px", height: "auto", marginRight: "2px" }}
            />
          ))}
          <span className="flex items-center">
            가중치
            {[...Array(currentSkill.atkWeight)].map((_, index) => (
              <div
                key={index}
                style={{ width: "12px", height: "12px", backgroundColor: "yellow", marginLeft: "2px" }}
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

          <span className="text-wh">{currentSkill.type}</span>
          <img
            src={`/assets/attackType/${currentSkill.type}.png`}
            alt="resourceImg"
            style={{ width: "20px", height: "auto", marginLeft: "4px" }}
          />
          <span>
            스킬 위력<span className="text-white">{currentSkill.skillPower}</span>
          </span>
          <span>
            코인 위력 <span className="text-white">{currentSkill.coinPower}</span>
          </span>
        </div>
      </div>

      <div>
        <div>
          <Typography placeholder={"power"}>{currentSkill.normalEffect}</Typography>
          <div>
            {[...Array(currentSkill.coinNum)].map((_, index) => {
              const effectKey = `coin${index + 1}Effect`;
              const effect = (currentSkill as any)[effectKey];
              if (effect.trim() !== "") {
                return (
                  <div className="flex items-start" key={index}>
                    <img
                      src={`/assets/coin/coin${index + 1}.png`}
                      alt="coinImg"
                      style={{ width: "14px", height: "auto" }}
                    />
                    <Typography placeholder={"power"}>{effect}</Typography>
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
