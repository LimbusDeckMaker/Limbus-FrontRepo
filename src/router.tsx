import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@components/layout/MainLayout";
import DictionaryPage from "@pages/DictionaryPage";
import MainPage from "@pages/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/building" element={<div>덱 빌딩</div>} />
          <Route path="/tier" element={<div>티어리스트</div>} />
          <Route path="/notice" element={<div>공지사항</div>} />
          <Route path="/ask" element={<div>문의하기</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
