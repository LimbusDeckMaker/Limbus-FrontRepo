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
      {/* 리세 홍보 */}
      <Banner
        imageUrl="https://limbus-image-bucket.s3.ap-northeast-2.amazonaws.com/%EB%A3%8C%EC%8A%88/Identity/%EB%A1%9C%EB%B3%B4%ED%86%A0%EB%AF%B8%20E.G.O::%EC%A0%81%EC%95%88%20%C2%B7%20%EC%B0%B8%ED%9A%8C/10410_gacksung.webp"
        spanText="신규 관리자를 위한"
        headingText="리세마라용 티어표 출시 (발푸밤 포함)"
        linkPath="/tier"
        linkText="리세 티어표 바로가기"
      />

      {/* 업데이트 */}
      <Banner
        imageUrl="https://limbus-image-bucket.s3.ap-northeast-2.amazonaws.com/%EC%9D%B4%EC%83%81/Identity/%EB%A1%9C%EB%B3%B4%ED%86%A0%EB%AF%B8%20E.G.O::%EC%97%84%EC%88%99%ED%95%9C%20%EC%95%A0%EB%8F%84/10110_gacksung.webp"
        spanText="9월 5일 업데이트"
        headingText="제4회 발푸르기스의 밤 정보 추가 완료"
        linkPath="/identity"
        linkText="인격 정보 바로가기"
      />

      {/* 신규 기능 */}
      <Banner
        imageUrl="https://limbus-image-bucket.s3.amazonaws.com/%EB%A1%9C%EC%9F%88/Identity/%EB%82%A8%EB%B6%80%20%EB%A6%AC%EC%9A%B0%20%ED%98%91%ED%9A%8C%204%EA%B3%BC%20%EB%B6%80%EC%9E%A5/10908_normal.webp"
        spanText="내가 가진 인격 키워드를 모르겠다고?"
        headingText="내 인격 분류 기능 추가"
        linkPath="/identity"
        linkText="바로가기"
      />
    </Carousel>
  );
};

export default MainCarousel;
