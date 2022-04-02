import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppTest } from "./pages/home";
import { Catalog } from "./pages/catalog";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<AppTest />} />
          <Route path="/" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
