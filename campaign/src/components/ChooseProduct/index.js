import React from "react";
import CustomeCard from "../CustomeCard";
import { AiFillCheckCircle } from "react-icons/ai";
import Image1 from "../../assets/ProductImage/Image1.png";
import Image2 from "../../assets/ProductImage/Image2.png";
import Image3 from "../../assets/ProductImage/Image3.png";
import Image4 from "../../assets/ProductImage/Image4.png";
import Image5 from "../../assets/ProductImage/Image5.png";
import Image6 from "../../assets/ProductImage/Image6.png";
import Image7 from "../../assets/ProductImage/Image7.png";
import Image8 from "../../assets/ProductImage/Image8.png";
import Image9 from "../../assets/ProductImage/Image9.png";
const ChooseProduct = ({ productsData, setProductsData, activeStep }) => {
  const productData = [
    {
      id: 1,
      name: "Bluberry cake with raw toppings",
      price: "2,290",
      image: Image1,
    },
    {
      id: 2,
      name: "Chocolate truffle cake",
      price: "2,190",
      image: Image2,
    },
    {
      id: 3,
      name: "Browine cake with fluffy cream",
      price: "1,490",
      image: Image3,
    },
    {
      id: 4,
      name: "Ferro rocher cake",
      price: "3,290",
      image: Image4,
    },
    {
      id: 5,
      name: "Custurd mixed with fruit cake",
      price: "2,890",
      image: Image5,
    },
    {
      id: 6,
      name: "Best raw topping choco cake",
      price: "2,260",
      image: Image6,
    },
    {
      id: 7,
      name: "Green cup cakes",
      price: "2,290",
      image: Image7,
    },
    {
      id: 8,
      name: "Blueberry topping cakes",
      price: "1,290",
      image: Image8,
    },
    {
      id: 9,
      name: "Strawberry cakes with blueberry",
      price: "1,220",
      image: Image9,
    },
  ];
  const handleSelect = (value) => {
    console.log(value, "selected");
    setProductsData(value);
  };
  return (
    <CustomeCard activeTab={activeStep} title={"Choose the Product"}>
      <div className='grid grid-cols-3 gap-5 my-5'>
        {productData.map((eachProduct, i) => (
          <InnerCard
            key={i}
            title={eachProduct?.name}
            todo={eachProduct?.price}
            ImageUrl={eachProduct?.image}
            activeTab={eachProduct?.id === productsData?.id}
            handleSelect={() => handleSelect(eachProduct)}
          />
        ))}
      </div>
    </CustomeCard>
  );
};

export default ChooseProduct;

function InnerCard({ title, todo, ImageUrl, handleSelect, activeTab }) {
  return (
    <div
      className={`flex flex-row items-center justify-between gap-5  w-[100%] border-[1.5px] px-3 py-2 rounded-[10px]  ${
        !activeTab
          ? "border-[#F3F3F3]"
          : "border-[#0F6EFF] bg-[#E7F0FF4D] relative"
      }`}
      onClick={handleSelect}>
      {/* {activeTab ? (
        <div className='absolute  right-[-2%] top-[-12%]'>
          <AiFillCheckCircle className='text-[#0F6EFF]' />
        </div>
      ) : null} */}
      <div className='flex felx-row gap-5 items-center'>
        <img src={ImageUrl} alt='product_image' className='h-[54px] w-[54px]' />

        <div className='flex flex-col justify-start items-start'>
          <h2 className='font-exsans text-[#0B1A33] font-bold text-[16px]'>
            {title}
          </h2>
          <p className='text-[#0000004D] font-exsans text-[13px]'>Rs.{todo}</p>
        </div>
      </div>
      <div>
        <AiFillCheckCircle
          className={`h-[24px] w-[24px]  text-end ${
            !activeTab ? "text-[#8B8B8B]" : "text-[#0F6EFF]"
          }`}
        />
      </div>
    </div>
  );
}
