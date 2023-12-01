import React, { useState, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import CustomeStepper from "../../components/Stepper";
import AdCategory from "../../components/AdCategory";
import AppButton from "../../components/AppButton";
import { CampaignContext } from "../../App";
import ChooseProduct from "../../components/ChooseProduct";
import CampaignSettings from "../../components/CampaignSettings";
import ReadytoGo from "../../components/Readytogo";
import { useNavigate } from "react-router-dom";
const CreateCampaign = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    title: "Get Leads as calls",
    todo: "Reach broad audience and get leads through calls",
  });
  const [productsData, setProductsData] = useState({
    id: 1,
    name: "Bluberry cake with raw toppings",
    price: "2,290",
  });
  const [settingData, setSettingData] = useState([]);
  const { campaignAd, setCampaignAd } = useContext(CampaignContext);

  const navigate = useNavigate();

  //state to store settings Details
  const [isLifeTime, setLifeTime] = useState("LifeTime");
  const [isStartDate, setStartDate] = useState("");
  const [isEndDate, setEndDate] = useState("");
  const [amount, setAmount] = useState(100); // Initial amount value
  const [isLocation, setIsLocation] = useState("Location");
  const [radiusRange, setRadiusRange] = useState(1);
  const [locationName, setLocationName] = useState("");
  const [currencyType, setCurrencies] = useState("INR");

  const dummyApiData = {
    platform: "",
    campaignAd: {
      title: "",
      image: "",
      date: new Date(),
    },
    startData: "",
    endData: "",
    clicks: "300",
    budget: "",
    location: "",
    currencyType: "",
  };

  const handleStep = (step) => {
    setActiveStep(step);

    //   case 1:
    //     dummyApiData.platform = selectedCategory.title;
    //     break;
    //   case 2:
    //     dummyApiData.campaignAd.title = productsData.name;
    //     break;

    //   case 3:
    //     dummyApiData.startData = isStartDate;
    //     dummyApiData.endData = isEndDate;
    //     dummyApiData.location = locationName;
    //     dummyApiData.budget = amount;
    //     dummyApiData.currencyType = currencyType.currency;
    //     break;
    //   default:
    //     break;
    // }
    console.log("Campaign", dummyApiData);
  };
  const handleStartCampaign = () => {
    // console.log("good to go");
    // let newArray = [];
    // newArray.push(dummyApiData)
    dummyApiData.platform = selectedCategory.title;

    dummyApiData.campaignAd.title = productsData.name;

    dummyApiData.startData = isStartDate;
    dummyApiData.endData = isEndDate;
    dummyApiData.location = locationName;
    dummyApiData.budget = amount;
    dummyApiData.currencyType = currencyType.currency;
    // switch (step) {
    console.log(dummyApiData);
    setCampaignAd([...campaignAd, dummyApiData]);
    navigate("/campaign");
  };
  return (
    <Layout>
      <div className='p-10 '>
        <div className='flex flex-col text-left'>
          <span className='font-exsans font-bold text-[24px]'>
            Your Ad Campaign
          </span>
          <span className='text-[#00000080] text-[16px] font-exsans font-normal'>
            Launch your ad in just {4 - activeStep} easy steps
          </span>
        </div>

        <div className='w-[100%] flex justify-center mt-10'>
          <CustomeStepper
            setActiveStep={setActiveStep}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            activeStep={activeStep}
            setIsFirstStep={setIsFirstStep}
            setIsLastStep={setIsLastStep}
          />
        </div>
        {activeStep === 0 ? (
          <div>
            <AdCategory
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
              activeStep={activeStep}
            />
            <div className='w-[100%] my-10  flex justify-end'>
              <span className='w-[20%]'>
                <AppButton title='Continue' handleClick={() => handleStep(1)} />
              </span>
            </div>
          </div>
        ) : null}
        {activeStep === 1 ? (
          <div>
            <ChooseProduct
              setProductsData={setProductsData}
              productsData={productsData}
              activeStep={activeStep}
            />
            <div className='w-[100%] my-10  flex justify-end'>
              <span className='w-[20%]'>
                <AppButton title='Continue' handleClick={() => handleStep(2)} />
              </span>
            </div>
          </div>
        ) : null}
        {activeStep === 2 ? (
          <div className='w-[100%]'>
            <CampaignSettings
              activeStep={activeStep}
              setSettingData={setSettingData}
              setRadiusRange={setRadiusRange}
              radiusRange={radiusRange}
              setIsLocation={setIsLocation}
              isLocation={isLocation}
              setAmount={setAmount}
              amount={amount}
              setEndDate={setEndDate}
              setStartDate={setStartDate}
              setLifeTime={setLifeTime}
              isLifeTime={isLifeTime}
              setLocationName={setLocationName}
              setCurrencies={setCurrencies}
            />

            <div className='w-[100%] my-10  flex justify-end'>
              <span className='w-[20%]'>
                <AppButton title='Continue' handleClick={() => handleStep(3)} />
              </span>
            </div>
          </div>
        ) : null}
        {activeStep === 3 ? (
          <div>
            <ReadytoGo activeStep={activeStep} />
            <div className='w-[100%] my-10  flex justify-end'>
              <span className='w-[20%]'>
                <AppButton
                  title='Start Campaign'
                  handleClick={handleStartCampaign}
                />
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default CreateCampaign;
