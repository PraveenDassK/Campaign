import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CampaignPage from "../pages/CampaignPage";
import CreateCampaign from "../pages/CreateCampaign";
const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/campaign' element={<CampaignPage />} />

        <Route path='/' element={<Home />} />
        <Route path='/createCampaign' element={<CreateCampaign />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesPage;
