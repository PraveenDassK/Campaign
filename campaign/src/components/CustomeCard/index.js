import React from "react";

const CustomeCard = ({ children, width = "100%", title, activeTab }) => {
  return (
    <div
      className={`px-5 mt-[10%] rounded-[10px] bg-white border-[#DAE6FF] border-[1px] flex flex-col`}
      style={{ width: width }}>
      <div className='flex flex-row  py-5 border-b-[1.5px] border-b-[#EAEAEA] w-[100%] h-[20%] gap-[5px] items-center'>
        <h2 className='text-[#000000] font-exsans text-[16px] font-bold'>
          {title}
        </h2>
        <span className='text-[#00000080] text-[12px] font-bold'>{`Step ${
          activeTab + 1
        } of 4`}</span>
      </div>
      <div className='w-[100%]'>{children}</div>
    </div>
  );
};

export default CustomeCard;
