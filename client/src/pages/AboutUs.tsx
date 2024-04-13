import Nav from '../components/nav/nav';
import Footer from '../components/footer'
import Phoom from '../assets/images/Phoom.png'
import Sea from '../assets/images/Sea.jpg'
import Guy from '../assets/images/guy.png'
import Keep from '../assets/images/keep.jpg'
import { useState } from 'react';
import Button from '../components/button/button'


export default function AboutUs() {
    const [memes, setMemes] = useState<any[]>([])

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
            <ul className='mt-20 mb-20'>
                <li>
                    {/*รอรูป คุณบีม!!! */}
                    <div className="flex w-fit mx-auto items-center">
                        <img src='' alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60" />
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"The more I think it over, the more I feel that there is nothing more truly artistic than to love people."
                                <h2 className='font-light text-right mt-1'>- Terat Burami </h2>
                            </p>
                        </div>
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'><hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5' /></li>

                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"Roses are red, Violets are blue, White wine cost less, than dinner for two"
                                <h2 className='font-light mt-1 text-right'>- Pathompum Jirakarpaisan</h2>
                            </p>
                        </div>
                        <img src={Phoom} alt="" className="ml-40 p-3 shadow-md shadow-slate-400 mb-3 w-60" />
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'> <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5' /> </li>

                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <img src={Guy} alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60" />
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"It’s not what you look at that matters, it’s what you see."
                                <h2 className='font-light mt-1 text-right'>- Patsawat Kittipunthopast</h2>
                            </p>
                        </div>
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'> <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5' /> </li>

                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"Live your life and forget your age."
                                <h2 className='font-light mt-1 text-right'>- Athichanan Rodusa</h2>
                            </p>
                        </div>
                        <img src={Keep} alt="" className="ml-40 p-3 shadow-md shadow-slate-400 mb-3 w-60" />
                    </div>
                </li>

                {/*Line*/}
                <li className='text-center'> <hr className='m-10 ml-80 mr-80 bg-gray-300 h-0.5' /> </li>

                <li>
                    <div className="flex w-fit mx-auto items-center">
                        <img src={Sea} alt="" className="mr-40 p-3 shadow-md shadow-slate-400 mb-3 w-60" />
                        <div className='w-[1000px] h-[200px] shadow-md p-3 flex items-center justify-center'>
                            <p className='font-semibold'>"Don't worry, Don't Cry Drink Vodka and fly!"
                                <h2 className='font-light mt-1 text-right'>- Nithimeth Mandee</h2>
                            </p>
                        </div>
                    </div>
                </li>

            </ul>
            <div className='w-fit mx-auto'>
                <Button className='normal h-14 w-32 font-bold text-lg hover:bg-slate-200' value='Memes 😆' onclick={joke}></Button>
            </div>
            <div className='grid grid-cols-6 gap-10 m-10 mb-20'>
                {memes.map(meme => (
                    <img src={meme.image} alt="" className='w-[200px] h-[200px] hover:scale-150'/>
                ))}
            </div>

            <Footer></Footer>
        </>
    )
}