import React from "react";
import { NavLink } from "react-router-dom";

const PanelTopMenu = () => {
  return (
    <div className="h-full w-4/12 whitetext flex items-center justify-center gap-7 ml-24">
      <NavLink to="/">صفحه اصلی</NavLink>
      <span>گزارش</span>
      <span>ارتباط با ما</span>
    </div>
  );
};

export default PanelTopMenu;
