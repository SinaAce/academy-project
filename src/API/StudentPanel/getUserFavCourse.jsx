import axois from "../ApiConfig";

export const getUserFavCourse = async () => {
  try {
    const result = await axois.get("/SharePanel/GetMyFavoriteCourses");
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error("Error fetching data ...", error);
  }
};
