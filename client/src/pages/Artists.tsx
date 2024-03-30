import Nav from '../components/nav/nav';
import Search from '../components/search';
import Button from '../components/button/button';
import { useState, useEffect } from "react";
import Product from "../components/overlay/Product";
import SearchIcon from "../assets/images/magnifying-glass-solid.svg";
import Footer from '../components/footer'; 
import Artist from '../components/overlay/Artist';
import Card from "../components/card";

export default function Artists() {

    const [artists, setArtist] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://localhost:3333/Artist")
          .then(res => res.json())
          .then(
            (result) => {
              setArtist(result);
            }
          )
      }, [])

    return (
        <>
            <Nav></Nav>
            
            <div className='flex mx-auto w-fit'>
                <img src="https://cdn.britannica.com/52/134252-050-645431E5/Pablo-Picasso-1950.jpg" alt="" className="p-3 shadow-md shadow-slate-400 mb-3 w-96"/>
                <div className='flex justify-center items-center ml-10'>
                    <p className='font-semibold text-center'>
                        <div className='w-[1000px]'>
                        “Learn the rules like a pro, so you can break them like an artist.”
                        </div>
                        <p className='font-light'>- Pablo Picasso -</p>
                    </p>
                </div>
            </div>

            <div className='bg-gray-100 h-[1000px]'> {/*Note that 1000px will be remove and flex the height */}
                <div className='pt-8 flex justify-center'>
                    <Search></Search>
                </div>

                <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5'/>

                <div className='grid grid-cols-4 gap-16 mx-auto w-full max-w-screen-lg mt-10 mb-10'>
                    
                {artists.map(artist=>(
                    <Card url={artist.pics} key={artist.artist_id} name={artist.artist_name} detail={artist.descrip} sold={artist.amount_sold} id={artist.artist_id}></Card>
                ))}
                    
                </div>

            </div>

            <Footer></Footer>
        </>
    )
}
