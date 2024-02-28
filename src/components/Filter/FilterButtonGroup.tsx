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
  return (
    <div>
      <span className=" text-xs">{title}</span>
      <div className="grid grid-cols-6 gap-1.5">
        {content.map((item) => (
          <FilterButton
            name={item.name}
            imgSrc={src + item.name + ".png"}
            type={buttonType}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterButtonGroup;
