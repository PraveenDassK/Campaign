import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CampaignPage from "../pages/CampaignPage";
const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/campaign' element={<CampaignPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesPage;
