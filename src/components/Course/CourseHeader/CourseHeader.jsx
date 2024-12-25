import React from "react";
import vector from "../../../assets/courses/victorGroup.svg";
import dots from "../../../assets/courses/Dots.svg";
import bigDots from "../../../assets/courses/moreDots.svg";
import shape1 from "../../../assets/courses/Rectangle 25.svg";

const CourseHeader = () => {
  return (
    <div className="w-full h-[700px] flexItem flex-col -mt-14">
      <div className="h-3/4 w-full mt-11 flexItemCenter">
        <div className="w-1/2 h-full relative">
          <div className="flexItemCol items-start w-3/4 absolute top-36 right-20 z-10">
            <span className="text-[#2196F3] text-[1.5em] font-bold">
              مهمه از کی یاد می گیری!!
            </span>
            <span className="text-[#263238] font-black text-[2.5em]">
              اموزش برنامه نویسی با بهترین ها
            </span>
            <span className="font-medium text-[1em] text-[#455A64]">
              آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات
              است. برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا
              نرم‌افزارهای کامپیوتری را ایجاد و توسعه دهند.
            </span>
          </div>
          <img src={shape1} className="absolute top-24 right-14" />
          <img src={dots} className="absolute left-0 top-20" />
          <img src={bigDots} className="absolute bottom-24 right-10" />
        </div>
        <img className="w-1/2 h-full" src={vector} alt="vector" />
      </div>
    </div>
  );
};

export default CourseHeader;
