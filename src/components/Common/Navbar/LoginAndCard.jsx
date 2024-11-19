import cardLogo from "./../../../assets/Navbar/shopping-bag.svg";

const LoginAndCard = () => {
  return (
    <div className="h-full w-2/12 flexItemJustify">
      <div className="w-[133px] h-[48px] bg-[#2196F3] rounded-[80px] flexItem">
        <span className="text-white text-right">ورود به حساب</span>
      </div>
      <div className="w-[50px] h-[50px] bg-[#FFFFFF] rounded-full relative flexItem mr-3">
        <div className="w-[18px] h-[18px] rounded-full bg-[#E3F2FD] absolute right-0 top-0 flexItem">
            <div className="w-[14px] h-[14px] rounded-full bg-[#2196F3] flexItem">
                <span className="text-[8px] mt-[2px] text-[#FFFFFF]">2</span>
            </div>
        </div>
        <img src={cardLogo} alt="shopingBag" />
      </div>
    </div>
  );
};

export default LoginAndCard;
