import { useState } from "react";
import fakeData from "../../../data/fake-api.json";

const SiteStatistic = () => {
  const [data, setData] = useState(fakeData);

  return (
    <div className="w-[724px] h-[211px] z-20 flexItemCenter gap-8">
      {data.map((e) => (
        <div
          key={e.id}
          className="w-1/3 h-full backdrop-blur-md border-4 border-white rounded-2xl flexItemCol"
        >
          <img className="cursor-pointer" src={e.image} alt={e.title} />
          <span className="text-[2.25em] font-black">{e.number}</span>
          <span className="text-[#455A64] text-[1.25em]">{e.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SiteStatistic;
