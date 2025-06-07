import { useEffect, useState } from "react";
import { getUserFavCourse } from "../../API/StudentPanel/getUserFavCourse";

const FavCourses = () => {
  const [favCourse, setFavCourse] = useState([]);

  const getFavCourse = async () => {
    try {
      const data = await getUserFavCourse();
      setFavCourse(data.favoriteCourseDto);
      console.log(data.favoriteCourseDto);
    } catch (error) {
      console.error("Error fetching favorite courses:", error);
    }
  };

  useEffect(() => {
    getFavCourse();
  }, []);

  return (
    <div>
      {favCourse.map((course) => (
        <div key={course.favoriteId} className="whitetext flex flex-col">
          <span className="font-bold">Course Title : {course.courseTitle}</span>
          <span className="font-bold">describe : {course.describe}</span>
          <span className="font-bold">level : {course.levelName}</span>
        </div>
      ))}
    </div>
  );
};

export default FavCourses;
