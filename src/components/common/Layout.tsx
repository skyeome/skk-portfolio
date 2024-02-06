import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
