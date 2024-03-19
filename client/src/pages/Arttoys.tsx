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
                         name={arttoy.name}
                         image={arttoy.picture}
                         price={arttoy.price}
                         type={arttoy.type}
                         detail={arttoy.descript}
                         button={true}
                         className="object-cover absolute normal border-white text-white top-[85%] left-[17%] w-2/3 hover:border-black hover:text-black"
                       ></Product>}
                    </div>
                ))
                }
            </div>
           
            <Footer></Footer>

        </>
    )
}