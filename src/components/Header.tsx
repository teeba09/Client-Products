import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
// import Search from "./Search";

interface NewheaderProps {}

const Header: FunctionComponent<NewheaderProps> = () => {
  return (
    <div className="flex items-center justify-between py-4 w-full   px-2 pl-10 ">
      <div className=" flex gap-4 subpixel-antialiased text-2xl  font-bold text-pink-500">
        <Link className="hover:scale-105" to="/home">
          {" "}
          Home{" "}
        </Link>
        <Link className="hover:scale-105" to="/Products">
          {" "}
          Products{" "}
        </Link>
      </div>
      <div className="flex gap-4 subpixel-antialiased text-2xl  font-bold text-pink-500 mr-3">
        <Link className="hover:scale-105" to="/favorite">
          {" "}
          Favorites{" "}
        </Link>
        <Link className="hover:scale-105" to="/cart">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
