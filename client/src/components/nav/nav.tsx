import Button from '../button/button';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../assets/images/palette-solid.svg';
import { useState } from 'react';
import Login from '../overlay/Login';
import SignUp from '../overlay/SignUp';
import Admin from '../overlay/Admin';
import Search from '../../assets/images/magnifying-glass-solid.svg';

export default function Nav(this: any) {
    const location = useLocation();


    const [showLogin, setLogin] = useState(false);
    const openLogin = () => {
        setLogin(true);
    }
    const closeLogin = () => {
        setLogin(false);
    }


    const [showSignup, setSignup] = useState(false);
    const openSignup = () => {
        setSignup(true);
    }
    const closeSignup = () => {
        setSignup(false);
    }

    const [showAdmin, setAdmin] = useState(false);
    const closeAdmin = () => {
        setAdmin(false);
    }

    const loginToSignup=()=>{
        setLogin(false);
        setSignup(true);
    }

    const loginToAdmin=()=>{
        setLogin(false);
        setAdmin(true);
    }

    const signupToLogin=()=>{
        setSignup(false);
        setLogin(true);
    }

    const [showProduct,setShowProduct]=useState(false);

    const handleKeyPress = (e: { key: string }) => {
        if (e.key === "Enter") {
          //show product ที่ชื่อตรงกัน but ยังคิดไม่ออกว่าจะทำ case ที่ไม่เจอยังไง
        }
      };
    

    return (
        <div>
            <Login open={showLogin} close={closeLogin} loginToAdmin={loginToAdmin} loginToSignup={loginToSignup}></Login>
            <SignUp open={showSignup} close={closeSignup} signupToLogin={signupToLogin}></SignUp>
            <Admin open={showAdmin} close={closeAdmin}></Admin>

            <div className="container-2xl border-solid border-b border-black pb-3 ">
                <div className="flex flex-row">
                    <div className="website-logo-name flex ml-5 mt-3 w-full">
                        <img src={Icon} alt="" className='w-10 mt-2' />
                        {/* <div className="logo w-12 h-12 bg-black rounded-full"></div> */}
                        <h1 className="name text-2xl ml-5 mt-2 font-bold">ArtsDrops</h1>
                    </div>
                    <div className="search-signup-login flex container justify-end mt-4">
                        {/* <Search></Search> */}
                        <div className='hover:border-black rounded-full pl-3 w-fit h-3/4 p-2 flex border-[1.3px] border-[#C4C4C4] text-slate-600 focus-within:border-blue-600'>
                            <input type="text" onKeyUp={handleKeyPress.bind(this)} placeholder='Search...' className='focus:outline-none'/>
                            <img src={Search} alt="" className='cursor-pointer w-[15px]'/>
                        </div>
                        {/* <div className="search h-8 mr-14 w-80 border-solid border-black border rounded-full"></div> */}
                        <Button onclick={openSignup} value='Sign up' className='hover:bg-slate-300 normal h-8 ml-20 mr-3 text-xs font-bold'></Button>
                        <Button onclick={openLogin} value='Login' className='hover:bg-slate-300 hover:text-black normal h-8 bg-black text-white text-xs font-bold'></Button>
                    </div>
                </div>
                <div className="w-3/4 h-px bg-slate-400 mt-5 ml-5"></div>
                <div className="navbutton container w-1/2 ml-8 mt-4 text-sm">
                    <ul className='flex flex-row justify-evenly'>
                        <Link to='/' className={location.pathname === "/" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold hover:bg-slate-200 rounded-full"} id='home'>Home</Link>
                        <Link to='/artists' className={location.pathname === "/artists" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold hover:bg-slate-200 rounded-full"} id='artists'>Artists</Link>
                        <Link to='/art_toys' className={location.pathname === "/art_toys" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold hover:bg-slate-200 rounded-full"} id='arttoys'>Art Toys</Link>
                        <Link to='/gallery' className={location.pathname === "/gallery" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold hover:bg-slate-200 rounded-full"} id='gallery'>Gallery</Link>
                        <Link to='/about_us' className={location.pathname === "/about_us" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold hover:bg-slate-200 rounded-full"} id='aboutus'>About Us</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}