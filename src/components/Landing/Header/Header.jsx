import bgSvg from "./../../../assets/Landing/Image [home-hero-background].svg";
import SearchBox from "./SearchBox";
import SiteStatistic from "./SiteStatistic";
import Text from "./Text";
import Icons from "./Icons";

const Header = () => {
  return (
    <div
      className="w-full h-[900px] rounded-b-[40%] flexItem flex-col gap-10"
      style={{
        backgroundImage: `url(${bgSvg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Text />
      <SearchBox />
      <SiteStatistic />
      <Icons />
    </div>
  );
};

export default Header;
