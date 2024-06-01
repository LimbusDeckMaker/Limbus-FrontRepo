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

  // Remove the level property from the passives
  const filteredPassives = identityPassives.map(({ level, ...passive }) => passive);

  // Render PassiveCard components conditionally based on the length of filteredPassives
  return (
    <div>
      {filteredPassives.length > syschroNum && (
        <PassiveCard type="Passive" synchronization={syschroNum} passive={filteredPassives[syschroNum]} />
      )}
      {filteredPassives.length > syschroNum + 2 && (
        <PassiveCard type="Support Passive" synchronization={syschroNum} passive={filteredPassives[syschroNum + 2]} />
      )}
      {filteredPassives.length > syschroNum + 4 && (
        <PassiveCard type="Support Passive" synchronization={syschroNum} passive={filteredPassives[syschroNum + 4]} />
      )}
    </div>
  );
};

export default IdentityPassive;
