import React from "react";

interface Props {
  identitySkills: {
    identitySkill1s: Skill[];
    identitySkill2s: Skill[];
    identitySkill3s: Skill[];
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

const IdentitySkills: React.FC<Props> = ({ identitySkills }) => {
  const { identitySkill1s, identitySkill2s, identitySkill3s } = identitySkills;

  // Selecting only the first 4 skills
  const selectedSkill1s = identitySkill1s.slice(0, 4);
  const selectedSkill2s = identitySkill2s.slice(0, 4);
  const selectedSkill3s = identitySkill3s.slice(0, 4);

  return (
    <div>
      <div>
        <h2>Identity Skill 1s</h2>
        <ul>
          {selectedSkill1s.map((skill, index) => (
            <li key={index}>
              Name: {skill.name}, Power: {skill.power}, Type: {skill.type}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Identity Skill 2s</h2>
        <ul>
          {selectedSkill2s.map((skill, index) => (
            <li key={index}>
              Name: {skill.name}, Power: {skill.power}, Type: {skill.type}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Identity Skill 3s</h2>
        <ul>
          {selectedSkill3s.map((skill, index) => (
            <li key={index}>
              Name: {skill.name}, Power: {skill.power}, Type: {skill.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IdentitySkills;
