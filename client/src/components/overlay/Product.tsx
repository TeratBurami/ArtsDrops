import { useState } from "react";
import Button from "../button/button";
import { Dialog } from "@mui/material";

interface Props{
  name:string;
  image:string;
  price:number;
  detail:string;
  type:string;
  className?:string;
  button?:boolean;
}

export default function Product({className:className,name:name,image:image,price:price,detail:detail,type:type,button:button}:Props) {
    
    const [show, setShow] = useState(false);
    const openShow=()=>{
        setShow(true)
    }
    const closeShow=()=>{
        setShow(false)
    }


    const [buy, setBuy] = useState(false);
    const showToBuy=()=>{
        setBuy(true)
        setShow(false)
    }
    const closeBuy=()=>{
        setBuy(false)
    }


    const [qr, setQR] = useState(false);
    const buyToQR=()=>{
        setQR(true)
        setBuy(false)
    }
    const closeQR=()=>{
        setQR(false)
    }


    const [thank, setThank] = useState(false);
    const buyToThank=()=>{
        setThank(true)
        setBuy(false)
    }
    const qrToThank=()=>{
      setThank(true)
      setQR(false)
    }
    const closeThank=()=>{
        setThank(false)
    }
  

  //Artwork show

  return (
    <div>
        <img src={image} alt={detail} className={className+" hover:scale-125 transition ease-in delay-200"} onClick={openShow} />
        <Dialog open={show} onClose={closeShow} PaperProps={{ sx: { borderRadius: "20px" } }}>
          <div className="w-[500px] h-[600px] grid grid-rows-[45%_55%]">
            <div className="relative">
              <img src={image} alt={detail} className="w-full h-full absolute opacity-65" />
              <div className="absolute mx-[190px] my-[30px] border border-white border-4">
                <img src={image} alt={detail} className="w-[120px] h-[160px]" />
              </div>
            </div>
            <div>
              <p className="text-center text-3xl font-bold mt-4">{name}</p>
              <p className="text-slate-500 text-center mt-1 text-sm font-semibold">{type}</p>
              <hr className="mt-2 mx-auto w-3/4 h-[2px] bg-slate-400"/>
              <p className="mt-4 font-bold text-center text-lg">Artist: Lorem Ipsum</p>
              <p className="mt-2 text-center overflow-auto h-[30px]">{detail}</p>
              <p className="mt-4 text-center">Price: {price}</p>
              <div className="w-1/2 mx-auto mt-2">
                <Button value="Buy now" className="submit w-full" onclick={showToBuy}>
              </Button></div>
            </div>
          </div>
        </Dialog>

        <Dialog open={buy} onClose={closeBuy} PaperProps={{ sx: { borderRadius: "20px" } }}>
          <div className="w-[500px] h-[600px]">
            <div className="grid grid-cols-[40%_60%] p-6 px-10">
              <img src={image} alt={detail} className="w-[120px] h-[160px]"/>
              <div>
                <p className="font-bold text-2xl">{name}</p>
              </div>
            </div>
            <Button value="Confirm" className="submit" onclick={buyToThank}></Button>
            <Button value="QR" className="normal" onclick={buyToQR}></Button>
          </div>
        </Dialog>

        <Dialog open={qr} onClose={closeQR}>
          <h1>QR</h1>
        </Dialog>

        <Dialog open={thank} onClose={closeThank}>
          <h1>Thank you</h1>
        </Dialog>
    </div>
  );
}
