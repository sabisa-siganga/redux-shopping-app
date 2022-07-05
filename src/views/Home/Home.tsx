import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Products />
    </div>
  );
};

export default Home;
