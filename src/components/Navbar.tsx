import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center border-b border-border py-4">
      <Link to="/">
        <div className="italic tracking-wider font-medium md:text-lg">
          Weather<span className="text-cyan-300">Vue</span>
        </div>
      </Link>
      <Search />
    </nav>
  );
};

export default Navbar;
