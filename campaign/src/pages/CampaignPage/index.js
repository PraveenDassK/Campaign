import React, { useContext, useState, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import AppButton from "../../components/AppButton";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CampaignContext } from "../../App";
import { Table, Button } from "antd";
import Image1 from "../../assets/ProductImage/Image1.png";
import { Switch } from "@material-tailwind/react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaSortDown, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Campaign = () => {
  const navigate = useNavigate();

  const { campaignAd, setCampaignAd } = useContext(CampaignContext);

  const [searchData, setSearchData] = useState([
    {
      platform: "Get Leads as call",
      campaignAd: {
        title: "Demo Campaign",
        image: "",
        date: new Date(),
      },
      startData: "12-12-1221",
      endData: "12-12-1212",
      clicks: "300",
      budget: "3000",
      location: "Coimbatore",
      currencyType: "INR",
    },
    {
      platform: "Get Leads as Facebook messages",
      campaignAd: {
        title: "Create New to see changes",
        image: "",
        date: new Date(),
      },
      startData: "12-12-1221",
      endData: "12-12-1212",
      clicks: "300",
      budget: "3000",
      location: "Chennai",
      currencyType: "USD",
    },
  ]);
  const searchRef = useRef();

  //table header and values
  const columns = [
    {
      title: "On/Off",
      render: () => (
        <div>
          <Switch color='blue' defaultChecked />
        </div>
      ),
    },
    {
      title: "Campaign ",
      dataIndex: "campaignAd",
      render: (campaignAd, record) => (
        <div className='w-[100%] flex flex-row items-center gap-7'>
          <img src={Image1} alt='table_image' className='h-[40px] w-[40px]' />
          <div>
            <div className='text-[#000000] font-exsans font-bold text-[15px]'>
              {campaignAd?.title}
            </div>
            <div className='text-[#00000099] text-[12px] font-normal'>{`created ${new Date(
              campaignAd?.date
            ).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}`}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Date Range",
      dataIndex: "startData",
      key: "startData",
      render: (startDate, record) => (
        <div className='w-[100%] text-[#000000] font-normal font-exsans'>
          {/* <Image layout="fill" alt="brand" src={`https://${record.logoUrl}`} /> */}
          <div>{`${new Date(startDate).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}-${new Date(record.endData).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}`}</div>
        </div>
      ),
    },
    {
      title: "Clicks",
      dataIndex: "clicks",
      render: (budget, record) => (
        <div className='text-[#000000] font-normal font-exsans'>
          <div>{budget}</div>
        </div>
      ),
    },
    {
      title: "Budget",
      dataIndex: "budget",
      render: (budget, record) => (
        <div className='text-[#000000] font-normal font-exsans'>
          <div>{`${record?.currencyType} ${budget}`}</div>
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      render: (budget, record) => (
        <div className='text-[#000000] font-normal font-exsans'>
          <div>{budget}</div>
        </div>
      ),
    },
    {
      title: "Platform",
      dataIndex: "platform",
      render: (platform) => (
        <div>
          {platform === "Get Leads as call" ? (
            <FaYoutube className='text-[#E52D27] text-center h-[24px] w-[24px]' />
          ) : (
            <FaFacebook className='text-center text-[#1977F3]  h-[24px] w-[24px]' />
          )}
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "",
      render: (budget, record, i) => (
        <div className='text-[#000000] font-normal font-exsans'>
          {i % 2 === 0 ? (
            <div className='bg-[#E1FFE0] text-[#317C2E] p-2 flex items-center justify-center rounded-[10px]'>
              Live Now
            </div>
          ) : (
            <div className='bg-[#FFDEDE] text-[#FC3F3F] p-2 flex items-center justify-center rounded-[10px]'>
              Exhausted{" "}
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "",
      render: () => (
        <div className='flex flex-row gap-5'>
          <AiOutlineEdit className='text-[#0F6EFF] h-[25px] w-[25px]' />
          <RiDeleteBin5Line className='text-[#FC3F3F] h-[25px] w-[25px]' />
        </div>
      ),
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const handleSearch = () => {
    const data = searchData.filter((e) =>
      e.campaignAd.title.includes(searchRef.current.value)
    );
    setCampaignAd(data);
  };
  return (
    <Layout>
      <div className='w-[100%] flex mt-10 flex-col px-10'>
        <div className='flex flex-row justify-between w-[100%]  py-5 '>
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
              handleClick={() => navigate("/createCampaign")}
              icon={true}
            />
          </div>
        </div>
        <div className='bg-white '>
          <div className='w-[100%] flex justify-between items-center p-5'>
            <div className='flex flex-row w-[30%] border-[1px] border-[#E9E9E9] items-center p-2 rounded-[10px] gap-5'>
              <CiSearch className='text-[#808080] h-[24px] w-[24px]' />

              <input
                className='outline-none'
                placeholder='Search for the campaign'
                onChange={handleSearch}
                ref={searchRef}
              />
            </div>
            <div className='flex gap-5 items-center'>
              Platform:
              <Button className='flex flex-row items-center gap-2'>
                All Platform <FaSortDown />
              </Button>
              Status :{" "}
              <Button className='flex flex-row items-center gap-2'>
                All Status <FaSortDown />
              </Button>
              <Button className='flex flex-row items-center gap-2'>
                Last 30 days <FaSortDown />
              </Button>
            </div>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={!campaignAd.length >= 1 ? searchData : campaignAd}
            pagination={false}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Campaign;
