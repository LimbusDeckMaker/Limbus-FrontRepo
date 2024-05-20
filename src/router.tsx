import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@components/layout/MainLayout";
import MainPage from "@pages/MainPage";
import IdentityDetailPage from "@pages/IdentityDetailPage";
import IdentityPage from "@pages/IdentityPage";
import EgoDetailPage from "@pages/EgoDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/identity" element={<IdentityPage />} />
          <Route path="/identity/:id" element={<IdentityDetailPage />} />
          <Route path="/ego" element={<div>에고 목록</div>} />
          <Route path="/ego/:id" element={<EgoDetailPage />} />
          <Route path="/building" element={<div>덱 빌딩</div>} />
          <Route path="/tier" element={<div>티어리스트</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
