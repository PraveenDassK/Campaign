import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
const Layout = ({ children }) => {
  return (
    <div className='flex flex-row w-[100%]'>
      <Sidebar />
      <div className='w-[100%] bg-[#f5f9ff]'>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
