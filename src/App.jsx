import { Route, Routes } from "react-router-dom";
import { FourthDesign } from "./pages/FourthDesign";
import { FirstDesign } from "./pages/FirstDesign";
import { ThirdDesign } from "./pages/ThirdDesign";
import { SecondDesign } from "./pages/SecondDesign";
import { NavBar } from "./components/navbar/NavBar";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/footer/Footer";
import { Songs } from "./pages/Songs";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<FirstDesign />} />
        <Route path="/second-design" element={<SecondDesign />} />
        <Route path="/third-design" element={<ThirdDesign />} />
        <Route path="/fourth-design" element={<FourthDesign />} />
        <Route path="/playlist" element={<Songs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
