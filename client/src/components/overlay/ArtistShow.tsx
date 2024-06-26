import { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import Button from '../button/button'
import Product from './Product'
import './scrollbar.css'

interface Props {
  image: string;
  name: string;
  sold: number;
  id: number;
}

export default function Artist({ image: image, name: name, sold: sold, id: id }: Props) {

  //state of showing the Artist information pop-up page
  const [show, setShow] = useState(false)

  const openShow = () => {
    setShow(true)
  }
  const closeShow = () => {
    setShow(false)
  }

  //state of the art and artist data
  const [arts, setArt] = useState<any[]>([])

  //get the data from /art api (/art api was joined with artist already)
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
    <div>
      <Button value='More detail' onclick={openShow} className="submit w-full mx-auto bg-black hover:text-black hover:border-black"></Button>
      <Dialog open={show} onClose={closeShow} PaperProps={{ sx: { borderRadius: "20px" } }}>
        <div className="w-[500px] h-[600px] grid grid-rows-2 overflow-y-auto">
          <div className="grid grid-cols-[40%_60%] gap-14 pt-6 px-16 pl-6">
            <img src={image} className="object-cover rounded-xl w-[200px] h-[250px] shadow shadow-slate-400" />
            <div className="border-l border-slate-500 pl-6">
              <p className="font-bold text-2xl mt-4">{name}</p>
              <p className="font-bold text-xl mt-2">Total artworks: {sold}</p>
            </div>
          </div>
          <div className="mt-14">
            <p className="ml-6 font-semibold text-xl">Artworks: </p>
            <div className="grid grid-cols-4 mt-4">
              {arts.filter(art => art.artist_id == id).map((art) => (
                <Product className="w-[80px] h-[100px] ml-6 rounded-lg mb-4" name={art.art_name} image={art.picture} price={art.price} detail={art.descript} type={art.atype} artist_name={art.artist_name}></Product>
              ))}
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}