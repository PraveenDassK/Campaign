import React from "react";

const AppButton = ({ ButtonIcon, title = "", handleClick, icon = false }) => {
  return (
    <div className='w-[100%]'>
      <button
        className='bg-[#0F6EFF] rounded-[10px] font-exsans font-bold text-white h-[50px] w-[100%] flex flex-row items-center justify-center gap-2 '
        onClick={handleClick}>
        {icon ? <ButtonIcon /> : null}
        {title}
      </button>
    </div>
  );
};

export default AppButton;
