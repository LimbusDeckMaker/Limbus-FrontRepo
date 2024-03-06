import FilterEtcButton from "./FilterEtcButton";

interface Content {
  name: string;
}

interface FilterEtcButtonGroupProps {
  title: string;
  content: Content[];
}

const FilterEtcButtonGroup = ({
  title,
  content,
}: FilterEtcButtonGroupProps) => {
  return (
    <div>
      <span className="text-xs">{title}</span>
      <div className="grid grid-cols-3 gap-1.5">
        {content.map((item) => (
          <FilterEtcButton name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default FilterEtcButtonGroup;
