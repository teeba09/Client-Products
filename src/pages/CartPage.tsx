import { FunctionComponent, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Foodpage from "./ProductsPage";

const CartPage = () => {
  const [cart, setCart] = useState<any>(() =>
    JSON?.parse?.(localStorage.getItem("cart") || "[]")
  );
  const RemoveFromCart = (id: any) => {
    const newCart = cart.filter((e: { id: any }) => e.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  // console.log("cart is", cart);

  return (
    <>
      {Object.keys(cart).length === 0 ? (
        <div className="  text-pink-500 text-xlg mb-20">
          <h1 className=" flex justify-center">
            You have nothing on your Cart!
          </h1>
          <div className="mt-8 flex justify-center">
            <Link
              to={`/products`}
              className="  hover:bg-pink-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-pink-200 text-pink-500 border-pink-800 py-4 px-4 pl-4"
            >
              Back To Products
            </Link>
          </div>
        </div>
      ) : (
        cart?.map((product) => {
          return (
            <div className=" m-5 p-4 rounded  shadow-lg bg-white flex w-screen  object-fill">
              <div className=" w-1/3 ">
                <img className="" src={product.image} />
              </div>
              <div className="flex justify-between">
                <div className="w-1/2 m-5 pl-10 ">
                  <h1 className="font-bold text-pink-500 text-2xl  ">
                    {product.title}
                  </h1>
                  <h2 className="pt-5">
                    <a className="mt-3 text-xl font-semibold">
                      {" "}
                      price: ${product.price}
                    </a>
                  </h2>
                  <p className="grow mt-4 mb-4 text-base max-w-prose ... font-normal">
                    {product.description}
                  </p>
                  <span className="text-[10px] inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-500 mr-2">
                    {" "}
                    {product.category}
                  </span>
                  <h3 className="text-sm text-[10px] inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-500 mr-2">
                    {" "}
                    {product.rating.rate}
                  </h3>
                </div>
                <div className=" mr-5">
                  <button
                    className="inline-block bg-gray-200 rounded-full p-4 text-xlg font-semibold text-pink-500 mr-2"
                    onClick={() => RemoveFromCart(product.id)}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default CartPage;
