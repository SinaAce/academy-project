import axois from "../ApiConfig";

export const getUserInfo = async () => {
  try {
    const result = await axois.get("/SharePanel/GetProfileInfo");
    return result.data;
  } catch (error) {
    console.error("Error fetching data ...", error);
  }
};
