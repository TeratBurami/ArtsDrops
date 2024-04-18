import { useEffect, useState } from 'react'
import Nav from '../../components/admin/nav'
import './table.css'
import SearchIcon from '../../assets/images/magnifying-glass-solid.svg'

export default function PaymentLog(this: any) {

    //state of the data
    const [Payment, setPayment] = useState<any[]>([])
    //state of search data
    const [search, setSearch] = useState('')

    //get the data and set it to the state
    useEffect(() => {
        fetch("http://localhost:3333/payment_log")
            .then(res => res.json())
            .then(
                (result) => {
                    setPayment(result);
                }
            )
    }, [])

    //get the data by the text in the search bar
    const handleSubmit = () => {
        fetch(`http://localhost:3333/payment_log?search=${search}`)
            .then(res => res.json())
            .then(
                result => setPayment(result)
            )
    }

    //handle press enter to search
    const handleKeyPress = (e: { key: string }) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };


    return (
        <>
            <Nav></Nav>

            <div className='ml-[12rem] mr-6 p-10'>
                <h1 className='font-semibold text-2xl pb-4'>Payment Log</h1>
                <div className='rounded-full bg-slate-200 h-14 flex justify-end items-center'>
                    <div className='hover:border-black rounded-full w-1/2 pl-3 h-3/4 p-2 flex border-[1.3px] border-[#C4C4C4] text-slate-600 focus-within:border-blue-600'>
                        <input onKeyUp={handleKeyPress.bind(this)} onChange={(newData) => setSearch(newData.target.value)} id='search' type="text" placeholder='Search...' className='pl-4 focus:outline-none bg-transparent w-full' />
                        <img onClick={handleSubmit} src={SearchIcon} alt="" className='cursor-pointer w-[15px]' />
                    </div>
                </div>
                <table className='mt-10'>
                    <tr>
                        <th className='w-1/12'>ID</th>
                        <th className='w-4/12'>Artwork</th>
                        <th className='w-1/12'>CID</th>
                        <th className='w-2/12'>Transaction ID</th>
                        <th className='w-2/12'>Price</th>
                        <th className='w-2/12'>Time</th>
                    </tr>

                    {
                        Payment.map(payment =>
                            <tr>
                                <td>{payment.art_id}</td>
                                <td>{payment.art_name}</td>
                                <td>{payment.account_id}</td>
                                <td>{payment.paid_id}</td>
                                <td>{payment.price} THB</td>
                                <td>14/2/2024 18:08</td>
                            </tr>
                        )
                    }

                </table>
            </div>
        </>
    )
}