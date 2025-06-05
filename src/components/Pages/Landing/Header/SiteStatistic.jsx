import { useState, useEffect } from "react";
import axios from "axios";
import teacherIcon from "../../../../assets/Landing/header/Icon.svg";
import courseIcon from "../../../../assets/Landing/header/Icon2.svg";
import studentIcon from "../../../../assets/Landing/header/Icon3.svg";

const SiteStatistic = () => {
  const [siteStatic, setSiteStatic] = useState([]); // مقدار اولیه آرایه

  const getSiteStatic = async () => {
    const res = await axios.get(
      "https://classapi.sepehracademy.ir/api/Home/LandingReport"
    );
    setSiteStatic(res.data);
  };

  useEffect(() => {
    getSiteStatic();
    console.log(siteStatic);
  }, []);
  return (
    <div className="w-[724px] h-[211px] z-20 flexItemCenter gap-8">
      <div className="w-1/3 h-full backdrop-blur-md border-4 border-white rounded-2xl flexItemCol gap-2">
        <img src={studentIcon} alt="teacherIcon" />
        <span className="text-[#455A64] text-[2.25em] font-black">
          {siteStatic.teacherCount}
        </span>
        <span className="text-[1.25em] text-[#263238] font-bold">
          مدرس مجرب
        </span>
      </div>
      <div className="w-1/3 h-full backdrop-blur-md border-4 border-white rounded-2xl flexItemCol gap-2">
        <img src={teacherIcon} alt="teacherIcon" />
        <span className="text-[#455A64] text-[2.25em] font-black">
          {siteStatic.studentCount}
        </span>
        <span className="text-[1.25em] text-[#263238] font-bold">
          نفر دانشجو
        </span>
      </div>
      <div className="w-1/3 h-full backdrop-blur-md border-4 border-white rounded-2xl flexItemCol gap-2">
        <img src={courseIcon} alt="teacherIcon" />
        <span className="text-[#455A64] text-[2.25em] font-black">
          {siteStatic.courseCount}
        </span>
        <span className="text-[1.25em] text-[#263238] font-bold">
          دوره فعال{" "}
        </span>
      </div>
    </div>
  );
};

export default SiteStatistic;
