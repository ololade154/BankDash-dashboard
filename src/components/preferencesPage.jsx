import { NotificationButton } from "./notifiactionButton";

export const PreferencesPage = () => {
  return (
    <div className="md:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-8">
        {/* currency */}
        <div className="flex flex-col">
          <label className="text-[#232323] font-normal text-[14px] mb-1">
            Currency
          </label>
          <input
            type="text"
            placeholder="USD"
            className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
          />
        </div>

        {/* time zone */}
        <div className="flex flex-col">
          <label className="text-[#232323] font-normal text-[14px] mb-1">
            Time Zone
          </label>
          <input
            type="text"
            placeholder="(GTM-12:00) International Date Line West"
            className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
          />
        </div>
      </div>
      {/* notification */}
      <div className=" md:mt-6 mt-4">
        <h1 className="text-[#333B69] md:text-[18px] text-[16px] font-medium">
          Notification
        </h1>
        <div className="md:mt-4 mt-3 space-y-3 text-[#232323] md:text-[15px] text-[13px] font-normal">
          <div className="flex items-center md:gap-x-3.5 gap-x-3">
            <NotificationButton />
            <p>I send or receive digital currency </p>
          </div>
          <div className="flex items-center md:gap-x-3.5 gap-x-3">
            <NotificationButton />
            <p>I receive merchant order</p>
          </div>
          <div className="flex items-center md:gap-x-3.5 gap-x-3">
            <NotificationButton />
            <p>There are recommendations for my account</p>
          </div>
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
