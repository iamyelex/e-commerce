import { useEffect, useState } from "react";
import PopularDisplay from "../components/PopularDisplay";
import Testimonial from "../components/Testimonial";
import Warranty from "../components/Warranty";
import { Link } from "react-router-dom";
import Loader from "../ui/Loader";

// import Footer from "../components/Footer";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      // console.log(data);
    }

    getData();
  }, []);

  return (
    <>
      <section className="px-2 lg:px-6">
        <Link to={`item-details/2`} className="text-center w-1/3">
          <div className="flex items-center space-x-6 border border-black px-2 lg:px-4">
            <div>
              <h1 className="mb-1">Apple Products</h1>
              <button className="text-orange-400 text-center  bg-black rounded-lg py-1 w-full capitalize">
                shop more
              </button>
            </div>
            <img src="" alt="iphone-x" className="w-2/3 h-52 lg:h-96" />
          </div>
        </Link>

        <main className="mt-4">
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Popular Products</h2>
              <div className="hidden lg:flex lg:space-x-5">
                <button className="popular">samsung</button>
                <button className="popular">apple</button>
                <button className="popular">beauty</button>
              </div>
              <div className="lg:hidden">
                <select
                  name=""
                  id=""
                  className="bg-black rounded-md px-1 outline-none"
                >
                  <option value="samsung">Samsung</option>
                  <option value="samsung">Apple</option>
                  <option value="samsung">Others</option>
                </select>
              </div>
            </div>

            {products.length === 0 && (
              <div className="flex items-center justify-center mt-4">
                <Loader />
              </div>
            )}

            <div className=" grid grid-cols-2 gap-2 lg:grid-cols-6 lg:gap-6 my-6">
              {products &&
                products
                  .slice(0, 12)
                  .map((item) => (
                    <PopularDisplay
                      key={item.id}
                      id={item.id}
                      price={item.price}
                      products={item.title}
                      image={item.thumbnail}
                    />
                  ))}

              {/* <PopularDisplay
                price="20000"
                image="./sava.png"
                products="iphone 14pro"
                id="1"
              />
              <PopularDisplay
                price="10000"
                image="./sava.png"
                products="samsung z50"
                id="2"
              />
              <PopularDisplay
                price="1500"
                image="./sava.png"
                products="Nokia h10"
                id="3"
              /> */}
              {/* <PopularDisplay />
             <PopularDisplay />
             <PopularDisplay />
             <PopularDisplay />
             <PopularDisplay />
             <PopularDisplay />
             <PopularDisplay /> */}
            </div>
          </section>

          <section className="flex items-center bg-black w-full h-80 rounded-xl p-2 lg:p-4">
            <img src="" alt="microsoft" className="h-full w-1/2" />
            <div className="flex flex-col space-y-3 items-center w-1/2">
              <p className="text-sm lg:text-3xl font-bold">
                Sale up to 50% off
              </p>
              <button className="text-black text-center  bg-orange-400 rounded-lg py-1 w-full capitalize outline-none">
                shop now
              </button>
            </div>
          </section>

          <section className="grid lg:grid-cols-3 gap-10 bg-white py-4 lg:py-6 my-6 lg:my-10 rounded-xl">
            <Warranty
              title="Free delivery"
              summary="on order above $1,000"
              icon="./box-tick.png"
            />
            <Warranty
              title="Best quality"
              summary="best quality in low price"
              icon="./crown.png"
            />
            <Warranty
              title="1 year warranty"
              summary="Available warranty"
              icon="./shield-security.png"
            />
          </section>

          <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-2 lg:space-y-0 mb-6 lg:mb-10">
            <Testimonial
              image="./sava.png"
              name="savannah nguyen"
              summary="Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper."
            />
            <Testimonial
              image="./esther.png"
              name="esther howard"
              summary="Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper."
            />
            <Testimonial
              image="./howard.png"
              name="charles howard"
              summary="Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper."
            />
          </div>
        </main>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
