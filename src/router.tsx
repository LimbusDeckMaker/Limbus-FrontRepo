import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@components/layout/MainLayout";
import MainPage from "@pages/MainPage";
import IdentityDetailPage from "@pages/IdentityDetailPage";
import IdentityPage from "@pages/IdentityPage";
import EgoDetailPage from "@pages/EgoDetailPage";
import EgoPage from "@pages/EgoPage";
import TierListPage from "@pages/TierListPage";
import KeywordTierListPage from "@pages/KeywordTierListPage";
import DeckListPage from "@pages/DeckListPage";
// import Preparing from "@components/Preparing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/identity" element={<IdentityPage />} />
          <Route path="/identity/:id" element={<IdentityDetailPage />} />
          <Route path="/ego" element={<EgoPage />} />
          <Route path="/ego/:id" element={<EgoDetailPage />} />
          {/* <Route path="/building" element={<Preparing />} />
          <Route path="/tier" element={<Preparing />} /> */}
          <Route path="/tier" element={<TierListPage />} />
          <Route path="/keyword" element={<KeywordTierListPage />} />
          <Route path="/deck" element={<DeckListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
