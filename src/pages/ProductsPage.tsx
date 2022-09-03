import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductsCard from "../components/ProductsCard";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  const [value, setValue] = useState("");

  const onChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm: React.SetStateAction<string>) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  return (
    <>
      <div className="flex justify-center text-pink-500">
        <div className="">
          <div className="mb-3 xl:w-96 ">
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded ">
              <input
                value={value}
                onChange={onChange}
                type="search"
                className="form-control border-pink-500 relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid  rounded transition ease-in-out m-0 focus:text-gray-500 focus:bg-white  focus:outline-none"
                placeholder="Search for products"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
            </div>
            <div></div>
            <div className="">
              {products
                .filter((item: { title: string }) => {
                  const searchTerm = value.toLowerCase();
                  const title = item.title.toLowerCase();

                  return (
                    searchTerm &&
                    title.startsWith(searchTerm) &&
                    title !== searchTerm
                  );
                })
                .map(
                  (item: {
                    id: React.Key | null | undefined;
                    title:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                  }) => (
                    <Link to={`/products/${item.id}`}>
                      <div
                        onClick={() => onSearch(item.title)}
                        className=" border-2 p-3 item-center"
                        key={item.id}
                      >
                        <a className="rounded-full rounded-tr-lg ">
                          {item.title}
                        </a>
                      </div>
                    </Link>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-4 ">
        <ProductsCard />
      </div>
    </>
  );
};

export default ProductPage;
