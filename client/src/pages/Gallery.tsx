import Nav from "../components/nav/nav";
import Button from "../components/button/button";
import { useState, useEffect } from "react";
import Product from "../components/overlay/Product";
import Search from "../components/search";
import Card from "../components/card";

export default function Gallery() {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => setChecked(!checked);
  const [Art, setArt] = useState<any[]>([]);
  const [price, setPrice] = useState<number>(10000);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value));
  };

  const formattedPrice = price < 1000 ? price.toLocaleString() : `${(price / 1000).toFixed(1)}K`;

  useEffect(() => {
    fetch("http://localhost:3333/art")
      .then((res) => res.json())
      .then((result) => {
        setArt(result);
      });
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
        <div className="bg-[#F2F2F2] shadow-md">
          <div className="mx-auto w-fit my-10">
            <Search></Search>
          </div>

          <div>
            <div>
              <div className="mx-auto w-fit font-semibold text-[#8C8C8C]">
                {/* Medium */}
              </div>
            </div>
            <div className="grid grid-cols-3 mx-auto items-center w-fit">
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Drawing
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Painting
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Graffiti
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Digital Graphic
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Prints
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Works on Paper
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Photography
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Design
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                NFTs
              </div>
            </div>
          </div>
          <div>
            <div className="h-0.5 w-5/6 mx-auto mt-5 bg-[#8C8C8C] border-0 rounded text-[#8C8C8C]">
              {/* Price */}
            </div>
            <div>
                <div className="my-10 mx-auto w-fit ">
                  <input
                    type="range"
                    min={0}
                    max={20000}
                    value={price}
                    onChange={handlePriceChange}
                    step={100}
                  />
                  <div className="text-[#8C8C8C]">${formattedPrice.toLocaleString()}</div>
                </div>
              </div>
          </div>
          <div>
            <div className="h-0.5 w-5/6 mx-auto mt-5 my-7 bg-[#8C8C8C] border-0 rounded text-[#8C8C8C]"></div>
            <div className="grid grid-cols-1 mx-auto items-center w-fit">
              <div className="text-[#545454] text-xs ml-[8px]">
                <input
                  type="radio"
                  name="sort"
                  value=""
                  className="w-2 h-2 mx-1 mb-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>
                Lowest to Highest price
              </div>
              <div className="text-[#545454] text-xs ml-[8px]">
                <input
                  type="radio"
                  name="sort"
                  value=""
                  className="w-2 h-2 mx-1 mb-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>
                Highest to Lowest price
              </div>
              <div className="text-[#545454] text-xs ml-[8px]">
                <input
                  type="radio"
                  value=""
                  name="sort"
                  className="w-2 h-2 mx-1 mb-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>
                A-Z
              </div>
              <div className="text-[#545454] text-xs ml-[8px]">
                <input
                  type="radio"
                  value=""
                  name="sort"
                  className="w-2 h-2 mx-1 mb-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>
                Z-A
              </div>
            </div>
          </div>
        </div>

        <div className="ml-4 grid grid-cols-4 mt-6">
          {Art.map((art) => (
            <div className="w-fit">
              <Product name={art.name} image={art.picture} price={art.price} type={art.type} detail={art.descript} className="h-[210px] w-[150px] mx-5"></Product>
              <p className="text-center font-light text-sm mt-0.5">{art.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
