import { useEffect, useState } from "react";
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
  buttonValue?:string;
  artist_name:string;
}

export default function Product({artist_name:artist_name,className:className,name:name,image:image,price:price,detail:detail,type:type,button:button=false,buttonValue:buttonValue=''}:Props) {
    
    //state of showing the Product information pop-up page
    const [show, setShow] = useState(false);
    const openShow=()=>{
        setShow(true)
    }
    const closeShow=()=>{
        setShow(false)
    }


    //state of showing the Buy pop-up page
    const [buy, setBuy] = useState(false);
    const showToBuy=()=>{
        setBuy(true)
        setShow(false)
    }
    const closeBuy=()=>{
        setBuy(false)
    }

    //state of showing the QR payment type pop-up page
    const [qr, setQR] = useState(false);
    const buyToQR=()=>{
        setQR(true)
        setBuy(false)
    }
    const closeQR=()=>{
        setQR(false)
    }

    //state of showing the Thank you pop-up page
    const [thank, setThank] = useState(false);
    const buyToThank=()=>{
        setThank(true)
        setBuy(false)
    }

    //state of QR payment is succeed, then go to Thank you pop-up page
    const qrToThank=()=>{
      setThank(true)
      setQR(false)
    }

    //state of change type of payment from QR payment to card payment
    const qrToBuy=()=>{
      setBuy(true)
      setQR(false)
    }

    //close the Thank you page
    const closeThank=()=>{
        setThank(false)
    }

    //currency formatter
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'THB',
    });


  return (
    <div>
        <div>
          <img src={image} alt={detail} className={className+' cursor-pointer'} hidden={button} onClick={openShow}/>
        </div>
        {/* button of showing product page */}
        <Button value={buttonValue} className={className} onclick={openShow} hidden={!button}></Button>

        {/* product information pop-up page */}
        <Dialog open={show} onClose={closeShow} PaperProps={{ sx: { borderRadius: "20px" } }}>
          <div className="w-[500px] h-[530px] grid grid-rows-[45%_55%] overflow-y-auto">
            <div className="relative">
                <img src={image} alt={detail} className="absolute w-full h-full opacity-55 blur-[2px] object-cover" />
              <div className="absolute w-[160px] h-[188px] mx-[170px] my-[20px] border border-white border-4">
                <img src={image} alt={detail} className="w-[160px] h-[180px] object-cover" />
              </div>
            </div>
            <div>
              <p className="text-center text-3xl font-bold mt-4">{name}</p>
              <p className="text-slate-500 text-center mt-1 text-sm font-semibold">{type}</p>
              <hr className="mt-2 mx-auto w-3/4 h-[2px] bg-slate-400"/>
              <p className="mt-4 font-bold text-center text-lg">Artist: {artist_name}</p>
              <p className="mt-2 w-3/4 mx-auto text-center overflow-auto h-[30px]">{detail}</p>
              <p className="mt-4 text-center">Price: {formatter.format(price).replace('THB','')} <span className="text-xs">THB</span></p>
              <div className="w-1/2 mx-auto mt-10">
                <Button value="Buy now" className="submit w-full mb-4" onclick={showToBuy}>
              </Button></div>
            </div>
          </div>
        </Dialog>

        {/* payment pop-up page */}
        <Dialog open={buy} onClose={closeBuy} PaperProps={{ sx: { borderRadius: "20px" } }}>
          <div className="w-[500px] h-[530px]">
            <div className="grid grid-cols-[43%_57%] gap-2 pt-6 px-16">
              <img src={image} alt={detail} className="ml-8 w-[80px] h-[120px] border border-white border-4 shadow shadow-slate-400 object-cover"/>
              <div>
                <p className="font-bold text-3xl mt-4">{name}</p>
                <p className="font-bold text-xl mt-2">Artist: {artist_name}</p>
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

        {/* qr payment pop-up page */}
        <Dialog open={qr} onClose={closeQR} PaperProps={{ sx: { borderRadius: "20px" } }}>
          <div className="w-[500px] h-[530px]">
          <div className="grid grid-cols-[43%_57%] gap-2 pt-6 px-16">
              <img src={image} alt={detail} className="ml-8 w-[80px] h-[120px] border border-white border-4 shadow shadow-slate-400"/>
              <div>
                <p className="font-bold text-3xl mt-4">{name}</p>
                <p className="font-bold text-xl mt-2">Artist: {artist_name}</p>
                <p className="font-semibold mt-2">Price: {formatter.format(price).replace('THB','')} <span className="text-xs">THB</span></p>
                
              </div>
            </div>
            <hr className="mt-4 mx-auto w-3/4 h-[2px] bg-slate-400"/>
            <div className="flex flex-rows justify-center gap-6 mt-4">
              <img src={Visa} className="cursor-pointer shadow shadow-slate-400 px-2 rounded-2xl w-[60px] h-[40px]" alt="" onClick={qrToBuy}/>
              <img src={Mastercard} className="cursor-pointer shadow shadow-slate-400 px-2 rounded-2xl w-[60px] h-[40px]" alt="" onClick={qrToBuy}/>
              <img src={QR} className="cursor-pointer shadow shadow-slate-400 px-2 rounded-2xl w-[60px] h-[40px]" alt="" onClick={buyToQR}/>
            </div>
            <img src={ScanQR} alt="QR code" className="rounded-2xl mx-auto w-[220px] h-[220px] p-4 shadow shadow-slate-400 mt-10" onClick={qrToThank}/>
          </div>
        </Dialog>

        {/* Thank you pop-up page */}
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
