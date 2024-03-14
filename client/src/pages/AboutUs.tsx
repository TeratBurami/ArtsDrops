import Nav from '../components/nav/nav';
import Footer from '../components/footer'
import Phoom from '../assets/images/Phoom.png'
import Sea from '../assets/images/Sea.jpg'
import Guy from '../assets/images/guy.png'
import Keep from '../assets/images/keep.jpg'

export default function AboutUs() {
    return (
        <>
            <Nav></Nav>
            
            <ul className='mt-20 mb-20'>
                <li>
                    {/*รอรูป คุณบีม!!! */}
                    <div className="flex w-fit mx-auto items-center">
                        <img src='' alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/>
                            <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                                <p className='font-semibold'>"The more I think it over, the more I feel that there is nothing more truly artistic than to love people."
                                    <h2 className='font-light text-right mt-1'>- Terat Burami </h2>
                                </p>
                            </div>  
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'><hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5'/></li>

                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"Roses are red, Violets are blue, White wine cost less, than dinner for two"
                                <h2 className='font-light mt-1 text-right'>- Pathompum Jirakarpaisan</h2>
                            </p>
                        </div>   
                        <img src={Phoom} alt="" className="ml-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/> 
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'> <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5'/> </li>

                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <img src={Guy} alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/>
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"It’s not what you look at that matters, it’s what you see."
                                <h2 className='font-light mt-1 text-right'>- Patsawat Kittipunthopast</h2>
                            </p>
                        </div>    
                    </div>
                </li>
                
                {/*Line*/}
                <li className='text-center'> <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5'/> </li>

                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"Live your life and forget your age."
                                <h2 className='font-light mt-1 text-right'>- Athichanan Rodusa</h2>
                            </p>
                        </div>   
                        <img src={Keep} alt="" className="ml-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/> 
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'> <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5'/> </li>

                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <img src={Sea} alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/>
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"Don't worry, Don't Cry Drink Vodka and fly!"
                                <h2 className='font-light mt-1 text-right'>- Nithimeth Mandee</h2>
                            </p>
                        </div>    
                    </div>
                </li>

            </ul>

            <Footer></Footer>
        </>
    )
}