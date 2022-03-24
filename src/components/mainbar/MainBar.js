import React from "react";
import {
  Whatshot,
  NewReleases,
  TrendingUp,
  Menu,
  MoreHoriz,
  ArrowDropDown,
} from "@material-ui/icons";

import "./MainBar.css";
import Posts from "../content/posts/Posts";

const MainBar = () => {
  return (
    <div className="mainbar">
      <div className="filter-container">
        <div className="filter-element">
          <Whatshot />
          <span>Hot</span>
        </div>
        <div className="filter-element">
          <span>Everywhere</span>
          <ArrowDropDown />
        </div>
        <div className="filter-element-secondary">
          <NewReleases />
          <span>New</span>
        </div>
        <div className="filter-element-secondary">
          <TrendingUp />
          <span>Top</span>
        </div>
        <div>
          <MoreHoriz className="filter-element-tertiary" />
        </div>
        <div className="spacer"></div>
        <div className="filter-element-menu">
          <Menu />
          <ArrowDropDown />
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default MainBar;
