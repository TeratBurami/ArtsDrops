import { Link } from "react-router-dom";
import Facebook from '../assets/images/facebook.svg';
import Pinterest from '../assets/images/square-pinterest.svg';
import LinkedIn from '../assets/images/linkedin.svg';
import Instagram from '../assets/images/instagram.svg';
import Youtube from '../assets/images/youtube.svg';
import X from '../assets/images/x-twitter.svg';
import Icon from '../assets/images/magnifying-glass-solid.svg';

export default function Footer() {
    return (
        <div>
            <div className="bg-[#555555] flex justify-between pt-5 pb-5">
                <div className="brand ml-14">
                    <img src={Icon} alt="" className="w-20 mx-auto mb-5" />
                    <h1 className="font-bold text-2xl mx-auto mb-5 text-white">ArtsDrops</h1>
                </div>
                <div className="nav">
                    <h2 className="text-white font-semibold mb-3 text-xl">Navigator</h2>
                    <ul>
                        <Link to='/' className="text-white font-thin">Home</Link><br />
                        <Link to='/artists' className="text-white font-thin">Artists</Link><br />
                        <Link to='/art_toys' className="text-white font-thin">Art Toys</Link><br />
                        <Link to='/gallery' className="text-white font-thin">Gallery</Link><br />
                        <Link to='/about_us' className="text-white font-thin">About us</Link>
                    </ul>
                </div>
                <div>
                    <h2 className="contact text-white font-semibold mb-3 text-xl">Contact us</h2>
                    <ul>
                        <li className="text-white font-thin">Tel: +66 99-999-9999</li>
                        <li className="text-white font-thin">Email: <a href="mailto:artsdrops@gmail.com">artsdrops@gmail.com</a></li>
                        <li className="text-white font-thin">Address: Lorem Ipsum</li>
                    </ul>
                </div>
                <div className="social mr-28">
                    <h2 className="contact text-white font-semibold mb-6 text-xl text-center">Social</h2>
                    <ul className="grid grid-cols-3 gap-8">
                        <li><img className="w-5" src={Pinterest} alt="" /></li>
                        <li><img className="w-5" src={LinkedIn} alt="" /></li>
                        <li><img className="w-5" src={X} alt="" /></li>
                        <li><img className="w-5" src={Facebook} alt="" /></li>
                        <li><img className="w-5" src={Instagram} alt="" /></li>
                        <li><img className="w-6" src={Youtube} alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className="copyright bg-[#555555] p-5">
                <div className="line w-2/3 h-px bg-slate-300 mx-auto"></div>
                <h2 className="text-[#787878] text-center mt-4 font-semibold text-sm">&copy; 2024 Copyright: ArtsDrops.com</h2>
            </div>
        </div>
    )
}