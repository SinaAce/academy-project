import React from "react";
import dropdownIcon from "../../../../../../assets/courses/dropdown.svg";
import sortIcon from "../../../../../../assets/courses/sort.svg";

const CoursesSort = () => {
  return (
    <div className="w-1/6 bg-[#FFFFFF] rounded-2xl shadowCustom h-full relative">
      <img src={dropdownIcon} alt="icon" className="absolute top-5 left-3 size-4" />
      <img src={sortIcon} alt="icon" className="absolute top-3 right-2 size-7" />
      <select className="w-full h-full appearance-none focus:outline-none px-10 rounded-2xl text-[#263238] text-base font-medium">
        <option value="famous" selected>
          محبوب ترین ها
        </option>
        <option value="asc">کمترین قیمت</option>
        <option value="desc">بیشترین قیمت</option>
      </select>
    </div>
  );
};

export default CoursesSort;
