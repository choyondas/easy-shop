import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../Shared/Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="container">
      <Announcement></Announcement>
      <Navbar></Navbar>
    </div>
  );
};

export default Homepage;
