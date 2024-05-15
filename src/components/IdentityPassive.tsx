import PassiveCard from "./PassiveCard";

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
  console.log(identityPassives);

  return (
    <div>
      <PassiveCard type="Passive" synchronization={0} passive={identityPassives[0]} />
      <PassiveCard type="Support Passive" synchronization={0} passive={identityPassives[1]} />
    </div>
  );
};

export default IdentityPassive;
