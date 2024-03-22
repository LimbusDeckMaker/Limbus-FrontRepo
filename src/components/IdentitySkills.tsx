import React from "react";
import SkillCard from "./SkillCard";

interface Props {
  identitySkills: {
    identitySkill1s: Skill[];
    identitySkill2s: Skill[];
    identitySkill3s: Skill[];
    identityDefSkills: Skill[];
  };
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

const IdentitySkills = ({ identitySkills }: Props) => {
  const { identitySkill1s, identitySkill2s, identitySkill3s, identityDefSkills } = identitySkills;

  const selectedSkill1s = identitySkill1s.slice(0, 4);
  const selectedSkill2s = identitySkill2s.slice(0, 4);
  const selectedSkill3s = identitySkill3s.slice(0, 4);
  const selectedDefSkills = identityDefSkills.slice(0, 4);

  return (
    <div>
      <div>
        <SkillCard type="1 Skill" synchronization={0} skill={selectedSkill1s} />
        <SkillCard type="2 Skill" synchronization={0} skill={selectedSkill2s} />
        <SkillCard type="3 Skill" synchronization={0} skill={selectedSkill3s} />
        <SkillCard type="DEFENSE" synchronization={0} skill={selectedDefSkills} />
      </div>
    </div>
  );
};

export default IdentitySkills;
