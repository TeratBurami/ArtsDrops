import Nav from '../../components/admin/nav'
import Search from '../../components/search'
import '../ProdManage/ProdManage.css'
import Edit from '../../assets/images/pen-to-square-solid.svg'
import Trash from '../../assets/images/trash-can-regular.svg'

export default function ProdManage(){
    return(
        <div>
            <Nav></Nav>

            <div className='ml-60 mt-10 mr-6'>
                <h1 className='text-2xl font-semibold'>
                    Product Management
                </h1>
                <div className='bg-gray-200 h-10 flex justify-end'>
                    <Search></Search>
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
                    <tr>
                        <td>P001</td>
                        <td>Giraffe Family</td>
                        <td>Arts</td>
                        <td>Giraffe</td>
                        <td>5000</td>
                        <td><img src={Edit} className='w-6'></img></td>
                        <td><img src={Trash} className='w-6'></img></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}