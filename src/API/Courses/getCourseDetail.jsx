import axois from "../ApiConfig";

export const getCourseDetail = async (courseId) => {
  try {
    const result = await axois.get(
      `/Home/GetCourseDetails?CourseId=${courseId}`
    );
    return result.data;
  } catch (error) {
    console.error("Error fetching data ...", error);
  }
};
