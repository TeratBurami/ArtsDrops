import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer'

export default function AboutUs() {
    return (
        <>
            <Nav></Nav>
            
            <ul className='mt-20 mb-20'>
                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/>
                            <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                                <p className='font-semibold'>"In this Part, It will be replace by some random quotes"
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
                            <p className='font-semibold'>"In this Part, It will be replace by some random quotes"
                                <h2 className='font-light mt-1 text-right'>- Pathompum Jirakarpaisan</h2>
                            </p>
                        </div>   
                        <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="ml-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/> 
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'> <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5'/> </li>

                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/>
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"In this Part, It will be replace by some random quotes"
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
                            <p className='font-semibold'>"In this Part, It will be replace by some random quotes"
                                <h2 className='font-light mt-1 text-right'>- Athichanan Rodusa</h2>
                            </p>
                        </div>   
                        <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="ml-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/> 
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'> <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5'/> </li>

                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/>
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"In this Part, It will be replace by some random quotes"
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