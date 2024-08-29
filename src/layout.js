import { Link, Outlet } from "react-router-dom";
import "./page.css";

function Layout() {
  return (
    <div>
      <nav class="flex-container">
        <Link to="/about" id="flex">
          About Us
        </Link>
        <Link to="/contactus" id="flex">
          Conatct Us
        </Link>
        <Link to="/register" id="flex">
          Registration
        </Link>
        <Link to="/blog " id="flex">
          Blog
        </Link>
        <Link to="/ " id="flex">
          Home
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
