const Notice = () => {
  return (
    <div>
      <h1 className="text-base md:text-xl font-sansBold">공지사항</h1>
      <h2 className="py-10">📢서버 일시중지 안내드립니다!</h2>
      <p className="text-xs md:text-base border-solid border-primary-100 p-10">
        우선 단빵숲 사이트에 많은 관심 감사드립니다.
        <br />
        현재 생각보다 많은 트래픽으로 인해 예측 범위를 초과하는 서버 비용이
        부가되어 서버가 닫힌 상태입니다.
        <br />
        빠른 시일 내에 복구할 수 있도록 노력하겠습니다.
        <br />
        또한 사전 예고 없이 사이트 내 광고가 추가될 수 있는 점 양해부탁드립니다.
        감사합니다.
      </p>
    </div>
  );
};

export default Notice;
