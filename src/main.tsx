import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import SmoothScroll from "./components/SmoothScroll";
import LandingPage from "./pages/landing-page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  </StrictMode>,
);
