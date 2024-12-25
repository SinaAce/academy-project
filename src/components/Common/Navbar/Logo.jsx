import { Link } from "react-router-dom";
import navbarLogo from "./../../../assets/Navbar/Group 33.svg";

const Logo = () => {
  return (
    <div className="h-full w-1/6 flexItem gap-3 cursor-pointer flex-row-reverse">
      <Link to={"/"}>
        <span className="text-xl text-right">آکادمی سینا</span>
      </Link>

      <Link to={"/"}>
        <img src={navbarLogo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
