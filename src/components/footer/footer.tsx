import { Link } from "react-router-dom";
import Facebook from '../../assets/images/facebook-f.svg';
import Pinterest from '../../assets/images/pinterest-p.svg';
import LinkedIn from '../../assets/images/linkedin-in.svg';
import Instagram from '../../assets/images/instagram.svg';
import Youtube from '../../assets/images/youtube.svg';
import X from '../../assets/images/x-twitter.svg';
import Icon from '../../assets/images/palette-solid-white.svg';

export default function Footer() {
    return (
        <div className="bg-[#555555] flex justify-between pt-5">
            <div className="brand pl-5">
                <img src={Icon} alt="" className="w-10 mx-auto mb-5" />
                <h1 className="font-bold text-2xl mx-auto mb-5 text-white">ArtsDrops</h1>
            </div>
            <div className="nav">
                <h2>Navigator</h2>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/artists'>Artists</Link>
                    <Link to='/art_toys'>Art Toys</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/about_us'>About us</Link>
                </ul>
            </div>
            <div className="contact">
                <h2>Contact us</h2>
                <ul>
                    <li>Tel: +66 99-999-9999</li>
                    <li>Email: <a href="mailto:artsdrops@gmail.com">artsdrops@gmail.com</a></li>
                    <li>Address: Lorem Ipsum</li>
                </ul>
            </div>
            <div className="social">
                <h2>Social</h2>
                <ul>
                    <li><img className="w-3 text-white" src={Facebook} alt="" /></li>
                    <li><img className="w-3 text-white" src={Instagram} alt="" /></li>
                    <li><img className="w-3 text-white" src={X} alt="" /></li>
                    <li><img className="w-3 text-white" src={Youtube} alt="" /></li>
                    <li><img className="w-3 text-white" src={LinkedIn} alt="" /></li>
                    <li><img className="w-3 text-white" src={Pinterest} alt="" /></li>
                </ul>
            </div>
        </div>
    )
}