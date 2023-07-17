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
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
