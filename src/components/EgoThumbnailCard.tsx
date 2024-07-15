import { Link } from "react-router-dom";

interface EgoThumbnailCardProps {
  id: number;
  grade: number;
  name: string;
  character: string;
  imageZoomIn: string;
  imageZoomOut: string;
}

const EgoThumbnailCard = ({
  id,
  grade,
  name,
  character,
  imageZoomIn,
  imageZoomOut,
}: EgoThumbnailCardProps) => {
  const calculateTextSize = (text: string): string => {
    return text.length > 10
      ? "text-[0.46rem] sm:text-[0.65rem] leading-[1.05] sm:leading-[1.1]"
      : "text-[0.5rem] sm:text-[0.8rem]";
  };

  return (
    <Link to={`${id}`}>
      <div className=" bg-primary-500 rounded-lg p-[10px] hover:scale-105 relative h-fit">
        <div className="flex justify-between items-center">
          <div className="w-14 md:w-20 lg:w-16 xl:w-20 mx-auto">
            <img
              src={`/assets/common/${grade}.webp`}
              className="h-4 md:h-6 lg:h-4 xl:h-6 w-auto"
              alt="ego grade"
            />
          </div>
          <div
            className={`flex flex-col gap-0 justify-center text-center items-center w-full h-6 sm:h-10 ${calculateTextSize(
              name
            )}`}
          >
            <span>{name}</span>
            <span>{character}</span>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <img
            src={imageZoomOut}
            alt="imageZoomOut"
            className="rounded-full w-1/2 relative -mr-5 z-10"
          />
          <img
            src={imageZoomIn}
            alt="imageZoomIn"
            className="rounded-full w-1/2 relative z-20"
          />
        </div>
      </div>
    </Link>
  );
};

export default EgoThumbnailCard;
