import { useState } from "react";
import Button from "../button/button";
import { Dialog, TextField } from "@mui/material";
import Visa from '../../assets/images/visa.png'
import Mastercard from '../../assets/images/money.png'
import QR from '../../assets/images/icon-thaiqr.png'
import ScanQR from '../../assets/images/qrcode.svg'
import Success from '../../assets/images/success.svg'

interface Props{
  name:string;
  image?:string;
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

    const qrToBuy=()=>{
      setBuy(true)
      setQR(false)
    }

    const closeThank=()=>{
        setThank(false)
    }

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'THB',
    });
  

  //Artwork show

  return (
    <div>
        <img src={image} alt={detail} className={className+' cursor-pointer'} onClick={openShow} />
        <Dialog open={show} onClose={closeShow} PaperProps={{ sx: { borderRadius: "20px" } }}>
          <div className="w-[500px] h-[600px] grid grid-rows-[45%_55%]">
            <div className="relative">
              <img src={image} alt={detail} className="w-full h-full absolute opacity-55" />
              <div className="absolute mx-[190px] my-[30px] border border-white border-4">
                <img src={image} alt={detail} className="w-[120px] h-[160px]" />
              </div>
            </div>
            <div>
              <p className="text-center text-3xl font-bold mt-4">{name}</p>
              <p className="text-slate-500 text-center mt-1 text-sm font-semibold">{type}</p>
              <hr className="mt-2 mx-auto w-3/4 h-[2px] bg-slate-400"/>
              <p className="mt-4 font-bold text-center text-lg">Artist: Lorem Ipsum</p>
              <p className="mt-2 w-3/4 mx-auto text-center overflow-auto h-[30px]">{detail}</p>
              <p className="mt-4 text-center">Price: {formatter.format(price).replace('THB','')} <span className="text-xs">THB</span></p>
              <div className="w-1/2 mx-auto mt-2">
                <Button value="Buy now" className="submit w-full" onclick={showToBuy}>
              </Button></div>
            </div>
          </div>
        </Dialog>

        <Dialog open={buy} onClose={closeBuy} PaperProps={{ sx: { borderRadius: "20px" } }}>
          <div className="w-[500px] h-[600px]">
            <div className="grid grid-cols-[43%_57%] gap-2 pt-6 px-16">
              <img src={image} alt={detail} className="ml-8 w-[80px] h-[120px] border border-white border-4 shadow shadow-slate-400"/>
              <div>
                <p className="font-bold text-3xl mt-4">{name}</p>
                <p className="font-bold text-xl mt-2">Artist: Lorem Ipsum</p>
                <p className="font-semibold mt-2">Price: {formatter.format(price).replace('THB','')} <span className="text-xs">THB</span></p>
                
              </div>
            </div>
            <hr className="mt-4 mx-auto w-3/4 h-[2px] bg-slate-400"/>
            <div className="flex flex-rows justify-center gap-6 mt-4">
              <img src={Visa} className="cursor-pointer shadow shadow-slate-400 px-2 rounded-2xl w-[60px] h-[40px]" alt="" onClick={qrToBuy}/>
              <img src={Mastercard} className="cursor-pointer shadow shadow-slate-400 px-2 rounded-2xl w-[60px] h-[40px]" alt="" onClick={qrToBuy} />
              <img src={QR} className="cursor-pointer shadow shadow-slate-400 px-2 rounded-2xl w-[60px] h-[40px]" alt="" onClick={buyToQR}/>
            </div>
            <div className="grid grid-row-3 mx-4 mt-4 gap-6">
              <TextField label="Full name" variant="outlined" InputProps={{ sx: { borderRadius: 5,height:50} }}/>
              <TextField label="Card number" variant="outlined" InputProps={{ sx: { borderRadius: 5,height:50 } }}/>
              <div className="grid grid-cols-2 gap-4">
              <TextField label="Expiration date" variant="outlined" InputProps={{ sx: { borderRadius: 5,height:50 } }}/>
              <TextField label="CVV" variant="outlined" InputProps={{ sx: { borderRadius: 5,height:50 } }}/>
              </div>
            </div>
            <div className="w-1/2 mx-auto mt-2">
                <Button value="Confirm" className="submit w-full mt-2" onclick={buyToThank}></Button>
            </div>
          </div>
        </Dialog>

        <Dialog open={qr} onClose={closeQR} PaperProps={{ sx: { borderRadius: "20px" } }}>
          <div className="w-[500px] h-[600px]">
          <div className="grid grid-cols-[43%_57%] gap-2 pt-6 px-16">
              <img src={image} alt={detail} className="ml-8 w-[80px] h-[120px] border border-white border-4 shadow shadow-slate-400"/>
              <div>
                <p className="font-bold text-3xl mt-4">{name}</p>
                <p className="font-bold text-xl mt-2">Artist: Lorem Ipsum</p>
                <p className="font-semibold mt-2">Price: {formatter.format(price).replace('THB','')} <span className="text-xs">THB</span></p>
                
              </div>
            </div>
            <hr className="mt-4 mx-auto w-3/4 h-[2px] bg-slate-400"/>
            <div className="flex flex-rows justify-center gap-6 mt-4">
              <img src={Visa} className="cursor-pointer shadow shadow-slate-400 px-2 rounded-2xl w-[60px] h-[40px]" alt="" onClick={qrToBuy}/>
              <img src={Mastercard} className="cursor-pointer shadow shadow-slate-400 px-2 rounded-2xl w-[60px] h-[40px]" alt="" onClick={qrToBuy}/>
              <img src={QR} className="cursor-pointer shadow shadow-slate-400 px-2 rounded-2xl w-[60px] h-[40px]" alt="" onClick={buyToQR}/>
            </div>
            <img src={ScanQR} alt="QR code" className="rounded-2xl mx-auto w-[220px] h-[220px] p-4 shadow shadow-slate-400 mt-4" onClick={qrToThank}/>
          </div>
        </Dialog>

        <Dialog open={thank} onClose={closeThank} PaperProps={{ sx: { borderRadius: "20px" } }}>
          <div className="w-[500px] h-[450px]">
            <img src={Success} className="scale-75 mx-auto mt-2" alt='success' />
            <p className="text-center font-bold text-2xl text-[#0AA06E]">Payment Successful</p>
            <div className="grid grid-cols-2 w-fit mx-auto mt-4">
              <div>
                <p>Payment type</p>
                <p>Receiver name</p>
                <p>Tel. number</p>
                <p>Email</p><br />
                <p className="font-bold">Amount paid</p><br />
                <p>Transaction ID</p>
              </div>
              <div className="text-end">
                <p>QR payment</p>
                <p>Lorem Ipsum</p>
                <p>099-999-9999</p>
                <p>loremipsum@gmail.com</p><br />
                <p className="font-bold">{formatter.format(price).replace('THB','')}</p><br />
                <p>123456</p>
              </div>
            </div>
            <div className="mx-auto w-fit"><Button className="submit mt-4 mx-auto" value="Close" onclick={closeThank}></Button></div>
          </div>
        </Dialog>
    </div>
  );
}
