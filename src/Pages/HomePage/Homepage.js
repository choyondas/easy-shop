import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/Categories/Categories";

import Slider from "../../components/Slider/Slider";
import Navbar from "../Shared/Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="container">
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
    </div>
  );
};

export default Homepage;
