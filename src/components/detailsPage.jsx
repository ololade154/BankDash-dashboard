import { House } from '../Icons/House';

import { Login } from './Login';
export const DetailsPage = () => {
  return (
    <div>
      <h1 className="text-blue-400">Details Page</h1>
      <Login />
      <House className="icon-color hover-color" />

      <img src="src/Images/Logo.svg" alt="logo" className="h-20 w-20" />
    </div>
  );
};
