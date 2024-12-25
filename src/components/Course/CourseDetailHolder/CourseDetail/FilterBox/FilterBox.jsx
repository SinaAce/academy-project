import React from "react";
import ViewType from "./ViewType/ViewType";
import OrderedList from "./CourseesSort/CoursesSort";
import SearchBox from "../../../../Common/SearchBox/SearchBox";
import CoursesSort from "./CourseesSort/CoursesSort";

const FilterBox = () => {
  return <div className="w-full h-14 flexItemAround">
    <ViewType />
    <SearchBox />
    <CoursesSort />
  </div>;
};

export default FilterBox;
