import React from "react";
import { useParams } from "react-router-dom";

const IdentityDetailPage = () => {
  const { id } = useParams();

  // 여기에서 id를 사용하여 해당 identity에 대한 정보를 가져와서 렌더링합니다.

  return (
    <div>
      <h2 className="text-primary-100">Identity Detail Page</h2>
      <p className="text-primary-100">ID: {id}</p>
      {/* 나머지 컴포넌트 내용 추가 */}
      test
    </div>
  );
};

export default IdentityDetailPage;
