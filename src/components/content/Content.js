import React from "react";
import MainBar from "../mainbar/MainBar";
import SideBar from "../sidebar/SideBar";

import "./Content.css";
import TrendingToday from "./trnding-today/TrendingToday";

const Content = () => {
  return (
    <div className="content">
      <TrendingToday />
      <div className="bars-wrapper">
        <span className="popular-posts-title">Popular Posts</span>
        <div className="bars-wrappers-inside">
        <MainBar />
        <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Content;
