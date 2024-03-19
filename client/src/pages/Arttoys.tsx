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
            <h1>art toy</h1>
            <div className='grid grid-cols-2 mx-auto w-fit gap-10 mt-10 mb-10'>
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
                         className="h-[210px] w-[150px] mx-5 object-cover"
                       ></Product>}
                    </div>
                ))
                }
            </div>
           
            <Footer></Footer>

        </>
    )
}