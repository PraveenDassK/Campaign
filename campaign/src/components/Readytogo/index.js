import React, { useState } from "react";
import CustomeCard from "../CustomeCard";
import { AiFillCheckCircle } from "react-icons/ai";
import CakeImage from "../../assets/Readytogo/CakeImage.png";
import CakeImage2 from "../../assets/Readytogo/CakeImage2.png";
import CakeImage3 from "../../assets/Readytogo/CakeImage3.png";
import CakeImage4 from "../../assets/Readytogo/CakeImage4.png";
import { AiFillLike } from "react-icons/ai";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const ReadytoGo = ({ activeStep }) => {
  const [selectedCard, setSelectedCard] = useState({
    id: 1,
    image: CakeImage,
    title: "Mukund Cake Shop",
    para: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
  });

  //dummy data
  const staticData = [
    {
      id: 1,
      image: CakeImage,
      title: "Mukund Cake Shop",
      para: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
    },
    {
      id: 2,
      image: CakeImage2,
      title: "Mukund Cake Shop",
      para: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
    },
    {
      id: 3,
      image: CakeImage3,
      title: "Mukund Cake Shop",
      para: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
    },
    {
      id: 4,
      image: CakeImage4,
      title: "Mukund Cake Shop",
      para: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
    },
  ];

  const handleSelect = (value) => {
    setSelectedCard(value);
  };
  console.log(selectedCard, "thsis");
  return (
    <CustomeCard activeTab={activeStep} title={"Ready to go"}>
      <div className='grid grid-cols-4 gap-5 my-5'>
        {staticData.map((eachValue, i) => (
          <InnerCard
            key={i}
            title={eachValue?.title}
            para={eachValue?.para}
            image={eachValue?.image}
            handleSelect={() => handleSelect(eachValue)}
            activeTab={eachValue?.id === selectedCard?.id}
          />
        ))}
      </div>
    </CustomeCard>
  );
};

export default ReadytoGo;

const InnerCard = ({ activeTab, handleSelect, title, para, image }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(!isModalOpen);

  return (
    <div
      className={`flex flex-col  gap-5 text-start w-[100%] border-[1.5px]  py-2 rounded-[10px]  ${
        !activeTab ? "border-[#F3F3F3]" : "border-[#0F6EFF] relative"
      }`}
      onClick={handleSelect}>
      {activeTab ? (
        <div className='absolute  right-[-1%] top-[-2%]'>
          <AiFillCheckCircle className='text-[#0F6EFF]' />
        </div>
      ) : null}
      <div className='flex flex-row items-center gap-3 pl-3'>
        <img
          src={image}
          alt='profile_image'
          className='h-[40px] w-[40px] rounded-[50%]'
        />
        <div className='flex flex-col text-start '>
          <h3 className='text-[#2B23A5] text-[16px] font-exsans font-bold'>
            {title}
          </h3>
          <h4 className='text-[#767676] text-[12px] font-bold'>sponsered</h4>
        </div>
      </div>
      <div>
        <p className='pl-3 pb-3 text-[#000000] text-[16px] font-semibold'>
          {para}
        </p>
        <img src={image} alt='images' className='w-[100%]' />
        <div className='flex flex-row justify-around items-center bg-[#F5F5F5] py-3'>
          <h2 className='text-[#2B23A5] text-[14px] font-exsans font-bold'>
            {title}
          </h2>
          <button className='border-[#CED0D4] border-[1px] rounded-[5px] flex flex-row items-center px-4 py-2 gap-2'>
            <AiFillLike />
            Like
          </button>
        </div>
        {activeTab ? (
          <div className='flex flex-row justify-around items-center bg-[#F5F5F5] pb-3 text-[#0F6EFF]'>
            <button
              className='border-none rounded-[5px] bg-[#0F6EFF1A] flex flex-row items-center px-4 py-2 gap-2'
              onClick={() => setModalOpen(true)}>
              Change Image
            </button>
            <button
              className='border-none border-[1px] rounded-[5px] bg-[#0F6EFF1A] flex flex-row items-center px-4 py-2 gap-2'
              onClick={() => setModalOpen(true)}>
              Edit Text
            </button>
          </div>
        ) : null}
      </div>
      <Dialog open={isModalOpen} handler={handleOpen}>
        <DialogHeader>Change Modal</DialogHeader>
        <DialogBody className='font-exsans text-[30px] font-bold  text-center'>
          Coming Soon...
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'>
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};
