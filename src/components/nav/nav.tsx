import './nav.css';
import Button from '../button/button';
import {Link, NavLink, useLocation} from 'react-router-dom';
import Search from '../search-bar/search';
import Icon from '../../assets/images/palette-solid.svg'


export default function Nav() {
    const location=useLocation();

    return (
        <div className="container-2xl border-solid border-b border-black mb-3 pb-3 ">
            <div className="flex flex-row">
                <div className="website-logo-name flex ml-5 mt-3">
                    <img src={Icon} alt="" className='w-10 mt-2'/>
                    {/* <div className="logo w-12 h-12 bg-black rounded-full"></div> */}
                    <h1 className="name text-2xl ml-5 mt-2 font-bold">ArtsDrops</h1>
                </div>
                <div className="mr-5 search-signup-login flex container justify-end mt-4">
                    <Search></Search>
                    {/* <div className="search h-8 mr-14 w-80 border-solid border-black border rounded-full"></div> */}
                    <Button value='Sign up' className='normal h-8 ml-20 mr-3 text-xs font-bold'></Button>
                    <Button value='Login' className='normal h-8 bg-black text-white text-xs font-bold'></Button>
                </div>
            </div>
            <div className="w-3/4 h-px bg-slate-400 mt-5 ml-5"></div>
            <div className="navbutton container w-1/2 ml-8 mt-4 text-sm">
                <ul className='flex flex-row justify-evenly'>
                    <Link to='/' className={location.pathname === "/" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold"} id='home'>Home</Link>
                    <Link to='/artists' className={location.pathname === "/artists" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold "} id='artists'>Artists</Link>
                    <Link to='/art_toys' className={location.pathname === "/art_toys" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold "} id='arttoys'>Art Toys</Link>
                    <Link to='/gallery' className={location.pathname === "/gallery" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold "} id='gallery'>Gallery</Link>
                    <Link to='/about_us' className={location.pathname === "/about_us" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold "} id='aboutus'>About Us</Link>
                </ul>
            </div>
        </div>
    )
}