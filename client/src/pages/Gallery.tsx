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

  useEffect(() => {
    fetch("http://localhost:3333/art")
      .then(res => res.json())
      .then(
        (result) => {
          setArt(result);
        }
      )
  }, [])

  return (
    <>
      <Nav></Nav>
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
        <div className="bg-[#F2F2F2] shadow-md">
          <div className="mx-auto w-fit my-10">
            <Search></Search>
          </div>

          <div>
            <div className="h-0.5 w-5/6 mx-auto my-7 bg-[#8C8C8C] border-0 rounded text-[#8C8C8C]">
              {/* categories */}
            </div>
            <div className="grid grid-cols-3 mx-auto items-center w-fit">
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Contemporary Art
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Emerging Art
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Street Art
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Abstract Art
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Pop Art
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Minimalism
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Seascape
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Human figure
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Animal figure
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Illustration
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Composition
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-4 bg-gray-100 border-gray-300 rounded"
                ></input>
                Potrait
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-6 bg-gray-100 border-gray-300 rounded"
                ></input>
                Cityscape
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-6 bg-gray-100 border-gray-300 rounded"
                ></input>
                Landscape
              </div>
              <div className="text-[#545454] text-xs">
                <input
                  onClick={handleCheck}
                  type="checkbox"
                  value=""
                  className="w-2 h-2 mx-1 ml-3 mb-2 bg-gray-100 border-gray-300 rounded"
                ></input>
                Decorative painting
              </div>
            </div>
            <div className="text-[#545454] text-xs ml-[8px]">
              <input
                onClick={handleCheck}
                type="checkbox"
                value=""
                className="w-2 h-2 mx-1 mb-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              ></input>
              Impressionist and Modern Art
            </div>
          </div>

          <div>
            <div>
              <div className="h-0.5 w-5/6 mx-auto my-7 bg-[#8C8C8C] border-0 rounded"></div>
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
            <div className="h-0.5 w-5/6 mx-auto my-7 bg-[#8C8C8C] border-0 rounded text-[#8C8C8C]">
              {/* Price */}
            </div>
            <div></div>
          </div>
          <div>
            <div className="h-0.5 w-5/6 mx-auto my-7 bg-[#8C8C8C] border-0 rounded text-[#8C8C8C]"></div>
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

        <div className="grid grid-cols-4">
            {Art.map(art=>(
                <img src={art.picture} key={art.id} className="h-[210px] w-[150px] mx-5 objext cover"></img>
            ))}
        </div>
      </div>
      <Product></Product>
    </>
  );
}
