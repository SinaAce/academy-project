import bgSvg from "./../../../../assets/Landing/Image [home-hero-background].svg";
import SiteStatistic from "./SiteStatistic";
import Text from "./Text";
import Icons from "./Icons";
import SearchBox from '../../../Common/SearchBox/SearchBox';

const Header = () => {
  return (
    <div
      className="w-full h-[900px] rounded-b-[30%] flexItem flex-col gap-12 -mt-14"
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
