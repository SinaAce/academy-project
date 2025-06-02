import { useState, useEffect } from "react";
import axios from "axios";
import moment from "jalali-moment";
import UnImg from "../../../../../../assets/courses/Unimages.png";
import note from "../../../../../../assets/courses/note-2.svg";
import clock from "../../../../../../assets/courses/clock.svg";
import calender from "../../../../../../assets/courses/calendar-2.svg";
// import like from "../../../../../../assets/courses/heart.svg";

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
    <div className="flex flex-wrap justify-around gap-4">
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
              <div className="w-full bg-[#ECEFF1] rounded-3xl h-1/4 flex gap-1 items-center justify-around">
                <div className="h-full flex items-center gap-1 text-xs font-medium text-right">
                  <img src={note} alt="icon" />
                  <span className="mt-1">{e.levelName}</span>
                </div>
                <div className="h-full flex items-center gap-1 text-xs font-medium text-right">
                  <img src={clock} alt="icon" />
                  <span className="mt-1">{e.commandCount} ساعت آموزش</span>
                </div>
                <div className="h-full flex items-center gap-1 text-xs font-medium text-right">
                  <img src={calender} alt="icon" />
                  <span className="mt-1">
                    {convertToFullJalaliDate(e.lastUpdate)}
                  </span>
                </div>
              </div>
              <div className="w-full h-1/4 flexItemBetween px-2">
                <div className="font-bold text-sm">
                  مدرس :{" "}
                  <span className="font-medium text-sm">{e.teacherName}</span>
                </div>
                <div className="font-medium text-sm">
                  <span className="font-bold text-sm">
                    {e.currentRegistrants}
                  </span>{" "}
                  دانش آموز
                </div>
              </div>
              <div className="w-full rounded-3xl h-1/4 flexItemBetween">
                <div className="h-[32px] bg-[#FFEBEE] rounded-3xl flexItemAround gap-1 px-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.41334 13.8736C8.18668 13.9536 7.81334 13.9536 7.58668 13.8736C5.65334 13.2136 1.33334 10.4602 1.33334 5.79356C1.33334 3.73356 2.99334 2.06689 5.04001 2.06689C6.25334 2.06689 7.32668 2.65356 8.00001 3.56023C8.67334 2.65356 9.75334 2.06689 10.96 2.06689C13.0067 2.06689 14.6667 3.73356 14.6667 5.79356C14.6667 10.4602 10.3467 13.2136 8.41334 13.8736Z"
                      stroke="#F44336"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="mt-1 text-[#F44336] font-medium text-base">
                    {e.likeCount}
                  </span>
                </div>
                <div className="h-[32px] flexItemAround gap-1">
                  <span className="mt-1 text-[#2196F3] font-medium text-base">
                    {e.cost}
                  </span>
                  <span>تومان</span>
                </div>
              </div>
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
