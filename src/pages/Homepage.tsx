import { FunctionComponent } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Foodpage from "./ProductsPage";

interface HomepageProps {}

const Homepage: FunctionComponent<HomepageProps> = () => {
  return (
    <div className="text-center bg-gray-50 text-gray-800 py-20 px-6">
      <h1 className="text-5xl font-bold mt-0 mb-6">Products Store!</h1>
      <h3 className="text-3xl font-bold mb-8"> check our products!</h3>
      <Link to={"/Products"}>
        <a
          className="  hover:bg-pink-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-pink-200 text-pink-500 border-pink-800 py-4 px-4 pl-4"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Get started
        </a>
      </Link>
    </div>
  );
};

export default Homepage;
