import Nav from '../../components/admin/nav'
import Search from '../../components/search'
import './table.css'

export default function PaymentLog(){
    return(
        <>
            <Nav></Nav>

            <div className='ml-60'>
            <h1 className='font-semibold text-2xl pb-4'>Account Management</h1>
                <div className='bg-gray-200 h-14 flex justify-end items-center'>
                    <div className='mr-2'>
                        <Search></Search>
                    </div>
                </div>
                <table>
                    <tr>
                        <th></th>
                        <th></th>

                    </tr>
                </table>
            </div>
        </>
    )
}