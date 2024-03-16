import Nav from '../../components/admin/nav'
import Search from '../../components/search'
import './table.css'

export default function PaymentLog(){
    return(
        <>
            <Nav></Nav>

            <div className='ml-[12rem] mr-6 p-10'>
            <h1 className='font-semibold text-2xl pb-4'>Payment Log</h1>
                <div className='rounded-full bg-slate-200 h-14 flex justify-end items-center'>
                    <div className='mr-2'>
                        <Search></Search>
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
                        /*TESTER */
                        <tr>
                            <td>001</td>
                            <td>Lorem Ipsum</td>
                            <td>001</td>
                            <td>0123456789</td>
                            <td>100,000.00 THB</td>
                            <td>14/2/2024 18:08</td>
                        </tr>
                    }

                </table>
            </div>
        </>
    )
}