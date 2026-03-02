import { Main } from './Main';
import { SideBar } from './SideBar';

export const Home = () => {
  return (
    <>
      <div className="layout">
        <SideBar />
        <Main />
      </div>
    </>
  );
};
