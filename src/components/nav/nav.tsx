import './nav.css';
import Button from '../button/button';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Search from '../search-bar/search';
import Icon from '../../assets/images/palette-solid.svg';
import { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import Password from '../../assets/images/key-solid.svg';
import Email from '../../assets/images/envelope-solid.svg';
import Admin from '../../assets/images/user-tie-solid.svg';
import Close from '../../assets/images/xmark-solid.svg';
import User from '../../assets/images/user-solid.svg';
import Phone from '../../assets/images/phone-solid.svg';
import CalendarIcon from '../../assets/images/calendar-days-solid.svg';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


export default function Nav() {
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

    const loginToSignup=()=>{
        setLogin(false);
        setSignup(true);
    }

    const [value, onChange] = useState<Value>(new Date());
    
    const calenClick=()=>{
        onChange(value)
        console.log(value);
    }

    return (
        <div>
            {/* Login dialog */}
            <Dialog open={showLogin} onClose={closeLogin} className='dialog' PaperProps={{ sx: { borderRadius: "20px" } }}>
                    <div className="w-[450px] h-[450px] px-10 py-5 flex flex-col">
                        <div className="w-fit ml-[350px]">
                            <img src={Close} alt="" className='w-[20px] cursor-pointer' onClick={closeLogin}/>
                        </div>
                        <h1 className='text-center font-bold text-4xl text-[#545454]'>Login</h1>
                        <div className='flex flex-rows w-fit h-fit ml-5 mt-10'>
                            <img src={Email} alt="" className='w-[20px] h-fit my-auto' />
                            <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-10'></input>
                        </div>
                        <div className='flex flex-rows w-fit ml-5 mt-5'>
                            <img src={Password} alt="" className='w-[20px] h-fit mt-2' />
                            <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-10'></input>
                        </div>
                        <Button className='submit w-11/12 mx-auto mt-14 h-8' value='Login'></Button>
                        <p onClick={loginToSignup} className='cursor-pointer text-center mt-3 underline underline-offset-4 text-slate-600 text-sm'>Don't have an account</p>
                        <div className="loginAsAdmin flex gap-3 mx-auto mt-14 cursor-pointer">
                            <img src={Admin} alt="" className='w-[15px]' />
                            <p className='text-sm text-[#8c8c8c]'>Login as Admin</p>
                        </div>
                    </div>
            </Dialog>
            {/* Signup dialog */}
            <Dialog open={showSignup} onClose={closeSignup} className='dialog' PaperProps={{ sx: { borderRadius: "20px" } }}>
            <div className="w-[450px] h-[500px] px-10 py-5 flex flex-col">
                        <div className="w-fit ml-[350px]">
                            <img src={Close} alt="" className='w-[20px] cursor-pointer' onClick={closeLogin}/>
                        </div>
                        <h1 className='text-center font-bold text-4xl text-[#545454]'>Sign Up</h1>
                        <div className='flex flex-rows w-fit ml-5 mt-10'>
                            <img src={User} alt="" className='w-[20px] h-fit mt-2' />
                            <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input>
                        </div>
                        <div className='flex flex-rows w-fit h-fit ml-5 mt-5'>
                            <img src={Password} alt="" className='w-[20px] h-fit my-auto' />
                            <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input>
                        </div>
                        <div className='flex flex-rows w-fit h-fit ml-5 mt-5'>
                            <img src={Email} alt="" className='w-[20px] h-fit my-auto' />
                            <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input>
                        </div>
                        <div className='flex flex-rows w-fit h-fit ml-5 mt-5'>
                            <img src={Phone} alt="" className='w-[20px] h-fit my-auto' />
                            <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input>
                        </div>
                        <div className="w-fit ml-5 mt-6 p-2 rounded-full shadow-slate-500 shadow flex cursor-pointer">
                            <img src={CalendarIcon} alt="" className='ml-2 w-[20px]'/>
                            <p className='ml-3 font-semibold text-slate-500 mr-2'>Date of Birth</p>
                        </div>
                        {/* <Calendar onChange={onChange} value={value} /> */}
                        <Button className='submit w-11/12 mx-auto mt-14 h-8' value='Sign Up'></Button>
                        <p onClick={loginToSignup} className='cursor-pointer text-center mt-3 underline underline-offset-4 text-slate-600 text-sm'>Don't have an account</p>
                    </div>
            </Dialog>





            <div className="container-2xl border-solid border-b border-black mb-3 pb-3 ">
                <div className="flex flex-row">
                    <div className="website-logo-name flex ml-5 mt-3 w-full">
                        <img src={Icon} alt="" className='w-10 mt-2' />
                        {/* <div className="logo w-12 h-12 bg-black rounded-full"></div> */}
                        <h1 className="name text-2xl ml-5 mt-2 font-bold">ArtsDrops</h1>
                    </div>
                    <div className="search-signup-login flex container justify-end mt-4">
                        <Search></Search>
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