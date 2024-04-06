import { Outlet } from "react-router-dom";
import NavBar from "./pages/components/NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
