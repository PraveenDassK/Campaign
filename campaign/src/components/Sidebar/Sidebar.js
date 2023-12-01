import React from "react";
import AppLogo from "../../assets/AppLogo.png";
import HomeLogo from "../../assets/HouseImage.png";
import CampaignImage from "../../assets/CampaignImage.png";
import ProductImage from "../../assets/BagImage.png";
import CustomerImage from "../../assets/ProfileImage.png";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sideBarData = [
    {
      id: 1,
      title: "Home",
      image: HomeLogo,
      route: "/",
    },
    {
      id: 2,
      title: "Campaign",
      image: CampaignImage,
      route: "/campaign",
    },
    {
      id: 3,
      title: "Products",
      image: ProductImage,
      route: "/products",
    },
    {
      id: 4,
      title: "Customer",
      image: CustomerImage,
      route: "/customer",
    },
  ];
  return (
    <div className='w-[6%] min-h-[100vh] bg-[#001738] flex  items-center pt-[4%] flex-col'>
      <img src={AppLogo} alt='app_logo' className='h-[40px] w-[40px]' />
      <div className='my-[45px] w-[100%]'>
        {sideBarData.map((eachValue, i) => {
          return (
            <SideBarIcon
              key={i}
              iconImage={eachValue?.image}
              title={eachValue?.title}
              selected={location.pathname === eachValue?.route ? true : false}
              handleClick={() => navigate(eachValue?.route)}
            />
          );
        })}
      </div>
    </div>
  );
};

const SideBarIcon = ({ iconImage, title, handleClick, selected }) => {
  return (
    <div
      onClick={handleClick}
      className={`py-2 my-3 w-[100%] text-white flex flex-col items-center cursor-pointer ${
        !selected ? "border-l-0" : "border-l-2 border-[#1977F3] bg-[#1977F31A] "
      }`}>
      <div>
        <img src={iconImage} alt='icon_image' className='h-[21px] w-[21px]' />
      </div>
      <div className='text-[10px] xl:text-[12px] mt-2'>{title}</div>
    </div>
  );
};
export default Sidebar;
