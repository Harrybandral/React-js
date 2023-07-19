import React from "react";
import "./style.css";

import Menu from "./menuApi";
// import { useState } from "react";
import MenuCard from "./MenuCard";

const Restaurant = () => {
  //to get or hold the data = use state
  const [menuData, setMenuData] = React.useState(Menu);

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item">Breakfast</button>
          <button className="btn-group__item">Lunch</button>
          <button className="btn-group__item">Afternoon</button>
          <button className="btn-group__item">Dinner</button>
          <button className="btn-group__item">All</button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
