import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map(menu => {
            return (
              <button className="btn-group__item" onClick={() => filterItem(menu)}>
                {menu}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
