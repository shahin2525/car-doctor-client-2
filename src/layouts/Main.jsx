import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";

const Main = () => {
  return (
    <div>
      {/* <Home></Home> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
