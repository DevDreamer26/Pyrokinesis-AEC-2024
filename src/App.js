import { Route, Routes } from "react-router-dom";
import { useSmoothScroll } from "./Hooks/useSmoothScroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Featured from "./components/Featured";
import About from "./components/About";
import Team from "./Pages/Team/Team";
import Gallery from "./components/Gallery";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors/Sponsors";
import Register from "./Pages/Register/Register";

const App = () => {
  const minHeight = true;
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="featured" element={<Featured minHeight={minHeight} />} />
        <Route path="about" element={<About minHeight={minHeight} />} />
        <Route path="sponsors" element={<Sponsors minHeight={minHeight} />} />
        <Route path="team" element={<Team minHeight={minHeight} />} />
        <Route path="register" element={<Register minHeight={minHeight} />} />
        <Route path="gallery" element={<Gallery />} />
        <Route
          path="favourites"
          element={<Favourites minHeight={minHeight} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
