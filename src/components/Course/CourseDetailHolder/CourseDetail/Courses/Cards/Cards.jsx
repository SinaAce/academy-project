import { useState, useEffect } from "react";
import axios from "axios";
import moment from "jalali-moment";
import UnImg from "../../../../../../assets/courses/Unimages.png";
import note from "../../../../../../assets/courses/note-2.svg";
import clock from "../../../../../../assets/courses/clock.svg";
import calender from "../../../../../../assets/courses/calendar-2.svg";

const Cards = () => {
  const [courses, setCourses] = useState([]);

  const getCourseList = async () => {
    try {
      const res = await axios.get(
        "https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=20&SortingCol=Active&SortType=DESC&TechCount=0"
      );
      setCourses(res.data.courseFilterDtos);
    } catch (error) {
      console.error("خطا در دریافت اطلاعات:", error);
    }
  };

  useEffect(() => {
    getCourseList();
  }, []);

  const convertToFullJalaliDate = (gregorianDate) => {
    return moment(gregorianDate, "YYYY-MM-DDTHH:mm:ss")
      .locale("fa")
      .format("D MMMM YYYY");
  };

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
                src={e.tumbImageAddress || UnImg}
                alt="coursePicture"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
            <div className="w-full h-3/5 mt-1 flexItemCol">
              <div className="w-full h-1/4 text-base font-bold">
                {e.title || "نام دوره در دسترس نیست"}
              </div>
              <div className="w-full bg-[#ECEFF1] rounded-3xl h-1/4 flexItemAround">
                <div className="h-full flexItem gap-1 text-xs font-medium text-right">
                  <img src={note} alt="icon" />
                  {e.levelName}
                </div>
                <div className="h-full flexItem gap-1 text-xs font-medium text-right">
                  <img src={clock} alt="icon" />
                  {e.commandCount} ساعت آموزش
                </div>
                <div className="h-full flexItem gap-1 text-xs font-medium text-right">
                  <img src={calender} alt="icon" />
                  {convertToFullJalaliDate(e.lastUpdate)}
                </div>
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
