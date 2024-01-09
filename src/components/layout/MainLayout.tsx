import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <p>메인 레이아웃</p>
      <Outlet />
    </div>
  );
};

export default MainLayout;
