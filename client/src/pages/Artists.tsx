import Nav from '../components/nav/nav';
import { useState, useEffect } from "react";
import SearchIcon from "../assets/images/magnifying-glass-solid.svg";
import Footer from '../components/footer';
import Card from "../components/card";

export default function Artists(this: any) {

    const [artists, setArtist] = useState<any[]>([]);

    const [search, setSearch] = useState('')


    useEffect(() => {
        fetch(`http://localhost:3333/artist`)
            .then(res => res.json())
            .then(
                (result) => {
                    setArtist(result);
                }
            )
    }, [])

    const handleSubmit = () => {
        fetch(`http://localhost:3333/artist?search=${search}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setArtist(result);
                }
            )
    }

    const handleKeyPress = (e: { key: string }) => {
        if (e.key === "Enter") {
          handleSubmit();
        }
      };

    let searchBar = document.getElementById('search')
    const clear = () => {
        setSearch('')
        searchBar!.value = ''
        fetch(`http://localhost:3333/artist`)
            .then(res => res.json())
            .then(
                (result) => {
                    setArtist(result);
                }
            )
    }

    return (
        <>
            <Nav></Nav>

            <div className='grid grid-cols-[40%_60%] mx-20 mt-10'>
                <img src="https://cdn.britannica.com/52/134252-050-645431E5/Pablo-Picasso-1950.jpg" alt="" className="p-3 shadow-md shadow-slate-400 mb-3 w-96" />
                <div className='flex justify-center items-center'>
                    <p className='font-semibold text-center'>
                        “Learn the rules like a pro, so you can break them like an artist.”
                        <p className='font-light'>- Pablo Picasso -</p>
                    </p>
                </div>
            </div>

            <div className='bg-gray-100 mt-10'> {/*Note that 1000px will be remove and flex the height */}
                <div className="flex flex-row pt-10 items-center justify-center gap-10">
                    <div className='hover:border-black rounded-full w-1/2 pl-3 h-3/4 p-2 flex border-[1.3px] border-[#C4C4C4] text-slate-600 focus-within:border-blue-600'>
                        <input onKeyUp={handleKeyPress.bind(this)} id='search' onChange={(newData) => setSearch(newData.target.value)} type="text" placeholder='Search...' className='pl-4 focus:outline-none bg-transparent w-full' />
                        <img onClick={handleSubmit} src={SearchIcon} alt="" className='cursor-pointer w-[15px]' />
                    </div>
                    <button onClick={clear} className='rounded-full bg-red-600 text-white hover:text-rose-500 hover:border-2 hover:border-rose-500 hover:bg-transparent'>Clear</button>
                </div>

                <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5' />

                <div className='grid grid-cols-4 px-10 mt-10 pb-14'>

                    {artists.map(artist => (
                        <Card className='w-80 scale-75 hover:scale-100 transition ease-in delay-200' url={artist.pics} key={artist.artist_id} name={artist.artist_name} detail={artist.descrip} sold={artist.amount_sold} id={artist.artist_id}></Card>
                    ))}

                </div>

            </div>

            <Footer></Footer>
        </>
    )
}
