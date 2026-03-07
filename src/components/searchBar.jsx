import { SearchIcon } from '../Icons/searchIcon';

export const SearchBar = () => {
  return (
    <div className="w-full max-w-md flex items-center justify-center gap-2 px-4 h-9 rounded-full search-bg focus-within:ring-2 focus-within:ring-[#EEF3FB]">
      <SearchIcon />

      <input
        type="text"
        placeholder="Search for something"
        className="w-full bg-transparent outline-none text-[12px] placeholder:text-[#8BA3CB] input-color placeholder:text-[12px]"
      />
    </div>
  );
};
