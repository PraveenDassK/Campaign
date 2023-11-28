import React from "react";
import Layout from "../../components/Layout/Layout";
import AppButton from "../../components/AppButton";
import { FiPlusCircle } from "react-icons/fi";

const Campaign = () => {
  return (
    <Layout>
      <div className='w-[100%] flex mt-10'>
        <div className='flex flex-row justify-between w-[100%]  px-10 py-5 '>
          <div className='flex flex-col text-left'>
            <span className='font-exsans font-bold text-[24px]'>
              Your Campaigns
            </span>
            <span className='text-[#00000080] text-[16px] font-exsans font-normal'>
              Check the list of campigns you created
            </span>
          </div>
          <div className='w-[20%]'>
            <AppButton
              title={"Create New Campaign"}
              ButtonIcon={FiPlusCircle}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Campaign;
