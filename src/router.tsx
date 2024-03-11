import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@components/layout/MainLayout";
import DictionaryPage from "@pages/DictionaryPage";
import MainPage from "@pages/MainPage";
import IdentityPage from "@pages/IdentityPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/identity" element={<IdentityPage />} />
          <Route path="/ego" element={<DictionaryPage />} />
          <Route path="/building" element={<div>덱 빌딩</div>} />
          <Route path="/tier" element={<div>티어리스트</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
