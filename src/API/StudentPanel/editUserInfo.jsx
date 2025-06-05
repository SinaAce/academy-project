import axois from "../ApiConfig";

export const editUserInfo = async (formData) => {
  try {
    const result = await axois.put("SharePanel/UpdateProfileInfo", formData, {
      headers: {
        "Content-Type": undefined,
      },
    });

    return result.data;
  } catch (error) {
    console.error("Validation Error:", error?.response?.data);
  }
};
