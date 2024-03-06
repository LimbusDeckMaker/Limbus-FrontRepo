import useToggleButtons from "@hooks/useToggleButtons";
import FilterButton from "./FilterButton";

interface Content {
  name: string;
}

interface FilterButtonGroupProps {
  title: string;
  content: Content[];
  src: string;
  buttonType?: string;
}

const FilterButtonGroup = ({
  title,
  content,
  src,
  buttonType,
}: FilterButtonGroupProps) => {
  const [buttons, toggleButton] = useToggleButtons(
    content.map((item) => item.name)
  );

  return (
    <div>
      <span className=" text-xs">{title}</span>
      <div className="grid grid-cols-6 gap-1.5">
        {content.map((item, index) => (
          <FilterButton
            key={`button:${index}`}
            name={item.name}
            imgSrc={src + item.name + ".png"}
            type={buttonType}
            isSelected={buttons[index].isSelected}
            onClick={() => toggleButton(item.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterButtonGroup;
