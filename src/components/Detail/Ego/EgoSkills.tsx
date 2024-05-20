import React, { useEffect } from "react";
import EgoSkillCard from "./EgoSkillCard";
import { synchronizationState } from "@recoils/atoms";
import { useRecoilValue } from "recoil";

interface Props {
  EgoSkills: {
    EgoSkill1s: Skill[];
    EgoSkill2s: Skill[];
  };
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

const EgoSkills = ({ EgoSkills }: Props) => {
  const { EgoSkill1s, EgoSkill2s } = EgoSkills;
  const synchroOption = useRecoilValue(synchronizationState);

  const syschroNum = synchroOption.synchronization;

  return (
    <div>
      <EgoSkillCard type="1 Skill" synchronization={syschroNum} skill={EgoSkill1s} />
      <EgoSkillCard type="2 Skill" synchronization={syschroNum} skill={EgoSkill2s} />
    </div>
  );
};

export default EgoSkills;
