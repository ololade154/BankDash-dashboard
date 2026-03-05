import { Routes, Route } from 'react-router';
import { HomePage } from './components/homePage';
import { Login } from './components/Login';
import { Layout } from './components/layout';
export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
