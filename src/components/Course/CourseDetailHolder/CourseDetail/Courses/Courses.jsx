import React from "react";
import Cards from "./Cards/Cards";

const Courses = () => {
  return (
    <div className="w-full h-full my-4 border border-blue-500 flexItemBetween flex-wrap gap-8">
      <Cards /> 
    </div>
  );
};

export default Courses;