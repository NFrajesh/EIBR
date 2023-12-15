import Header from "../../component/Header";
import { Outlet } from "react-router-dom";
const OTT = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default OTT;
