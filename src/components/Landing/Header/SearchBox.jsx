import searchIcon from "./../../../assets/Landing/header/search-normal.svg";

const SearchBox = () => {
  return (
    <div className="rounded-2xl bg-white w-[724px] h-[56px] flexItemBetween px-5 py-4 z-20">
      <input
        type="search"
        className="w-full text-[1em] p-1 font-medium text-[#607D8B] appearance-none border-none outline-none"
        placeholder="چی میخوای یاد بگیری ؟"
      />
      <img src={searchIcon} alt="search" className="cursor-pointer" />
    </div>
  );
};

export default SearchBox;
