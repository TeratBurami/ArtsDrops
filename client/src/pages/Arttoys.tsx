import Nav from '../components/nav/nav';
import Footer from '../components/footer';
import Button from '../components/button/button';
import { useEffect, useState } from 'react';
import Product from '../components/overlay/Product';

export default function Arttoys(){

    const [arttoys, setarttoy] = useState<any[]>([])

    useEffect(() => {
        fetch("http://localhost:3333/art_toy")
          .then(res => res.json())
          .then(
            (result) => {
              setarttoy(result);
            }
          )
      }, [])

    return(
        <>
            <Nav></Nav> 
            <div className='grid grid-cols-2 mx-auto w-fit gap-16 mt-10 mb-10'>
                {arttoys.map(arttoy => (

                    <div className='relative'>
                        <img className = "w-[500px] h-[500px] object-cover" src={arttoy.picture} alt=""/>
                        {/* <Button value = 'Details' className = 'normal absolute top-[90%] left-[17%] w-2/3 border-white text-white'></Button> */
                         <Product
                         name={arttoy.art_name}
                         artist_name={arttoy.artist_name}
                         image={arttoy.picture}
                         price={arttoy.price}
                         type={arttoy.type}
                         detail={arttoy.descript}
                         button={true}
                         buttonValue='Detail'
                         className="hover:bg-white/[0.6] object-cover absolute normal font-semibold hover:text-slate-800 top-[85%] left-[17%] w-2/3 bg-black/[0.8] text-white"
                       ></Product>}
                    </div>
                ))
                }
            </div>
           
            <Footer></Footer>

        </>
    )
}