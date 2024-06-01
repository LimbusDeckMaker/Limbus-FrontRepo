import useToggleButtons from "@hooks/useToggleButtons";
import FilterButton from "./FilterButton";
import { egoOptionsState, optionsState } from "@recoils/atoms";
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
  isIdentityPage?: boolean;
}

const FilterButtonGroup = ({
  title,
  content,
  src,
  buttonType,
  propertyToSaveTo,
  isIdentityPage = true,
}: FilterButtonGroupProps) => {
  const [buttons, toggleButton] = useToggleButtons(
    content.map((item) => item.name)
  );

  const [options, setOptions] = useRecoilState(optionsState);
  const [egoOptions, setEgoOptions] = useRecoilState(egoOptionsState);

  const savePropertyToOptions = (selectedButtons: string[]) => {
    if (isIdentityPage) {
      setOptions((prevOptions) => ({
        ...prevOptions,
        [propertyToSaveTo]: selectedButtons,
      }));
    } else {
      setEgoOptions((prevOptions) => ({
        ...prevOptions,
        [propertyToSaveTo]: selectedButtons,
      }));
    }
  };

  useEffect(() => {
    const initialSelectedButtons: string[] | number | undefined = isIdentityPage
      ? options[propertyToSaveTo]
      : egoOptions[propertyToSaveTo];

    if (initialSelectedButtons && Array.isArray(initialSelectedButtons)) {
      initialSelectedButtons.forEach((buttonName) => {
        const button = buttons.find((button) => button.name === buttonName);
        if (button) {
          toggleButton(buttonName);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    savePropertyToOptions(
      buttons.filter((button) => button.isSelected).map((button) => button.name)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
