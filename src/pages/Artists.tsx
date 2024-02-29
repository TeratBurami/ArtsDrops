import Nav from '../components/nav/nav';
import Search from '../components/search-bar/search';
import Button from '../components/button/button';
import Footer from '../components/footer/footer'; 

export default function Artists() {
    return (
        <>
            <Nav></Nav>
            
            <div className='flex mx-auto w-fit'>
                <img src="https://cdn.britannica.com/52/134252-050-645431E5/Pablo-Picasso-1950.jpg" alt="" className="p-3 shadow-md shadow-slate-400 mb-3 w-96"/>
                <div className='flex justify-center items-center ml-10'>
                    <p className='font-semibold text-center'>
                        <div className='w-[1000px]'>
                        “Learn the rules like a pro, so you can break them like an artist.”
                        </div>
                        <p className='font-light'>- Pablo Picasso -</p>
                    </p>
                </div>
            </div>

            <div className='bg-gray-100 h-[1000px]'> {/*Note that 1000px will be remove and flex the height */}
                <div className='flex justify-center'>
                    <Search></Search>
                </div>

                <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5'/>
            </div>

            <Footer></Footer>
        </>
    )
}
