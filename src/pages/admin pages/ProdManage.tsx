import Nav from '../../components/admin/nav'
import Search from '../../components/search'
import './table.css'
import Edit from '../../assets/images/pen-to-square-solid.svg'
import Trash from '../../assets/images/trash-can-regular.svg'
import Cart from '../../assets/images/cart-plus-solid.svg'
import {Link} from 'react-router-dom'

export default function ProdManage(){
    return(
        <div>
            <Nav></Nav>

            <div className='ml-60 mr-6 p-10'>
                <h1 className='text-2xl font-semibold pb-4'>Product Management</h1>
                <div className='bg-gray-200 h-14 flex justify-between items-center'>
                    <img src={Cart} className='w-6 ml-10'></img>
                    <div className='mr-2'>
                        <Search></Search>
                    </div>
                </div>
                <table>
                    <tr>
                        <th className='w-1/12'>ID</th>
                        <th className='w-1/3'>Name</th>
                        <th className='w-1/12'>Type</th>
                        <th className='w-1/6'>Artist</th>
                        <th className='w-1/6'>Price</th>
                        <th className='w-1/12'>Edit</th>
                        <th className='w-1/12'>Delete</th>
                    </tr>
                    {
                        /*TESTER*/
                        <tr>
                            <td>P001</td>
                            <td>Giraffe Family</td>
                            <td>Arts</td>
                            <td>Giraffe</td>
                            <td>5000</td>
                            <td>
                                <Link to=''>
                                    <img src={Edit} className='w-6'></img>
                                </Link>
                            </td>
                            <td>
                                <Link to=''>
                                    <img src={Trash} className='w-6'></img>
                                </Link>
                            </td>
                        </tr>
                    }
                </table>
            </div>
        </div>
    )
}