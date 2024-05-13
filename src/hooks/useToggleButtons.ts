import { optionsState, egoOptionsState } from "@recoils/atoms";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

interface ToggleButton {
  name: string;
  isSelected: boolean;
}

const useToggleButtons = (
  initialButtons: string[],
  propertyToSaveTo: string
): [ToggleButton[], (name: string) => void] => {
  const options = useRecoilValue(optionsState);
  const egoOptions = useRecoilValue(egoOptionsState);
  const [buttons, setButtons] = useState<ToggleButton[]>([]);

  const isIdentityPage = useLocation().pathname.includes("identity");

  useEffect(() => {
    const initialSelectedButtons: string[] | number | undefined = isIdentityPage
      ? options[propertyToSaveTo]
      : egoOptions[propertyToSaveTo];

    if (initialSelectedButtons && Array.isArray(initialSelectedButtons)) {
      const initializedButtons = initialButtons.map((name) => ({
        name,
        isSelected: initialSelectedButtons.includes(name),
      }));
      setButtons(initializedButtons);
    } else {
      const initializedButtons = initialButtons.map((name) => ({
        name,
        isSelected: false,
      }));
      setButtons(initializedButtons);
    }
  }, [options, egoOptions]);

  const toggleButton = (name: string) => {
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.name === name
          ? { ...button, isSelected: !button.isSelected }
          : button
      )
    );

    return buttons;
  };

  return [buttons, toggleButton];
};

export default useToggleButtons;
