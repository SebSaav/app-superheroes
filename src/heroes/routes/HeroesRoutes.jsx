import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../design";
import { DcPage, Error404, HeroPage, InicioPage, MarvelPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="inicio" element={<InicioPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="error" element={<Error404 />} />
        <Route path="heroe/:heroId" element={<HeroPage />} />
        <Route path="/*" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
};
