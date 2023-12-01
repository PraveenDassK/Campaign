import React, { useState } from "react";
import CustomeCard from "../CustomeCard";
import { BiSolidPhoneIncoming } from "react-icons/bi";
import { AiFillCheckCircle, AiOutlineShop } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineUserPlus, HiOutlineUsers } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";
import { BsFileArrowDown, BsFileText, BsSendFill } from "react-icons/bs";

const AdCategory = ({ setSelectedCategory, selectedCategory, activeStep }) => {
  const AdCategoryData = [
    {
      id: 1,
      title: "Get Leads as calls",
      todo: "Reach broad audience and get leads through calls",
      icon: BiSolidPhoneIncoming,
    },
    {
      id: 2,
      title: "Get Leads as Facebook messages",
      todo: "Get more FB messages from Leads",
      icon: MdOutlineMessage,
    },
    {
      id: 3,
      title: "Increase page followers",
      todo: "Encourage customers to follow your page",
      icon: HiOutlineUserPlus,
    },
    {
      id: 4,
      title: "Get Customer Leads",
      todo: "Encourage customers to take action",
      icon: HiOutlineUsers,
    },
    {
      id: 5,
      title: "Get more youtube views",
      todo: "Increase organic views by obtaining user attention ",
      icon: LuEye,
    },
    {
      id: 6,
      title: "Get more website traffic",
      todo: "Get the right people to visit your website",
      icon: BsSendFill,
    },
    {
      id: 7,
      title: "Increase Live store traffic",
      todo: "Drive visits to local stores, restaurants & Dealerships",
      icon: AiOutlineShop,
    },
    {
      id: 8,
      title: "Increase your App installs",
      todo: "Get more installs, interactions for your app",
      icon: BsFileArrowDown,
    },
    {
      id: 9,
      title: "Increase the catalogue sales",
      todo: "Drive the sales of your catalogue and get more leads",
      icon: BsFileText,
    },
  ];
  //
  const handleSelect = (value) => {
    setSelectedCategory(value);
  };
  return (
    <CustomeCard title={"What you want to do?"} activeTab={activeStep}>
      <div className='grid grid-cols-3 gap-5 my-5'>
        {AdCategoryData.map((eachValue, i) => (
          <InnerCard
            key={i}
            title={eachValue?.title}
            todo={eachValue?.todo}
            Icon={eachValue?.icon}
            handleSelect={() => handleSelect(eachValue)}
            activeTab={eachValue?.id === selectedCategory?.id}
          />
        ))}
      </div>
    </CustomeCard>
  );
};

export default AdCategory;

function InnerCard({ title, todo, Icon, handleSelect, activeTab }) {
  return (
    <div
      className={`flex flex-row items-center gap-5  w-[100%] border-[1.5px] pl-3 py-2 rounded-[10px]  ${
        !activeTab
          ? "border-[#F3F3F3]"
          : "border-[#0F6EFF] bg-[#E7F0FF4D] relative"
      }`}
      onClick={handleSelect}>
      {activeTab ? (
        <div className='absolute  right-[-2%] top-[-12%]'>
          <AiFillCheckCircle className='text-[#0F6EFF]' />
        </div>
      ) : null}

      <Icon
        className={`h-[24px] w-[24px] ${
          !activeTab ? "text-[#8B8B8B]" : "text-[#0F6EFF]"
        }`}
      />
      <div className='flex flex-col justify-start items-start'>
        <h2 className='font-exsans text-[#0B1A33] font-bold text-[16px]'>
          {title}
        </h2>
        <p className='text-[#0000004D] font-exsans text-[13px]'>{todo}</p>
      </div>
    </div>
  );
}
