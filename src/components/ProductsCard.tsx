import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const [cart, setCart] = useState<any>(() =>
    JSON?.parse?.(localStorage.getItem("cart") || "[]")
  );
  const [fav, setFav] = useState<any>(() =>
    JSON?.parse?.(localStorage.getItem("Fav") || "[]")
  );

  const AddToCart = async (item: any) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const AddToFav = async (item: any) => {
    // const Newfav = [...fav, item];
    // setFav(Newfav);
    // localStorage.setItem("fav", JSON.stringify(Newfav));
    const newFav = [...fav, item];
    setFav(newFav);
    localStorage.setItem("fav", JSON.stringify(newFav));
  };

  const RemoveFromCart = (id: any) => {
    const newCart = cart.filter((e: { id: any }) => e.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const RemoveFromFav = (id: any) => {
    // const Newfav = cart.filter((e: { id: any }) => e.id !== id);
    // setFav(Newfav);
    // localStorage.setItem("fav", JSON.stringify(Newfav));
    const newFav = fav.filter((e: { id: any }) => e.id !== id);
    setFav(newFav);
    localStorage.setItem("fav", JSON.stringify(newFav));
  };
  const RemoveFromFavAlert = () => {
    toast.warn("Product Removed from  Favorites!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const RemoveFromCartAlert = () => {
    toast.warn("Product Removed from Cart!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const AddToFavAlert = () => {
    toast.success("Product Added To Favorites!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const AddToCartAlert = () => {
    toast.success("Product Added To Cart!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      {products?.map((product) => {
        const isAdded = cart.find((e: any) => e.id === product.id);
        const isfav = fav.find((e: any) => e.id === product.id);

        console.log("cart is ", cart);
        console.log("cart is ", fav);

        return (
          <div>
            <div className="max-w-sm rounded shadow-lg mt-3 h-[500px]  hover:shadow-2xl relative">
              <div className=" flex justify-center mr-6 absolute mt-[10px] mr-[10px] pl-3">
                {isfav ? (
                  <button
                    className="px-3 py-3  inline-block border-2 border-pink-700 rounded-full  text-sm font-semibold text-black-500 mr-2"
                    onClick={() => {
                      RemoveFromFav(product.id);
                    }}
                  >
                    <BsHeartFill />
                  </button>
                ) : (
                  <button
                    className="px-3 py-3 inline-block border-2 border-pink-300 rounded-full  text-sm font-semibold text-pink-500 mr-2"
                    onClick={() => {
                      AddToFav(product);
                      // AddToCartAlert();
                    }}
                  >
                    <BsHeart />
                  </button>
                )}
                {/* <span
                className="flex justify-center rounded-full  hover:border-2 border-pink-300 p-2 "
                onClick={() => {
                  AddToFav(product);
                  AddToFavAlert();
                }}
              >
                <FaStar />
              </span>{" "} */}
              </div>

              <Link to={`/products/${product.id}`}>
                <img
                  className="w-full h-[52%] object-contain "
                  src={product.image}
                  alt=""
                />
              </Link>
              <div className=" h-[20] mb-5 px-6 py-2">
                <div className="font-bold  text-xl mb-2 truncate text-pink-500">
                  {product.title}
                </div>
                <ul>
                  <li>
                    <strong> Price : {product.price}$ </strong>
                  </li>
                  <li className="truncate  ">{product.description}</li>
                </ul>
              </div>
              <div className="px-6 py-2 ">
                <div className=" h-[30%]">
                  <div className=" flex justify-center">
                    {isAdded ? (
                      <button
                        className="px-5 py-5 w-full inline-block border-2 border-pink-700 rounded-full  text-sm font-semibold text-black-500 mr-2"
                        onClick={() => {
                          RemoveFromCart(product.id);
                          // RemoveFromCartAlert();
                        }}
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        className="px-5 py-5 w-full inline-block border-2 border-pink-300 rounded-full  text-sm font-semibold text-pink-500 mr-2"
                        onClick={() => {
                          AddToCart(product);
                          // AddToCartAlert();
                        }}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductComponent;
{
  /*  */
}
{
  /* <span className="flex justify-center mt-2">
                       <FaShoppingCart />
                     </span> */
}
{
  /* <span className="flex justify-center mt-2">
                      <FaShoppingCart />
                    </span> */
}
{
  /* <button
                    onClick={() => {
                      RemoveFromCartAlert();
                      RemoveFromCart(product);
                    }}
                    className=" px-5 py-5 inline-block bg-gray-200 rounded-full  text-sm font-semibold text-pink-500 mr-2"
                  >
                    {" "}
                    Remove of Cart{" "}
                  </button> */
}
{
  /* <div className="flex justify-center my-4">
                  <Link to={`/products/${product.id}`}>
                    <button className=" px-10 inline-block border-2 border-pink-300 rounded-full p-4 text-sm font-semibold text-pink-500 mr-2">
                      View details
                    </button>
                  </Link>
                </div> */
}
{
  /* <div className=" flex justify-between mt-3">
                  <button
                    className=" px-5 py-5 inline-block bg-gray-200 rounded-full  text-sm font-semibold text-pink-500 "
                    onClick={() => {
                      AddToFav(product);
                      AddToFavAlert();
                    }}
                  >
                    <span>
                      Add to Favorites
                  
                    </span>
                  </button>
                  <button
                    className=" px-5 py-5 inline-block bg-gray-200 rounded-full  text-sm font-semibold text-pink-500 "
                    onClick={() => {
                      RemoveFromFav(product);
                      RemoveFromFavAlert();
                    }}
                  >
                    Remove of Favorites
                  </button>
                </div> */
}
