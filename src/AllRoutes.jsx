import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Sponsor from "./Pages/Sponsor";
import Home from "./Pages/Home";
import { useEffect } from "react";
const AllRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/sponsor" element={<Sponsor />} />
    </Routes>
  );
};

export default AllRoutes;
