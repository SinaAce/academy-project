import navbarLogo from "./../../../assets/Navbar/Group 33.svg";

const Logo = () => {
  return (
    <div className="h-full w-1/6 flexItem gap-3 cursor-pointer flex-row-reverse">
      <span className="text-xl text-right">آکادمی سینا</span>
      <img src={navbarLogo} alt="Logo" />
    </div>
  );
};

export default Logo;
