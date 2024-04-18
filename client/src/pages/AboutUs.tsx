import Nav from '../components/nav/nav';
import Footer from '../components/footer'
import Phoom from '../assets/images/Phoom.png'
import Sea from '../assets/images/Sea.jpg'
import Guy from '../assets/images/guy.png'
import Keep from '../assets/images/keep.jpg'
import Beam from '../assets/images/beam.jpg'
import { useState } from 'react';
import Button from '../components/button/button'


export default function AboutUs() {
    //set memes data
    const [memes, setMemes] = useState<any[]>([])

    //get memes from external webservice
    const joke = async () => {
        const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c575a774d9msh65e4119f751af84p1e8deajsnbef596cb83db',
                'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setMemes(result)
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <Nav></Nav>
            <ul className='p-14'>
                <li>
                    <div className="mx-24 grid grid-cols-[30%_70%] items-center">
                        <img src={Beam} alt="Beam" className="bg-slate-100 p-3 shadow-md shadow-slate-500 mb-3 w-[220px]" />
                        <div className='bg-slate-100 w-full h-[200px] shadow-slate-500 shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"The more I think it over, the more I feel that there is nothing more truly artistic than to love people."
                                <h2 className='font-light text-right mt-1'>- Terat Burami -</h2>
                            </p>
                        </div>
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'><hr className='mx-auto w-3/4 my-20 bg-gray-300 h-0.5' /></li>

                <li>
                    <div className="mx-24 grid grid-cols-[70%_30%] gap-14 items-center">
                        <div className='bg-slate-100 w-full h-[200px] shadow-slate-500 shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"Roses are red, Violets are blue, White wine cost less, than dinner for two"
                                <h2 className='font-light text-right mt-1'>- Pathompum Jirakarpaisan -</h2>
                            </p>
                        </div>
                        <img src={Phoom} alt="Phoom" className="bg-slate-100 p-3 shadow-md shadow-slate-500 mb-3 w-[220px]" />
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'> <hr className='mx-auto w-3/4 my-20 bg-gray-300 h-0.5' /> </li>

                <li>
                    <div className="mx-24 grid grid-cols-[30%_70%] items-center">
                        <img src={Guy} alt="Guy" className="bg-slate-100 p-3 shadow-md shadow-slate-500 mb-3 w-[220px]" />
                        <div className='bg-slate-100 w-full h-[200px] shadow-slate-500 shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"It’s not what you look at that matters, it’s what you see."
                                <h2 className='font-light text-right mt-1'>- Patsawat Kittipunthopast -</h2>
                            </p>
                        </div>
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'> <hr className='mx-auto w-3/4 my-20 bg-gray-300 h-0.5' /> </li>

                <li>
                    <div className="mx-24 grid grid-cols-[70%_30%] gap-14 items-center">
                        <div className='bg-slate-100 w-full h-[200px] shadow-slate-500 shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"Live your life and forget your age."
                                <h2 className='font-light text-right mt-1'>- Athichanan Rodusa -</h2>
                            </p>
                        </div>
                        <img src={Keep} alt="Keep" className="bg-slate-100 p-3 shadow-md shadow-slate-500 mb-3 w-[220px]" />
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'> <hr className='mx-auto w-3/4 my-20 bg-gray-300 h-0.5' /> </li>

                <li>
                    <div className="mx-24 grid grid-cols-[30%_70%] items-center">
                        <img src={Sea} alt="Sea" className="bg-slate-100 p-3 shadow-md shadow-slate-500 mb-3 w-[220px]" />
                        <div className='bg-slate-100 w-full h-[200px] shadow-slate-500 shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"Don't worry, Don't Cry Drink Vodka and fly!"
                                <h2 className='font-light text-right mt-1'>- Nithimeth Mandee -</h2>
                            </p>
                        </div>
                    </div>
                </li>

            </ul>
            <div className='w-fit mx-auto'>
                {/* use this button to run external API but this is free version,
                so it availables only 50 requests per month
                don't press it too much!!! */}
                <Button className='normal h-14 w-32 font-bold text-lg hover:bg-slate-200' value='Memes 😆' onclick={joke}></Button>
            </div>
            <div className='grid grid-cols-6 gap-10 m-10 mb-20'>
                {memes.map(meme => (
                    <img src={meme.image} alt="" className='w-[200px] h-[200px] hover:scale-150' />
                ))}
            </div>

            <Footer></Footer>
        </>
    )
}