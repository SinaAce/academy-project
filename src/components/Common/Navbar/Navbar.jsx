import LoginAndCard from "./LoginAndCard";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="w-11/12 h-[50px] relative top-[32px] m-auto flexItemJustify">
      <LoginAndCard />
      <Menu />
      <Logo />
    </div>
  );
};

export default Navbar;
