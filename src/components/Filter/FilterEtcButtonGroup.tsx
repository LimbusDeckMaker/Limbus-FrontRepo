import useToggleButtons from "@hooks/useToggleButtons";
import FilterEtcButton from "./FilterEtcButton";
import { optionsState } from "@recoils/atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

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
  const [options, setOptions] = useRecoilState(optionsState);

  const [buttons, toggleButton] = useToggleButtons(
    content.map((item) => item.name)
  );

  const savePropertyToOptions = (selectedButtons: string[]) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      etcKeyword: selectedButtons,
    }));
  };

  useEffect(() => {
    savePropertyToOptions(
      buttons.filter((button) => button.isSelected).map((button) => button.name)
    );
  }, [buttons]);

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
