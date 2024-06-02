import PassiveCard from "./PassiveCard";
import { synchronizationState } from "@recoils/atoms";
import { useRecoilValue } from "recoil";

interface Props {
  identityPassives: Passives[];
}

interface Passives {
  name: string;
  isMain: boolean;
  resource: string;
  resQuantity: number;
  activeCond: string;
  effect: string;
  level: number;
}

const IdentityPassive = ({ identityPassives }: Props) => {
  const synchroOption = useRecoilValue(synchronizationState);
  const syschroNum = synchroOption.synchronization;

  const filteredPassives = identityPassives.map(({ level, ...passive }) => passive);
  console.log(filteredPassives);

  const passivesToRender = [0, 2, 4]
    .map((offset) => {
      const index = syschroNum + offset;
      if (filteredPassives.length > index) {
        return (
          <PassiveCard
            key={index}
            type={filteredPassives[index].isMain ? "Passive" : "Support Passive"}
            synchronization={syschroNum}
            passive={filteredPassives[index]}
          />
        );
      }
      return null;
    })
    .filter(Boolean);

  return <div>{passivesToRender}</div>;
};

export default IdentityPassive;
