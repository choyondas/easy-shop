import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";

import Slider from "../../components/Slider/Slider";
import Navbar from "../Shared/Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="container">
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
