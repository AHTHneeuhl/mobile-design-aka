import { Route, Routes } from "react-router-dom";
import { HomeScreen, ProductScreen } from "screens";
import { applicationRoutes as routes } from "config";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<HomeScreen />} />
      <Route path={routes.product} element={<ProductScreen />} />
    </Routes>
  );
};

export default AppRoutes;
