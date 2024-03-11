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
    <div className="bg-primary-450">
      <Header />
      <div className="w-full max-w-7xl py-4 mx-auto px-4 md:px-16 font-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
