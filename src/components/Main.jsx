import { MainContent } from './MainContent';
import { NavBar } from './NavBar';

export const Main = () => {
  return (
    <div className="bg-[#f4f4f4] main ">
      <NavBar />
      <MainContent />
    </div>
  );
};
