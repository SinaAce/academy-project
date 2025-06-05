import React from "react";
import Logo from "../../Common/Navbar/Logo";
import loginVector from "../../../assets/Auth/3d-hygge-top-view-of-laptop-glasses-cup-of-coffee-headphones-1 1.svg";

const LoginPic = () => {
  return (
    <div className="w-1/2 h-full bg-[#F1F1F1] rounded-[32px] p-5 flex flex-col gap-32">
      <Logo />
      <div className="flex flex-col gap-4">
        <span className="text-[1.75rem] font-bold">شروع یک ماجراجویی</span>
        <span className="text-[1rem] font-semibold">
          هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر
        </span>
      </div>
      <div className="w-full flex justify-center">
        <img className="w-[300px]" src={loginVector} alt="loginVector" />
      </div>
    </div>
  );
};

export default LoginPic;
