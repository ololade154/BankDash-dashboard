import { MainContent } from './MainContent';
import { NavBar } from './NavBar';

export const Main = () => {
  return (
    <>
      <div className="flex flex-col bg-amber-700 md:bg-[#f4f4f4] md:absolute md:right-0 md:h-screen md:w-[calc(100vw-260px)]">
        <NavBar />
        <MainContent />
      </div>
    </>
  );
};
