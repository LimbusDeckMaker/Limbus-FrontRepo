import useToggleButtons from "@hooks/useToggleButtons";
import FilterButton from "./FilterButton";
import { optionsState } from "@recoils/atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

interface Content {
  name: string;
}

interface FilterButtonGroupProps {
  title: string;
  content: Content[];
  src: string;
  buttonType?: string;
  propertyToSaveTo: string;
}

const FilterButtonGroup = ({
  title,
  content,
  src,
  buttonType,
  propertyToSaveTo,
}: FilterButtonGroupProps) => {
  const [options, setOptions] = useRecoilState(optionsState);

  const [buttons, toggleButton] = useToggleButtons(
    content.map((item) => item.name)
  );

  const savePropertyToOptions = (selectedButtons: string[]) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [propertyToSaveTo]: selectedButtons,
    }));
  };

  useEffect(() => {
    savePropertyToOptions(
      buttons.filter((button) => button.isSelected).map((button) => button.name)
    );

    // console.log("Updated options:", options);
  }, [buttons]);

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
