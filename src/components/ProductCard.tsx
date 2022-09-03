import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = () => {
  const [fav, setFav] = useState<any>(() =>
    JSON?.parse?.(localStorage.getItem("Fav") || "[]")
  );
  const AddToFav = async (item: any) => {
    const Newfav = [...fav, item];
    setFav(Newfav);
    localStorage.setItem("fav", JSON.stringify(Newfav));
  };
  const remove = (id: any) => {
    const newCart = cart.filter((e: { id: any }) => e.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const [cart, setCart] = useState<any>(() =>
    JSON?.parse?.(localStorage.getItem("cart") || "[]")
  );
  const AddToCart = async (item: any) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description, rating } = product;
  const dispatch = useDispatch();
  console.log("hey", product);

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div className="mt-8 flex justify-center">
            <Link
              to={`/products`}
              className="  hover:bg-pink-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-pink-200 text-pink-500 border-pink-800 py-4 px-4 pl-4"
            >
              Back To Products
            </Link>
          </div>
          <div className=" m-5 p-4 rounded  shadow-lg bg-white flex w-screen  object-fill">
            <div className=" w-1/3 ">
              <img className="" src={image} />
            </div>
            <div className="w-1/2 m-5 pl-10 ">
              <h1 className="font-bold text-pink-500 text-2xl  ">{title}</h1>
              <h2 className="pt-5">
                <a className="mt-3 text-xl font-semibold"> price: ${price}</a>
              </h2>
              <p className="grow mt-4 mb-4 text-base max-w-prose ... font-normal">
                {description}
              </p>
              <span className="text-[10px] inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-500 mr-2">
                {" "}
                {category}
              </span>
              <h3 className="text-sm text-[10px] inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-500 mr-2">
                {" "}
                {rating.rate}
              </h3>
              {/* <div className=" flex justify-between  ">
                <div className="ml-5 mt-5 ">
                  <button
                    className=" rounded-none bg-gray-200 p-2 text-sm font-semibold text-gray-700 "
                    onClick={() => AddToCart(product)}
                  >
                    Add to
                    <span className="flex  mt-2">
                      <FaShoppingCart />
                    </span>
                  </button>
                </div>
                <div className="ml-20">
                  <button
                    className=" rounded-none bg-gray-200 p-2 text-sm font-semibold text-gray-700 "
                    onClick={() => AddToFav(product)}
                  >
                    <span>
                      Add to
                      <span className="flex mt-2">
                        <FaStar />
                      </span>
                    </span>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

// import { FunctionComponent } from "react";
// import { Link } from "react-router-dom";
// import Insidecard from "./Insidecards";
// import { useNavigate, useParams } from "react-router-dom";

// interface NewcardProps {
//   item: any;
// }

// const ProductCard: FunctionComponent<NewcardProps> = (props) => {
//   const params = useParams();
//   const navg = useNavigate();
//   return (
{
  /* <div className=" m-5 p-4 rounded  shadow-lg bg-white flex w-screen object-fill">
  <div className=" w-1/3">
    <img className="" src={props.item.image} alt="" />
  </div>
  <div className="  w-1/2 m-4">
    <h1 className="font-bold text-cyan-800 text-xl  "> {props.item.name}</h1>
    <h2 className="mt-3 text-lg">
      {" "}
      Price: {props.item.price} {props.item.currency}
    </h2>
    <h3 className="grow mt-4 mb-4 text-lg max-w-prose ...">
      {" "}
      {props.item.description}
    </h3>
    <h4 className="text-sm"> Created at : {props.item.createdAt}</h4>
    <h4 className="text-sm"> Updated at: {props.item.updatedAt}</h4>
    <div className="mt-8 place-self-center ">
      <span className="text-xs rounded-full shadow-sm border-spacing-1  outline outline-offset-2 outline-1 ... p-1 ">
        Rating:
        {props.item.rating}
      </span>
    </div>
    <button className=" object-center ml-30 rounded-sm bg-cyan-600 hover:bg-cyan-800 focus:outline-none focus:ring focus:ring-violet-300 mt-4 px-4 py-2 text-white uppercase">
      {" "}
      buy{" "}
    </button>
  </div>
</div>;
//   );
// };

// export default ProductCard; */
}

// <div className="ui grid container">
//   {Object.keys(product).length === 0 ? (
//     <div>...Loading</div>
//   ) : (
//     <div className=" m-5 p-4 rounded  shadow-lg bg-white flex w-screen object-fill">
//       <div className=" w-1/3">
//         <img className="" src={image} alt="" />
//       </div>
//       <div className="  w-1/2 m-4">
//         <h1 className="font-bold text-cyan-800 text-xl  "> {title}</h1>
//         <h2 className="mt-3 text-lg"> Price: {price}</h2>
//         <h3 className="grow mt-4 mb-4 text-lg max-w-prose ...">
//           {description}
//         </h3>

//         <div className="mt-8 place-self-center ">
//           <span className="text-xs rounded-full shadow-sm border-spacing-1  outline outline-offset-2 outline-1 ... p-1 ">
//             Rating:
//             {rating}
//           </span>
//         </div>
//         <button className=" object-center ml-30 rounded-sm bg-cyan-600 hover:bg-cyan-800 focus:outline-none focus:ring focus:ring-violet-300 mt-4 px-4 py-2 text-white uppercase">
//           {" "}
//           buy{" "}
//         </button>
//       </div>
//     </div>

// )}
// </div>
// <div className="ui grid container">
//   {Object.keys(product).length === 0 ? (
//     <div>...Loading</div>
//   ) : (
//     <div className=" m-5 p-4 rounded  shadow-lg bg-white flex w-screen object-fill">
//       <div className=" w-1/3">
//         <img className="" src={image} alt="" />
//       </div>
//       <div className="  w-1/2 m-4">
//         <h1 className="font-bold text-cyan-800 text-xl  "> {title}</h1>
//         <h2 className="mt-3 text-lg"> Price: {price}</h2>
//         <h3 className="grow mt-4 mb-4 text-lg max-w-prose ...">
//           {description}
//         </h3>

//         <div className="mt-8 place-self-center ">
//           <span className="text-xs rounded-full shadow-sm border-spacing-1  outline outline-offset-2 outline-1 ... p-1 ">
//             Rating:
//             {rating}
//           </span>
//         </div>
//         <button className=" object-center ml-30 rounded-sm bg-cyan-600 hover:bg-cyan-800 focus:outline-none focus:ring focus:ring-violet-300 mt-4 px-4 py-2 text-white uppercase">
//           {" "}
//           buy{" "}
//         </button>
//       </div>
//     </div>
