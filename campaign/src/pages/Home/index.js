import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/campaign");
  }, [navigate]);
  return (
    <Layout>
      <div>Class Name</div>
    </Layout>
  );
};

export default Home;
