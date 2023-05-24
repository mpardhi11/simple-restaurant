import { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const menuCategory = [...new Set(Menu.map(({ category }) => category)), "All"];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(menuCategory);

  const filterItem = category => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter(item => {
      return item.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
