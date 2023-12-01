import "./App.css";
import RoutesPage from "./routes/RoutesPage";
import { createContext, useState } from "react";
export const CampaignContext = createContext(null);

function App() {
  const [campaignAd, setCampaignAd] = useState([]);
  return (
    <CampaignContext.Provider value={{ campaignAd, setCampaignAd }}>
      <div className='App'>
        <RoutesPage />
      </div>
    </CampaignContext.Provider>
  );
}

export default App;
