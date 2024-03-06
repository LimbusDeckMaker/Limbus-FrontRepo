import useToggleButtons from "@hooks/useToggleButtons";
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
  const [buttons, toggleButton] = useToggleButtons(
    content.map((item) => item.name)
  );

  return (
    <div>
      <span className="text-xs">{title}</span>
      <div className="grid grid-cols-3 gap-1.5">
        {content.map((item, index) => (
          <FilterEtcButton
            key={index}
            name={item.name}
            isSelected={buttons[index].isSelected}
            onClick={() => toggleButton(item.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterEtcButtonGroup;
