import { TailChase } from "ldrs/react";
import "ldrs/react/TailChase.css";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <TailChase size="40" speed="2.4" color="blue" />
    </div>
  );
};

export const ButtonLoader = () => {
  return <TailChase size="20" speed="2.4" color="blue" />;
};
