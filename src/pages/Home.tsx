import Nav from '../components/nav/nav';
import Button from '../components/button/button';
import Footer from '../components/footer/footer';
import Slide from '../components/slide-image';

export default function Home() {

    return (
        <>
            <Nav></Nav>
            <div className="newArtWorks flex flex-row gap-12 mb-14">
                <div className="slide-container w-[600px] ml-16">
                    <Slide></Slide>
                </div>
                <div className="discriptionContainer ml-10 m-auto flex flex-col">
                    <h1 className='text-[40px] font-bold text-center'>New Art Works</h1>
                    <p className='text-center text-[20px] mb-10'>A lot of beautiful art works are available for sale now</p>
                    <Button value='More' className='normal font-semibold h-10 mx-auto'></Button>
                </div>
            </div>

            <div className="popularArtist">
                <h1 className='text-[30px] font-semibold text-center mb-3'>Popular Artists</h1>
                <div className="con bg-slate-200 pt-16 flex flex-row pb-20 px-48">
                    <div className="card w-fit mx-auto rounded-lg shadow-lg shadow-slate-500 bg-white scale-75 hover:scale-100 transition ease-in delay-200">
                        {/* <img src="https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg" alt="" className='w-50'/>     */}
                        <div className="img w-[300px] h-[100px] mx-auto mb-14">
                            <img src="https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg" alt="" className='mx-auto rounded-lg object-cover w-[300px] h-[140px] rounded-b-none' />
                        </div>
                        <div className="info flex flex-col">
                            <h1 className='ml-3 text-left font-semibold text-xl mb-3'>Van gogh</h1>
                            <p className='ml-3 text-left text-sm mb-20'>Lorem ipsum</p>
                            <Button value='More Details' className='submit mx-auto font-semibold h-8 w-3/4 mb-5'></Button>
                        </div>
                    </div>
                    <div className="card w-fit mx-auto rounded-lg shadow-lg shadow-slate-500 bg-white scale-75 hover:scale-100 transition ease-in delay-200">
                        {/* <img src="https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg" alt="" className='w-50'/>     */}
                        <div className="img w-[300px] h-[100px] mx-auto mb-14">
                            <img src="https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg" alt="" className='mx-auto rounded-lg object-cover w-[300px] h-[140px] rounded-b-none' />
                        </div>
                        <div className="info flex flex-col">
                            <h1 className='ml-3 text-left font-semibold text-xl mb-3'>Van gogh</h1>
                            <p className='ml-3 text-left text-sm mb-20'>Lorem ipsum</p>
                            <Button value='More Details' className='submit mx-auto font-semibold h-8 w-3/4 mb-5'></Button>
                        </div>
                    </div>
                    <div className="card w-fit mx-auto rounded-lg shadow-lg shadow-slate-500 bg-white scale-75 hover:scale-100 transition ease-in delay-200 ">
                        {/* <img src="https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg" alt="" className='w-50'/>     */}
                        <div className="img w-[300px] h-[100px] mx-auto mb-14">
                            <img src="https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg" alt="" className='mx-auto rounded-lg object-cover w-[300px] h-[140px] rounded-b-none' />
                        </div>
                        <div className="info flex flex-col">
                            <h1 className='ml-3 text-left font-semibold text-xl mb-3'>Van gogh</h1>
                            <p className='ml-3 text-left text-sm mb-20'>Lorem ipsum</p>
                            <Button value='More Details' className='submit mx-auto font-semibold h-8 w-3/4 mb-5'></Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}
