import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * 헤더, 푸터 등을 포함한 메인 레이아웃
 * 가로 여백: px-4 md:px-10
 */
const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="px-4 md:px-10 py-4">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
