import { MainContent } from './MainContent';
import { NavBar } from './NavBar';

export const Main = () => {
  return (
    <div className="bg-amber-300 main ">
      <NavBar />
      <MainContent />
    </div>
  );
};
