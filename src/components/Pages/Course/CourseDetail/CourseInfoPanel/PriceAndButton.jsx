import toast, { Toaster } from "react-hot-toast";
import axios from "../../../../../API/ApiConfig";

const PriceAndButton = ({ courseDetail }) => {
  const handleReserve = async () => {
    try {
      const response = await axios.post("/CourseReserve/ReserveAdd", {
        courseId: courseDetail?.courseId,
      });
      toast.success("رزرو با موفقیت انجام شد");
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "مشکلی پیش آمده";
      toast.error(message);
    }
  };

  return (
    <div className="w-full h-1/6 flexaround">
      <Toaster />
      <button
        className="shadow-sm w-[130px] h-4/6 basicflex text-base font-semibold rounded-full primarybg whitetext"
        onClick={handleReserve}
      >
        شرکت در دوره
      </button>
      <div className="text-xl font-semibold primarycolor">
        {courseDetail?.cost} <span className="blacktext">تومان</span>
      </div>
    </div>
  );
};

export default PriceAndButton;
