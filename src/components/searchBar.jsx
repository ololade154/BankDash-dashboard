export const SearchBar = () => {
  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-10 px-4 rounded-full bg-gray-100 outline-none text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
