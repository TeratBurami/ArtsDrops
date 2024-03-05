import Nav from '../../components/admin/nav'
import Search from '../../components/search'
import './table.css'
import Edit from '../../assets/images/user-pen-solid.svg'
import Delete from '../../assets/images/user-minus-solid.svg'
import AddUser from '../../assets/images/user-plus-solid.svg'

export default function AccountManage(){
    return(
        <div>
            <Nav></Nav>

            <div className='ml-60 mr-6 p-10'>
                <h1 className='font-semibold text-2xl pb-4'>Account Management</h1>
                <div className='bg-gray-200 h-14 flex justify-between items-center'>
                    <img src={AddUser} className='w-6 ml-10'></img>
                    <div className='mr-2'>
                        <Search></Search>
                    </div>
                </div>
                <table>
                    <tr>
                        <th className='w-1/12'>ID</th>
                        <th className='w-1/3'>Fullname</th>
                        <th className='w-1/6'>Email</th>
                        <th className='w-1/6'>Tel.</th>
                        <th className='w-1/12'>Role</th>
                        <th className='w-1/12'>Edit</th>
                        <th className='w-1/12'>Delete</th>
                    </tr>

                    {
                        /*TESTER */
                        <tr>
                            <td>001</td>
                            <td>Mr. Pathompum Jirakarnpaisan</td>
                            <td>flymoontotheme@gmail.com</td>
                            <td>099-999-9999</td>
                            <td>Admin</td>
                            <td><img src={Edit} className='w-6'></img></td>
                            <td><img src={Delete} className='w-6'></img></td>
                        </tr>
                    }

                    {
                        /*TESTER*/
                        <tr>
                            <td>002</td>
                            <td>Mr. Terat Burami</td>
                            <td>TeratBur@gmail.com</td>
                            <td>099-999-9999</td>
                            <td>User</td>
                            <td><img src={Edit} className='w-6'></img></td>
                            <td><img src={Delete} className='w-6'></img></td>
                        </tr>
                    }

                </table>
            </div>
        </div>
    )
}