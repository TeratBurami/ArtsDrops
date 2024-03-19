import Nav from "../components/nav/nav";
import Button from "../components/button/button";
import Footer from "../components/footer";
import Slide from "../components/slide-image";
import Card from "../components/card";
import ArtToy from '../assets/images/art_toy.svg';
import Clock from '../components/Clock/clock';
import {useState,useEffect} from 'react'
import Product from '../components/overlay/Product'

export default function Home() {
  const [products, setProduct] = useState<any[]>([]);
  const [artists, setArtist] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/only_4")
      .then(res => res.json())
      .then(
        (result) => {
          setProduct(result);
        }
      )
  }, [])

  useEffect(() => {
    fetch("http://localhost:3333/pop_artist")
      .then(res => res.json())
      .then(
        (result) => {
          setArtist(result);
        }
      )
  }, [])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'THB',
  });



  return (
    <>

      <Nav></Nav>
      <div className="newArtWorks flex flex-row mb-24 mt-10">
        <div className="slide-container w-1/2 ml-10">
          <Slide></Slide>
        </div>
        <div className="discriptionContainer m-auto flex flex-col mx-auto w-1/2">
          <h1 className="text-[40px] font-bold text-center">New Art Works</h1>
          <p className="text-center text-[20px] mb-10">
            A lot of beautiful art works are available for sale now
          </p>
          <Button
            value="More"
            className="hover:bg-slate-200 normal font-semibold h-10 mx-auto"
            route="gallery"
          ></Button>
        </div>
      </div>

      <div className="popularArtist">
        <h1 className="text-[30px] font-semibold text-center mb-3 w-fit mx-auto">
          Popular Artists
        </h1>
        <div className="con bg-slate-200 pt-16 flex flex-cols pb-20 border-t border-b border-slate-400">
          {artists.map(artist=>(
            <Card url={artist.pics} key={artist.artist_id} name={artist.artist_name} detail={artist.descrip} sold={artist.amount_sold} id={artist.artist_id}></Card>
          ))}
          
        </div>
      </div>

      <div className="artOfTheDay flex flex-cols py-20">
        <div className="text-clock w-2/4 h-fit my-auto ml-10px">
          <h1 className="font-semibold text-[30px] text-center mb-3">
            Art Of The Day
          </h1>
          <div className="mx-auto w-fit mb-20">
            <span className="font-extralight text-xl">
              We recommended gorgeous four arts with{" "}
            </span>
            <span className="font-semibold text-[#FE0000] text-xl">
              20% off
            </span>
          </div>
          <div className="clockPart">
            <h1 className="text-center font-semibold text-4xl text-[#FE0000] mb-5">Expire in</h1>
              <Clock></Clock>
          </div>
        </div>
        <div className="arts w-2/3 grid grid-cols-2 ml-20 border-l border-slate-400">

        {products.map(product=>(
            <div className="img w-3/4">
                <img src={product.picture} alt="" className="p-3 mx-auto shadow-md shadow-slate-400 mb-3 w-[200px] h-[300px]"/>
                <div className="mx-auto w-fit"><span className="font-semibold text-xs"><s>{formatter.format(product.price).replace('THB','')}</s></span><span className="text-[#FE0000] font-light text-[8px]"> THB</span></div>
                <div className="mx-auto w-fit mb-5">
                    <span className="text-[#FE0000] font-bold">{formatter.format(product.price*0.8).replace('THB','')}</span><span className="text-[#FE0000] font-light text-xs"> THB</span>
                </div>
                <div className="mx-auto w-fit mb-4"><Product
                name={product.name}
                image={product.picture}
                price={product.price}
                type={product.type}
                detail={product.descript}
                button={true}
                className="submit"
              ></Product></div>
            </div>
          ))}
        </div>
      </div>
      <div className="arttoyCon pt-10 pb-16 bg-[url('/src/assets/images/art_toy_bg.svg')]">
        <div className="imgCon pt-20 w-fit mx-auto"><img src={ArtToy} alt="" className=" mx-auto w-2/3 drop-shadow-[5px_20px_20px_rgba(0,0,0,0.4)]"/></div>
        <div className="textCon w-1/2 mx-auto mt-10 shadow-inner shadow-slate-600 p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus nihil consequatur quidem excepturi, mollitia sed. Commodi rem, inventore suscipit nesciunt quas tempora eos in perferendis temporibus accusantium maxime voluptatibus.</p>
        </div>
            <div className="buttonCon mx-auto w-fit mt-10"><Button route="art_toys" className="normal mx-auto w-96 hover:bg-slate-200" value="Explore"></Button></div>
      </div>
      

      <Footer></Footer>
    </>
  );
}
