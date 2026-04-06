import { PencilIcon } from "../Icons/pencilIocn";
import { NavImage } from "./NavImage";

export const EditProfile = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:gap-10 gap-y-8">
      <div className=" flex justify-center relative">
        <NavImage
          src="/nav-image.svg"
          className="w-30 h-30 flex items-center justify-center "
        />
        <div className="bg-[#1814F3] w-7 h-7 rounded-full absolute bottom-2 right-25 md:bottom-5 md:-right-2 flex justify-center items-center">
          <PencilIcon />
        </div>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-8">
          {/* name */}
          <div className="flex flex-col">
            <label className="text-[#232323] font-normal text-[14px] mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Charlene Reed"
              className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
            />
          </div>

          {/* username */}
          <div className="flex flex-col">
            <label className="text-[#232323] font-normal text-[14px] mb-1">
              User Name
            </label>
            <input
              type="text"
              placeholder="Charlene Reed"
              className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-[#232323]  font-normal text-[14px] mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="charlenereed@gmail.com"
              className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px] "
            />
          </div>

          {/* password */}
          <div className="flex flex-col">
            <label className="text-[#232323] font-normal text-[14px] mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********* "
              className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
            />
          </div>
          {/* date of birth */}
          <div className="flex flex-col">
            <label className="text-[#232323] font-normal text-[14px] mb-1">
              Date Of Birth
            </label>
            <input
              type="date"
              placeholder="25 january 1990"
              className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
            />
          </div>
          {/* address */}
          <div className="flex flex-col">
            <label className="text-[#232323] font-normal text-[14px] mb-1">
              Present Address
            </label>
            <input
              type="text"
              placeholder="San Jose, California, USA "
              className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
            />
          </div>
          {/* address */}
          <div className="flex flex-col">
            <label className="text-[#232323] font-normal text-[14px] mb-1">
              Permanent Address
            </label>
            <input
              type="text"
              placeholder="San Jose, California, USA "
              className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
            />
          </div>
          {/* city */}
          <div className="flex flex-col">
            <label className="text-[#232323] font-normal text-[14px] mb-1">
              City
            </label>
            <input
              type="text"
              placeholder="San Jose "
              className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
            />
          </div>
          {/* postal code */}
          <div className="flex flex-col">
            <label className="text-[#232323] font-normal text-[14px] mb-1">
              Postal Code
            </label>
            <input
              type="text"
              placeholder="45962 "
              className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
            />
          </div>
          {/* country */}
          <div className="flex flex-col">
            <label className="text-[#232323] font-normal text-[14px] mb-1">
              Country
            </label>
            <input
              type="text"
              placeholder="USA "
              className="w-full px-4 py-2 border border-[#DFEAF2] rounded-2xl outline-0 mt-1 placeholder-[#718EBF] font-normal text-[16px] md:text-[14px]"
            />
          </div>
        </div>
        <div className="mt-5  flex md:justify-end mb-4">
          <button className="w-full md:w-40 bg-[#1814F3] text-white py-2.5 rounded-xl font-light">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
