import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative h-28 md:h-72 lg:h-96 w-full font-sans md:font-sansBold">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://limbus-image-bucket.s3.ap-northeast-2.amazonaws.com/%ED%8C%8C%EC%9A%B0%EC%8A%A4%ED%8A%B8/Identity/%EB%A9%80%ED%8B%B0%ED%81%AC%EB%9E%99%20%EC%82%AC%EB%AC%B4%EC%86%8C%20%EB%8C%80%ED%91%9C/10210_normal.webp)",
        }}
      ></div>

      {/* 오버레이: 배경 이미지 위에 반투명한 레이어 */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* 텍스트 오버레이 */}
      <div className="relative z-10 flex items-center justify-start h-full pl-10">
        <div className="text-white">
          <span className="text-xs md:text-xl">신규 관리자를 위한</span>
          <h1 className="text-md md:text-4xl font-bold mb-3 md:mb-8">
            리세마라용 티어표 출시
          </h1>
          <Link
            to="/tier"
            className="px-2 md:px-4 pt-2 md:pt-3 pb-1 md:pb-2 border border-white text-xs md:text-sm font-sans hover:animate-pulse"
          >
            바로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
