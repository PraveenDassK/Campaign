import React from "react";
import PremiumImage from "../../assets/PremiumPlan.png";
import TranslateImage from "../../assets/TranslateImage.png";
import GiftImage from "../../assets/GiftImage.png";
import NotificationImage from "../../assets/NotificationImage.png";
import ShopIcon from "../../assets/ShopIcon.png";
import DownArrow from "../../assets/DownArrow.png";
const Header = () => {
  return (
    <div className='w-[100%] bg-white h-[60px] border-[1px] border-[#DAE6FF] flex flex-row items-center justify-end gap-5 px-5'>
      <span className='text-[#00000099] text-[12px] xl:text-[14px] font-exsans font-normal'>
        Free trial ends in 2 days
      </span>
      <span className='font-exsans font-bold bg-[#F29A2E1A] px-3 py-2  text-[12px] text-[#FF8C00] rounded-[5px] flex flex-row items-center gap-3 cursor-pointer'>
        <img src={PremiumImage} alt='premium_icon' />
        Buy Plan
      </span>
      <span className=' cursor-pointer'>
        <img src={GiftImage} alt='gift_icon' />
      </span>
      <span className='cursor-pointer'>
        <img src={NotificationImage} alt='notification_icon' />
      </span>
      <span className='font-bold  text-[#1B3F67] flex fex-row items-center gap-3 font-exsans font-normal cursor-pointer'>
        <img src={ShopIcon} alt='user_icon' />
        Mukund cake shop
        <img src={DownArrow} alt='down' />
      </span>
      <span className='font-bold cursor-pointer'>
        <img src={TranslateImage} alt='transalte_image' />
      </span>
    </div>
  );
};

export default Header;
