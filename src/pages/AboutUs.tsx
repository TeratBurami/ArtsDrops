import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer'

export default function AboutUs() {
    return (
        <>
            <Nav></Nav>
            
            <ul className='mt-20'>
                <li>
                    <div className="flex w-fit mx-auto">
                        <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/>
                        <div>
                            <h2 className='font-semibold mt-10'> Terat Burami </h2>
                            <p className='p-3 shadow-md w-[1000px] h-[200px]'>6588011</p>
                        </div>    
                    </div>
                </li>
                <li className='text-center'>
                    <hr className='m-10 h-2'/>
                </li>
                <li>
                    <div className="flex w-fit mx-auto">
                        <div>
                            <h2 className='font-semibold float-right'>Pathompum Jirakarnpaisan</h2>
                            <p className='p-3 shadow-md w-[1000px] h-[200px]'>
                            6588029
                            </p>
                        </div>   
                        <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="ml-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/> 
                    </div>
                </li>

                <li>
                    <div className="flex w-fit mx-auto">
                        <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/>
                        <div>
                            <h2 className='font-semibold mt-10'> Patsawat Kittipunthopast </h2>
                            <p className='p-3 shadow-md w-[1000px] h-[200px]'>6588011</p>
                        </div>    
                    </div>
                </li>
                <li className='text-center'>
                    <hr className='m-10 h-2'/>
                </li>
                <li>
                    <div className="flex w-fit mx-auto">
                        <div>
                            <h2 className='font-semibold float-right'>Pathompum Jirakarnpaisan</h2>
                            <p className='p-3 shadow-md w-[1000px] h-[200px]'>
                            6588029
                            </p>
                        </div>   
                        <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="ml-40 p-3 shadow-md shadow-slate-400 mb-3 w-60"/> 
                    </div>
                </li>

            </ul>

            <Footer></Footer>
        </>
    )
}