import Nav from "../components/nav/nav";
import Button from "../components/button/button";
import { useState } from "react";
import Product from "../components/overlay/Product";
import Search from "../components/search";

export default function Gallery() {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => setChecked(!checked);
  return (
    <>
      <Nav></Nav>
      <div className="grid grid-cols-[25%_75%]">
        <div className="bg-[#F2F2F2]">
          <div className="mx-auto w-fit my-10">
            <Search></Search>
          </div>

          <div>
            <div className="h-1 w-4/5 mx-auto my-7 bg-[#8C8C8C] border-0 rounded text-[#8C8C8C] font-semibold"></div>
            <div className="grid grid-cols-3 mx-auto items-center w-fit">
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Contemporary Art</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Emerging Art</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Street Art</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Abstract Art</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Pop Art</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Minimalism</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Potrait</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Human figure</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Animal figure</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Illustration</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Composition</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Decorative painting</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Cityscape</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Landscpae</div>
                <div className="text-[#545454] text-sm"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-3 mb-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Seascape</div> 
            </div>
            <div className="text-[#545454] text-sm ml-[19px]"><input
                    onClick={handleCheck}
                    type="checkbox"
                    value=""
                    className="w-3 h-3 mx-1 ml-1 text-blue-600 bg-gray-100 border-gray-300 rounded"
                ></input>Impressionist and Modern Art</div>  
          </div>

        </div>
        
        <div className=""></div>
      </div>
      <Product></Product>
    </>
  );
}
