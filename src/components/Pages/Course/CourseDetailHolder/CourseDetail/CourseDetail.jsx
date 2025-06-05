import FilterBox from "./FilterBox/FilterBox";
import Courses from "./Courses/Courses";

const CourseDetail = () => {
  return (
    <div className="h-full w-3/4">
      <FilterBox />
      <Courses />
    </div>
  );
};

export default CourseDetail;
