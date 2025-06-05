import Logo from "../Common/Navbar/Logo";
import DarkmodeNotif from "../Common/Navbar/Darkmode&Notif";
import PanelTopMenu from "./PanelTopMenu";

const PanelNavbar = ({ userInfo }) => {
  return (
    <div className="h-14 flex justify-between mx-5 pt-2">
      <Logo />
      <div className="flex gap-3 whitetext items-center">
        <img src={userInfo.userImage} alt="pic" className="w-12 h-12 border rounded-full" />
        <div className="flex flex-col">
          <span>سلام {userInfo.fName}</span>
          <span>دانشجو</span>
        </div>
      </div>
      <PanelTopMenu />
      <DarkmodeNotif />
    </div>
  );
};

export default PanelNavbar;
