import CourseDetail from "./CourseDetail/CourseDetail";
import CourseFilter from "./CourseFilter/CourseFilter";

const CourseDetailHolder = () => {
  return (
    <div className="w-full mt-10 flexItemBetween gap-1">
      <CourseFilter />
      <CourseDetail />
    </div>
  );
};

export default CourseDetailHolder;
