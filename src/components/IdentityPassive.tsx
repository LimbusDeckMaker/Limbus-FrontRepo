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

  return (
    <div>
      <PassiveCard type="Passive" synchronization={syschroNum} passive={filteredPassives[syschroNum]} />
      <PassiveCard type="Support Passive" synchronization={syschroNum} passive={filteredPassives[syschroNum + 2]} />
    </div>
  );
};

export default IdentityPassive;
