import { NotificationButton } from "./notifiactionButton";
export const SecurityPage = () => {
  return (
    <div className="md:mt-8">
      {/* notification */}
      <div className=" md:mt-6 mt-4">
        <h1 className="text-[#333B69] md:text-[18px] text-[16px] font-medium">
          Two-factor Authentication
        </h1>
        <div className="md:mt-4 mt-3 space-y-3 text-[#232323] md:text-[15px] text-[13px] font-normal">
          <div className="flex items-center md:gap-x-5 gap-x-3">
            <NotificationButton />
            <p>Enable or disable two factor authetication</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:mt-6 mt-4">
        {/* password */}
        <div className="flex flex-col">
          <label className="text-[#232323] font-normal text-[14px] mb-1">
            Current Password
          </label>
          <input
            type="text"
            placeholder="*********"
            className="w-full max-w-90 px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
          />
        </div>
        {/* password */}
        <div className="flex flex-col">
          <label className="text-[#232323] font-normal text-[14px] mb-1">
            New Password
          </label>
          <input
            type="text"
            placeholder="*********"
            className="w-full max-w-90 px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
          />
        </div>
      </div>

      <div className="mt-5 flex md:justify-end mb-4">
        <button className="w-full md:w-40 bg-[#1814F3] text-white py-2.5 rounded-xl font-light">
          Save
        </button>
      </div>
    </div>
  );
};
