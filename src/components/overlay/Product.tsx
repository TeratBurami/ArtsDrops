import { useState } from "react";
import Button from "../button/button";
import { Dialog } from "@mui/material";


export default function Product() {
    
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
    const closeThank=()=>{
        setThank(false)
    }
  

  //Artwork show

  return (
    <div>
        <Button value='Details' className='normal' onclick={openShow}></Button>
        <Dialog open={show} onClose={closeShow}>
          <h1>Artwork show</h1>
          <Button value="Buy now" className="submit" onclick={showToBuy}></Button>
        </Dialog>

        <Dialog open={buy} onClose={closeBuy}>
          <h1>Payment</h1>
          <Button value="Confirm" className="submit" onclick={buyToThank}></Button>
          <Button value="QR" className="normal" onclick={buyToQR}></Button>
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
