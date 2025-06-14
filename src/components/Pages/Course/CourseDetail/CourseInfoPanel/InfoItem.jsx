import PriceAndButton from "./PriceAndButton";
import studentIcon from "../../../../../assets/CourseDetail/Icon.svg";
import statuIcon from "../../../../../assets/CourseDetail/Icon (1).svg";
import sdIcon from "../../../../../assets/CourseDetail/Icon (2).svg";
import edIcon from "../../../../../assets/CourseDetail/Icon (3).svg";
import CourseInfoRow from "./CourseInfoRow";
import moment from "jalali-moment";

const InfoItem = ({ courseDetail }) => {
  const startJalali = moment(courseDetail?.startTime)
    .locale("fa")
    .format("jYYYY/jMM/jDD");
  const endJalali = moment(courseDetail?.endTime)
    .locale("fa")
    .format("jYYYY/jMM/jDD");

  return (
    <div className="w-full h-4/6 bg-white rounded-3xl shadow">
      <div className="w-10/12 m-auto h-5/6 flex flex-col py-6 gap-5">
        <h1 className="text-lg font-bold mb-2 m-auto">مشخصات دوره</h1>
        <CourseInfoRow
          icon={studentIcon}
          label="تعداد دانشجو"
          value={courseDetail?.capacity}
        />
        <CourseInfoRow
          icon={statuIcon}
          label="وضعیت دوره"
          value={courseDetail?.courseStatusName}
        />
        <CourseInfoRow icon={sdIcon} label="تاریخ شروع" value={startJalali} />
        <CourseInfoRow icon={edIcon} label="تاریخ پایان" value={endJalali} />
      </div>

      <PriceAndButton courseDetail={courseDetail} />
    </div>
  );
};

export default InfoItem;
