// Components/Layout/MinimalLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from '../Navbar'

const MinimalLayout = () => {
  return (
    <>
      < Navbar />
      <Outlet />
    </>
  );
};

export default MinimalLayout;
