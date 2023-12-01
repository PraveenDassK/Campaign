import React, { useState, useRef } from "react";
import CustomeCard from "../CustomeCard";
import CountryCurrencyPicker from "../CountryCurrencyPicker";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaLocationCrosshairs } from "react-icons/fa6";

const CampaignSettings = ({
  activeStep,
  setSettingData,
  isLifeTime,
  setLifeTime,
  setStartDate,
  setEndDate,
  amount,
  setAmount,
  isLocation,
  setIsLocation,
  radiusRange,
  setRadiusRange,
  setLocationName,
  setCurrencies,
}) => {
  const startRef = useRef();
  const endRef = useRef();
  const locationRef = useRef();

  //function to get Setting Details
  const handleClick = (value) => {
    console.log(value);
    setLifeTime(value);
  };
  const handleStart = () => {
    console.log(new Date(startRef.current.value));
    setStartDate(new Date(startRef.current.value));
  };
  const handleEnd = () => {
    console.log(new Date(endRef.current.value));
    setEndDate(new Date(startRef.current.value));
  };
  const handleCountryCurrencySelect = (selected) => {
    console.log("Selected Country and Currency:", selected);
    setCurrencies(selected);
  };
  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
    console.log(newAmount);
  };
  const handleLocation = (value) => {
    setIsLocation(value);
  };

  const handleRadiusChange = (newRange) => {
    setRadiusRange(newRange);
  };

  const handleLocationName = () => {
    console.log(locationRef.current.value);
    setLocationName(locationRef.current.value);
  };

  return (
    <CustomeCard
      width={"70%"}
      activeTab={activeStep}
      title={"Campaign Settings"}>
      <div className='flex my-5 flex-row gap-5 items-start pt-[3%]  '>
        <div className='flex '>
          <div className=' bg-[#0F6EFF] text-white rounded-[50%] h-[30px] w-[30px] flex items-center justify-center'>
            1
          </div>
        </div>
        <div className='flex  items-start justify-start flex-col w-[100%]'>
          <span className='underline text-[#000000] text-[14px] font-exsans font-bold'>
            Budget and Dates info
          </span>
          <h3 className='text-[#606060] tetx-[12px] font-exsans mt-[5%]'>
            Budget Timeline
          </h3>
          <div className=' flex bg-[#F0F0F0] h-10 w-[30%] mt-[2%] rounded-[40px] text-white'>
            <button
              className={`rounded-[40px] w-[50%] outline-none  ${
                isLifeTime === "LifeTime"
                  ? "bg-[#0F6EFF]"
                  : "bg-[#F0F0F0] text-[#999999]"
              }`}
              onClick={() => handleClick("LifeTime")}>
              Lifetime
            </button>
            <button
              className={`rounded-[40px] w-[50%]  outline-none ${
                isLifeTime === "Daily"
                  ? "bg-[#0F6EFF]"
                  : "bg-[#F0F0F0] text-[#999999]"
              }`}
              onClick={() => handleClick("Daily")}>
              Daily
            </button>
          </div>
          <div className='mt-[3%] flex flex-row w-[100%] justify-between  text-start gap-5'>
            <div className='w-[50%]'>
              <h3 className='text-[#606060] tetx-[12px] font-exsans'>
                Start Date
              </h3>
              <input
                type='date'
                onChange={handleStart}
                ref={startRef}
                className='w-[100%] h-[20px] rounded-[20px] mt-2 border-[#E9E9E9] border-[1.5px] p-7 text-[20px]'
              />
            </div>
            <div className='w-[50%]'>
              <h3 className='text-[#606060] tetx-[12px] font-exsans'>
                End Date
              </h3>
              <input
                type='date'
                onChange={handleEnd}
                ref={endRef}
                className='w-[100%] h-[20px] mt-2 border-[#E9E9E9] rounded-[20px] border-[1.5px] p-7 text-[20px]'
              />
            </div>
          </div>
          <div className=' mt-[3%] w-[100%]'>
            <div className='flex w-[100%]  justify-between items-center'>
              <h3 className='text-[#606060] tetx-[12px] font-exsans'>
                Enter campaign budget
              </h3>
              <span>
                <CountryCurrencyPicker onSelect={handleCountryCurrencySelect} />
              </span>
            </div>
            <div className='w-[100%] mt-[2%]'>
              <Slider
                min={100}
                max={100000}
                step={1}
                value={amount}
                onChange={handleAmountChange}
                trackStyle={{ background: "#1977F3" }}
                handleStyle={{ background: "#1977F3" }}
              />
            </div>
            <div className='flex w-[100%]  justify-between items-center'>
              <h3 className='text-[#606060] tetx-[12px] font-exsans'>100</h3>
              <span>100000</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex my-5 pb-5 flex-row gap-5 items-start pt-[3%]  '>
        <div className='flex '>
          <div className=' bg-[#0F6EFF] text-white rounded-[50%] h-[30px] w-[30px] flex items-center justify-center'>
            2
          </div>
        </div>
        <div className='flex  items-start justify-start flex-col w-[100%]'>
          <span className='underline text-[#000000] text-[14px] font-exsans font-bold'>
            Location info
          </span>
          <h3 className='text-[#606060] tetx-[12px] font-exsans mt-[5%]'>
            Location Type
          </h3>
          <div className=' flex bg-[#F0F0F0] h-10 w-[30%] mt-[2%] rounded-[40px] text-white'>
            <button
              className={`rounded-[40px] w-[50%] outline-none  ${
                isLocation === "Location"
                  ? "bg-[#0F6EFF]"
                  : "bg-[#F0F0F0] text-[#999999]"
              }`}
              onClick={() => handleLocation("Location")}>
              Location
            </button>
            <button
              className={`rounded-[40px] w-[50%]  outline-none ${
                isLocation === "Radius"
                  ? "bg-[#0F6EFF]"
                  : "bg-[#F0F0F0] text-[#999999]"
              }`}
              onClick={() => handleLocation("Radius")}>
              Radius
            </button>
          </div>
          <div className='mt-[3%] flex flex-row w-[100%] justify-between  text-start gap-5'>
            <div className='w-[100%]'>
              <h3 className='text-[#606060] tetx-[12px] font-exsans'>
                Select Location
              </h3>
              <div className=' w-[100%] flex flex-row items-center p-3 rounded-[20px] mt-3 border-[#E9E9E9] border-[1.5px]'>
                <input
                  onChange={handleLocationName}
                  ref={locationRef}
                  placeholder='Select a place name, address or coordinates'
                  className='w-[100%]  text-[20px] outline-none border-none'
                />
                <FaLocationCrosshairs />
              </div>
            </div>
          </div>
          {isLocation === "Radius" ? (
            <div className=' mt-[3%] w-[100%]'>
              <div className='flex w-[100%]  justify-between items-center'>
                <h3 className='text-[#606060] tetx-[12px] font-exsans'>
                  Select target radius
                </h3>
              </div>
              <div className='w-[100%] mt-[2%] pb-5'>
                <Slider
                  min={1}
                  max={30}
                  step={1}
                  value={radiusRange}
                  onChange={handleRadiusChange}
                  trackStyle={{ background: "#1977F3" }}
                  handleStyle={{ background: "#1977F3" }}
                />
              </div>
              <div className='flex w-[100%]  justify-between items-center'>
                <h3 className='text-[#606060] tetx-[12px] font-exsans'>1</h3>
                <span>30</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </CustomeCard>
  );
};

export default CampaignSettings;
