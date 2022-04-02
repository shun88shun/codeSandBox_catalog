import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppTest } from "./pages/home";
import { Catalog } from "./pages/catalog";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppTest />} />
          <Route path="/test" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
