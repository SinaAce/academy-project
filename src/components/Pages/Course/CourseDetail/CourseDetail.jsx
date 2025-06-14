import { useEffect, useState } from "react";
import { getCourseDetail } from "./../../../../API/Courses/getCourseDetail";
import { useParams } from "react-router-dom";
import CourseImage from "./CourseImage/CourseImage";
import InfoItem from "./CourseInfoPanel/InfoItem";
import TeacherCard from "./CourseInfoPanel/TeacherCard";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [courseDetail, setCourseDetail] = useState();

  const fetchCourseDetail = async () => {
    const data = await getCourseDetail(courseId);
    setCourseDetail(data);
  };

  useEffect(() => {
    if (courseId) fetchCourseDetail();
  }, [courseId]);

  return (
    <div className="relative top-20 m-auto flexaround w-11/12">
      <CourseImage courseDetail={courseDetail} />
      <div className="w-1/3 h-[630px]">
        <div className="h-full w-11/12 m-auto flex flex-col gap-16">
          <InfoItem courseDetail={courseDetail} />
          <TeacherCard courseDetail={courseDetail} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
