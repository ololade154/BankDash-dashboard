import { useState, useEffect } from "react";
import { EditProfile } from "./editProfile";
import { PreferencesPage } from "./preferencesPage";
import { SecurityPage } from "./securityPage";
import { Loader } from "./loader";
export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("editProfile");
  const renderTab = () => {
    switch (activeTab) {
      case "editProfile":
        return <EditProfile />;
      case "preferences":
        return <PreferencesPage />;
      case "security":
        return <SecurityPage />;
      default:
        return null;
    }
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading (like fetching API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg-white py-2 px-4 md:py-3 md:px-6 rounded-3xl">
      {/* Tabs */}
      <div className="flex flex-wrap items-center mb-5 gap-x-6 md:gap-x-20 border-b border-[#EBEEF2] md:mb-6 text-[#718EBF] text-[14px] md:text-[15px] font-medium">
        <p
          onClick={() => {
            setActiveTab("editProfile");
          }}
          className={`cursor-pointer py-3 rounded-tl-[10px] rounded-tr-[10px] ${
            activeTab === "editProfile"
              ? "text-[#1814F3] border-b-[3px] border-[#1814F3]"
              : ""
          }`}
        >
          Edit Profile
        </p>

        <p
          onClick={() => {
            setActiveTab("preferences");
          }}
          className={`cursor-pointer py-3 rounded-tl-[10px] rounded-tr-[10px] ${
            activeTab === "preferences"
              ? "text-[#1814F3] border-b-[3px] border-[#1814F3]"
              : ""
          }`}
        >
          Preferences
        </p>

        <p
          onClick={() => {
            setActiveTab("security");
          }}
          className={`cursor-pointer py-3 rounded-tl-[10px] rounded-tr-[10px] ${
            activeTab === "security"
              ? "text-[#1814F3] border-b-[3px] border-[#1814F3]"
              : ""
          }`}
        >
          Security
        </p>
      </div>
      {/* Content */}
      <div>{renderTab()}</div>
    </div>
  );
};
