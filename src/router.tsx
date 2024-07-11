import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@components/layout/MainLayout";
import MainPage from "@pages/MainPage";
import IdentityDetailPage from "@pages/IdentityDetailPage";
import IdentityPage from "@pages/IdentityPage";
import EgoDetailPage from "@pages/EgoDetailPage";
import EgoPage from "@pages/EgoPage";
import Preparing from "@components/Preparing";
import PrivacyPolicy from "@pages/PrivacyPolicy";

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
          <Route path="/building" element={<Preparing />} />
          <Route path="/tier" element={<Preparing />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
