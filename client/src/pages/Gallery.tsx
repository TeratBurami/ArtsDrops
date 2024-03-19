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

  const formattedPrice =
    price < 1000 ? price.toLocaleString() : `${(price / 1000).toFixed(1)}K`;

  const checkBox = [
    { name: "Drawing" },
    { name: "Painting" },
    { name: "Graffiti" },
    { name: "Digital Graphic" },
    { name: "Prints" },
    { name: "Works on Paper" },
    { name: "Photography" },
    { name: "Design" },
    { name: "NFTs" },
  ];

  const radio = [
    { name: "Lowest to Highest price" },
    { name: "Highest to Lowest price" },
    { name: "A-Z" },
    { name: "Z-A" },
  ];

  useEffect(() => {
    fetch("http://localhost:3333/art")
      .then((res) => res.json())
      .then((result) => {
        setArt(result);
      });
  }, []);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'THB',
  });

  return (
    <>
      <Nav></Nav>
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
        <div className="bg-[#F2F2F2] shadow-md shadow-slate-500 h-full">
          <div className="mx-auto w-fit my-10">
            <Search></Search>
          </div>

          <div>
            <h2 className="w-2/3 text-center border-b-2 border-[#8C8C8C] leading-[0.1em] mx-auto bg-[#F2F2F2] mb-6"><span className="text-[#8C8C8C] font-semibold bg-[#F2F2F2] py-[10px] px-4">Mediums</span></h2>
            <div className="grid grid-cols-3 mx-auto items-center w-fit">
              {checkBox.map((item) => (
                <div className="text-[#545454] text-xs font-semibold">
                  <input
                    onClick={handleCheck}
                    type="radio"
                    value={item.name}
                    name="rad"
                    className="w-2 border-4 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                  />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div>
          <h2 className="mt-4 w-2/3 text-center border-b-2 border-[#8C8C8C] leading-[0.1em] mx-auto bg-[#F2F2F2] mb-6"><span className="text-[#8C8C8C] font-semibold bg-[#F2F2F2] py-[10px] px-4">Price</span></h2>
            <div>
              <div className="my-8 mx-auto w-fit ">
                <input
                  type="range"
                  min={0}
                  max={100000}
                  value={price}
                  onChange={handlePriceChange}
                  step={1000}
                />
                <div className="text-[#8C8C8C] text-center font-semibold">
                  {formatter.format(price).replace('THB','')}<span className="font-light text-xs"> THB</span>
                </div>
              </div>
            </div>
          </div>
          <div>
          <h2 className="w-2/3 text-center border-b-2 border-[#8C8C8C] leading-[0.1em] mx-auto bg-[#F2F2F2] mb-6"><span className="text-[#8C8C8C] font-semibold bg-[#F2F2F2] py-[10px] px-4">Sort</span></h2>
            <div className="grid grid-cols-1 mx-auto items-center w-fit ">
              {radio.map((item) => (
                <div className="text-[#545454] text-xs font-semibold">
                  <input
                    name="radio"
                    onClick={handleCheck}
                    type="radio"
                    value={item.name}
                    className="w-2 h-2 mx-1 border-4 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                  />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ml-4 flex flex-wrap justify-center mt-6">
          {Art.map((art) => (
            <div className="basis-1/4 w-[150px] h-fit hover:scale-110 transition ease-in delay-200">
              <Product
                name={art.name}
                image={art.picture}
                price={art.price}
                type={art.type}
                detail={art.descript}
                className="h-[210px] w-[150px] mx-5"
              ></Product>
              <p className="text-center mr-4 text-slate-800 text-sm mt-0.5">
                {art.art_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
