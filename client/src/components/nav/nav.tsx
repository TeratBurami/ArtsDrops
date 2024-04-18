import Button from '../button/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../../assets/images/palette-solid.svg';
import { useState, useEffect } from 'react';
import Login from '../overlay/Login';
import SignUp from '../overlay/SignUp';
import Search from '../../assets/images/magnifying-glass-solid.svg';
import AdminIcon from '../../assets/images/user-tie-solid.svg'
import SignOut from '../../assets/images/right-from-bracket-solid.svg'

export default function Nav(this: any) {
    const locate = useLocation();
    const navigate = useNavigate();

    //for showing the username of user and checking the role of user
    const [user, setUser] = useState<any>([{ username: '' }])


    //state of clicking login button
    //the default will be false, so when user clicks login button this state will be changed to true
    //and then shows the login pop-up
    const [showLogin, setLogin] = useState(false);
    //change state when  click login button
    const openLogin = () => {
        setLogin(true);
    }
    //when user clicks the X mark at the top right, login pop-up will be closed
    const closeLogin = () => {
        setLogin(false);
    }


    //state of clicking signup button
    //the default will be false, so when user clicks signup button this state will be changed to true
    //and then shows the signup pop-up
    const [showSignup, setSignup] = useState(false);
    //change state when  click signup button
    const openSignup = () => {
        setSignup(true);
    }
    //when user clicks the X mark at the top right, signup pop-up will be closed
    const closeSignup = () => {
        setSignup(false);
    }

    //when you click "Don't have an account" login pop-up will be closed, and then open signup pop-up
    const loginToSignup = () => {
        setLogin(false);
        setSignup(true);
    }

    //when you click "Already have an account" signup pop-up will be closed, and then open login pop-up
    const signupToLogin = () => {
        setSignup(false);
        setLogin(true);
    }

    //Part of search bar

    //set the data as the input of search bar
    const [data, setData] = useState('')

    //handle press enter button when focusing on search bar
    const handleKeyPress = (e: { key: string }) => {
        if (e.key === "Enter") {
            search()
        }
    };

    //when click search or press enter, it will navigate to gallery page
    //and search the art name from the input of search bar
    const search = () => {
        if (data) navigate('/gallery', { state: data });
    }

    //state of login checking
    const [isLogin, setIsLogin] = useState(false)

    //Use auth api to authorize the login of the user
    useEffect(() => {
        const TOKEN = localStorage.getItem('TOKEN');
        fetch('http://localhost:3333/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + TOKEN
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status == 'success') {
                    //if login is succeed, set state of login to true
                    //then get the user data to display username, and use user_role to check admin permission
                    setIsLogin(true)
                    fetch(`http://localhost:3333/account?id=${data.data.id}`)
                        .then(res => res.json())
                        .then(data => {
                            //set the state of user to store the user data
                            setUser(data);
                        })
                }
                else {
                    localStorage.removeItem('TOKEN')
                }
            }
            )
            .catch((err) => {
                console.error('Error ', err)
            })
    }, [])

    const signOut=()=>{
        localStorage.removeItem('TOKEN')
        location.reload()
    }


    return (

        <div>
            {/* this is the login and signup pop-up, the display will depend on showLogin and showSignup state */}
            <Login open={showLogin} close={closeLogin} loginToSignup={loginToSignup}></Login>
            <SignUp open={showSignup} close={closeSignup} signupToLogin={signupToLogin}></SignUp>


            <div className="container-2xl border-solid border-b border-black pb-3 ">
                <div className="flex gap-32">
                    <div className='w-full'>
                        <div className="flex w-full">
                            <div className="website-logo-name flex ml-5 mt-3 w-full">
                                <img src={Icon} alt="" className='w-10 mt-2' />
                                <h1 className="name text-2xl ml-5 mt-2 font-bold">ArtsDrops</h1>
                            </div>
                            <div className="w-1/2 mt-4">
                                <div className='hover:border-black rounded-full pl-3 h-3/4 p-2 flex border-[1.3px] border-[#C4C4C4] text-slate-600 focus-within:border-blue-600'>
                                    <input onChange={(newData) => setData(newData.target.value)} type="text" onKeyUp={handleKeyPress.bind(this)} placeholder='Search...' className='focus:outline-none w-full' />
                                    <img src={Search} alt="" className='cursor-pointer w-[15px]' onClick={search} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-slate-400 mt-5 ml-5"></div>
                        {/* the list of navigation buttons to the others page */}
                        <div className="mt-4 text-sm">
                            <ul className='flex justify-evenly'>
                                <Link to='/' className={locate.pathname === "/" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold hover:bg-slate-200 rounded-full"} id='home'>Home</Link>
                                <Link to='/artists' className={locate.pathname === "/artists" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold hover:bg-slate-200 rounded-full"} id='artists'>Artists</Link>
                                <Link to='/art_toys' className={locate.pathname === "/art_toys" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold hover:bg-slate-200 rounded-full"} id='arttoys'>Art Toys</Link>
                                <Link to='/gallery' className={locate.pathname === "/gallery" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold hover:bg-slate-200 rounded-full"} id='gallery'>Gallery</Link>
                                <Link to='/about_us' className={locate.pathname === "/about_us" ? "cursor-pointer rounded-full p-2 font-bold bg-[#555555] text-white" : "cursor-pointer p-2 font-bold hover:bg-slate-200 rounded-full"} id='aboutus'>About Us</Link>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-end gap-6 w-1/2 mr-10'>
                            {/* if logged in nav bar, will display username
                            if the user is admin or super admin, nav will display admin button
                            if the user did not login yet, nav will display signup and login button */}
                            <div hidden={isLogin} className='mt-4'>
                                <div className='flex gap-10'>
                                    <Button onclick={openSignup} value='Sign up' className='hover:bg-slate-300 normal h-8 text-xs font-bold'></Button>
                                    <Button onclick={openLogin} value='Login' className='hover:bg-slate-300 hover:text-black normal h-8 bg-black text-white text-xs font-bold'></Button>
                                </div>
                            </div>
                            <div hidden={!isLogin} className='w-full h-3/4 my-auto'>
                                <div className='flex flex-col p-3 justify-between border w-full h-full border-1-black rounded-lg shadow-md shadow-slate-400'>
                                    <p className='underline font-light text-center text-base'>Welcome,&nbsp;&nbsp;<span className='font-semibold text-center text-4xl'>{user[0].username}</span></p>
                                    <div className="flex flex-row justify-center gap-4 text-slate-600">
                                        <span className='font-semibold text-center text-xs mt-2'>Email: {user[0].email}</span>
                                        <span className='font-semibold text-center text-xs mt-2'>Tel: {user[0].phone_no}</span>
                                    </div>
                                </div>
                            </div>
                            <img hidden={!isLogin} onClick={signOut} src={SignOut} alt="sign out" className='w-6 my-auto cursor-pointer'/>
                            <Link hidden={user[0].user_role==2 || !isLogin} to='/prod_manage' className='w-5 my-auto' id='aboutus'><img src={AdminIcon} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}