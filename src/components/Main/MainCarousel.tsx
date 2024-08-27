import { Carousel } from "@material-tailwind/react";
import Banner from "@components/Main/Banner";

const MainCarousel = () => {
  return (
    <Carousel
      placeholder=""
      className=""
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {/* 업데이트 */}
      <Banner
        imageUrl="https://limbus-image-bucket.s3.amazonaws.com/%EC%98%A4%ED%8B%B0%EC%8A%A4/Identity/W%EC%82%AC%203%EB%93%B1%EA%B8%89%20%EC%A0%95%EB%A6%AC%20%EC%9A%94%EC%9B%90%20%ED%8C%80%EC%9E%A5/11110_gacksung.webp"
        spanText="8월 27일 업데이트"
        headingText="소속 검색 기능 수정완료!"
        linkPath="/identity"
        linkText="인격 정보 바로가기"
      />

      {/* 리세 홍보 */}
      <Banner
        imageUrl="https://limbus-image-bucket.s3.ap-northeast-2.amazonaws.com/%ED%9E%88%EC%8A%A4%ED%81%B4%EB%A6%AC%ED%94%84/Identity/%EC%99%80%EC%9D%BC%EB%93%9C%ED%97%8C%ED%8A%B8/10710_gacksung.webp"
        spanText="신규 관리자를 위한"
        headingText="리세마라용 티어표 출시"
        linkPath="/tier"
        linkText="리세 티어표 바로가기"
      />
    </Carousel>
  );
};

export default MainCarousel;
