import Nav from "../components/nav/nav";
import Button from "../components/button/button";
import { useState, useEffect } from "react";
import Product from "../components/overlay/Product";
import Footer from "../components/footer";
import { useLocation, useNavigate } from "react-router-dom";


export default function Gallery(this: any) {
  const location = useLocation();

  //state of storing data
  const [Art, setArt] = useState<any[]>([]);

  //state of handling price input
  const [price, setPrice] = useState<number>(10000);

  //handle the change of price
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value));
  };

  //label for check box
  const checkBox = [
    { name: "Drawing" },
    { name: "Painting" },
    { name: "Graffiti" },
    { name: "Digital Art" },
    { name: "Prints" },
    { name: "Art Toy" },
    { name: "Photography" },
    { name: "Design" },
    { name: "NFTs" },
  ];

  //label for radio
  const radio = [
    { name: "Lowest to Highest price" },
    { name: "Highest to Lowest price" },
    { name: "A-Z" },
    { name: "Z-A" },
  ];

  //set data as a blank
  const [data, setData] = useState({
    search: "",
    type: "",
    sort: "",
  });

  const mediums = document.getElementsByName("type");
  const sort = document.getElementsByName("sort");
  const search = document.getElementById("searchBar");

  //get arts when start the page
  useEffect(() => {
    
    fetch(`http://localhost:3333/art?search=${location.state? location.state:''}`)
      .then((res) => res.json())
      .then((result) => {
        setArt(result);
      });
    }, []);
    
    
  //search art from input data
  const handleSubmit = async () => {
    window.history.replaceState({}, '')
    let sorted='';
    switch(data.sort){
      case 'Lowest to Highest price':sorted='price ASC'; break;
      case 'Highest to Lowest price':sorted='price DESC'; break;
      case 'A-Z':sorted='art_name ASC'; break;
      case 'Z-A':sorted='art_name DESC'; break;
      default:sorted='error';
    }
    console.log(data.search, " | ", data.type, " | ", price,' | ',sorted);
    console.log(data.sort);

    const response = await fetch(
      `http://localhost:3333/art?name=${data.search}&type=${data.type}&price=${price}&sort=${sorted}`
    );
    const art = await response.json();
    console.log(art);
    setArt(art);
  };

  //currency formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "THB",
  });

  //handle press enter to search
  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      window.history.replaceState({}, '')
      handleSubmit();
    }
  };

  //handle clear button
  const handleClear = () => {
    window.history.replaceState({}, '')
    mediums.forEach((radio) => {
      radio.checked = false;
    });
    sort.forEach((radio) => {
      radio.checked = false;
    });
    search!.value = "";
    setPrice(100000);
    setData({ type: "", search: "",sort:"" });
    fetch("http://localhost:3333/art")
      .then((res) => res.json())
      .then((result) => {
        setArt(result);
      });
  };

  return (
    <>
      <Nav></Nav>
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] bg-[#F2F2F2]">
        <div className="bg-[#F2F2F2] h-[600px] pb-10 sticky top-0 ">
          <div className="mx-auto w-2/3 my-7">
            <input
              id="searchBar"
              onKeyUp={handleKeyPress.bind(this)}
              onChange={(newData) =>
                setData({ ...data, search: newData.target.value })
              }
              type="text"
              placeholder="Art name"
              className="w-full cursor-text focus:outline-blue-600 hover:border-black p-1 pl-3 mt-2 rounded-full border border-[1.3px] border-[#C4C4C4] text-slate-600"
            ></input>
          </div>

          <div>
            <h2 className="w-2/3 text-center border-b-2 border-[#8C8C8C] leading-[0.1em] mx-auto bg-[#F2F2F2] mb-6">
              <span className="text-[#8C8C8C] font-semibold bg-[#F2F2F2] py-[10px] px-4">
                Mediums
              </span>
            </h2>
            <div className="grid grid-cols-3 mx-auto items-center w-fit">
              {checkBox.map((item) => (
                <div className="text-[#545454] text-xs font-semibold">
                  <input
                    onChange={(newData) =>
                      setData({ ...data, type: newData.target.value })
                    }
                    type="radio"
                    value={item.name}
                    name="type"
                    className="w-2 border-4 h-2 mx-1 ml-3 mb-3 bg-gray-100 border-gray-300 rounded"
                  />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mt-4 w-2/3 text-center border-b-2 border-[#8C8C8C] leading-[0.1em] mx-auto bg-[#F2F2F2]">
              <span className="text-[#8C8C8C] font-semibold bg-[#F2F2F2] py-[10px] px-4">
                Price
              </span>
            </h2>
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
                  {formatter.format(price).replace("THB", "")}
                  <span className="font-light text-xs"> THB</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="w-2/3 text-center border-b-2 border-[#8C8C8C] leading-[0.1em] mx-auto bg-[#F2F2F2] mb-4">
              <span className="text-[#8C8C8C] font-semibold bg-[#F2F2F2] py-[10px] px-4">
                Sort
              </span>
            </h2>
            <div className="grid grid-cols-1 mx-auto items-center w-fit ">
              {radio.map((item) => (
                <div className="text-[#545454] text-xs font-semibold">
                  <input
                    name="sort"
                    onChange={(newData) =>
                      setData({ ...data, sort: newData.target.value })
                    }
                    type="radio"
                    value={item.name}
                    className="w-2 h-2 mx-1 border-4 ml-3 mb-3 bg-gray-100 border-gray-300 rounded"
                  />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 mx-auto gap-4 w-2/3 flex">
            <Button
              className="normal w-full active:bg-red-600 hover:bg-[#E4080A] hover:border-none hover:text-white"
              value="Clear"
              onclick={handleClear}
            ></Button>
            <Button
              className="submit w-full"
              value="Search"
              onclick={handleSubmit}
            ></Button>
          </div>
        </div>

        <div className="bg-white shadow-[inset_10px_0px_25px_-10px_rgba(0,0,0,0.3)]">
        <div className="ml-4 flex flex-wrap justify-start mt-6">
          {Art.map((art) => (
            <div className="mb-12 basis-1/4 w-[150px] h-fit hover:scale-110 transition ease-in delay-200">
              <Product
                artist_name={art.artist_name}
                name={art.art_name}
                image={art.picture}
                price={art.price}
                type={art.type}
                detail={art.descript}
                className="h-[210px] w-[150px] mx-auto object-cover"
              ></Product>
              <p className="text-center text-slate-800 text-sm mt-0.5">
                {art.art_name}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
