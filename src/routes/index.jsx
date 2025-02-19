import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/index.jsx";
import Power_tools from "../pages/power_tools/index.jsx";
import Product from "../pages/product/index.jsx";
import Login from "../components/login/index.jsx";
import Basket from "../components/basket/index.jsx";
import Liki from "../components/liki/index.jsx";
import NotFound from "../components/notfound/inedx.jsx";
import MainLayout from "../components/main_layout/index.jsx";

function RouteComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/power_tools" element={<Power_tools />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/liki" element={<Liki />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default RouteComponent;
