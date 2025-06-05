import gridView1 from "../../../../../../../assets/courses/grid-1.svg";
import gridView2 from "../../../../../../../assets/courses/grid-2.svg";
const ViewType = () => {
  return (
    <div className="w-1/12 bg-[#ECEFF1] h-full rounded-2xl flexItemAround gap-1 p-1">
      <div className="w-1/2 bg-[#FFFFFF] h-3/4 rounded-2xl flexItemCenter">
        <img src={gridView1} alt="view" />
      </div>
      <div className="w-1/2 h-3/4 rounded-2xl flexItemCenter">
        <img src={gridView2} alt="view" />
      </div>
    </div>
  );
};

export default ViewType;
