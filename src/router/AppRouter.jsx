import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { Error404, HeroesRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="error" element={<Error404 />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
