import { useState, useEffect } from "react";
import axios from "axios";

const Cards = () => {
  const [courses, setCourses] = useState([]);

  const getCourseList = async () => {
    try {
      const res = await axios.get(
        "https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0"
      );
      setCourses(res.data.courseFilterDtos);
    } catch (error) {
      console.error("خطا در دریافت اطلاعات:", error);
    }
  };

  useEffect(() => {
    getCourseList();
    console.log(courses);
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {courses.length > 0 ? (
        courses.map((e) => (
          <div
            className="h-[389px] w-[296px] bg-white cardShadow rounded-3xl flexItemCol p-4"
            key={e.courseId}
          >
            <div className="w-full h-3/6 rounded-[20px]">
              <img
                src={e.tumbImageAddress || "placeholder.jpg"}
                alt="coursePicture"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
            <div className="w-full h-3/5 mt-1 flexItemCol">
              <div className="w-full h-1/4 text-base font-bold">
                {e.courseName || "نام دوره در دسترس نیست"}
              </div>
              <div className="w-full bg-[#ECEFF1] rounded-3xl h-1/4 flexItemAround">
                <div className="h-full border border-red-500 w-1/4 flex"></div>
                <div className="h-full border border-red-500 w-1/4 flex"></div>
                <div className="h-full border border-red-500 w-1/4 flex"></div>
              </div>
              <div className="w-full bg-[#ECEFF1] rounded-3xl h-1/4"></div>
              <div className="w-full bg-[#ECEFF1] rounded-3xl h-1/4"></div>
            </div>
          </div>
        ))
      ) : (
        <div>در حال بارگذاری دوره‌ها...</div>
      )}
    </div>
  );
};

export default Cards;
