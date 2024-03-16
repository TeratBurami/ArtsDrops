import Nav from '../../components/admin/nav'
import Search from '../../components/search'
import './table.css'
import Edit from '../../assets/images/user-pen-solid.svg'
import Delete from '../../assets/images/user-minus-solid.svg'
import AddUser from '../../assets/images/user-plus-solid.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function AccountManage() {

    const [Account, setAccount] = useState<any[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/account').then(res => res.json()).then(
            result => setAccount(result)
        )
    }, [])


    return (
        <div>
            <Nav></Nav>

            <div className='ml-[12rem] mr-6 p-10'>
                <h1 className='font-semibold text-2xl pb-4'>Account Management</h1>
                <div className='rounded-full bg-slate-200 h-14 flex justify-between items-center'>
                    <img src={AddUser} className='w-6 ml-10'></img>
                    <div className='mr-2'>
                        <Search></Search>
                    </div>
                </div>
                <table className='mt-10'>
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
                        Account.map(account => (
                            <tr>
                                <td>{account.account_id}</td>
                                <td>{account.username}</td>
                                <td>flymoontotheme@gmail.com</td>
                                <td>099-999-9999</td>
                                <td>{account.Rolee === null? 'User': 'Admin'}</td>
                                <td>
                                    <Link to=''>
                                        <img src={Edit} className='w-6'></img>
                                    </Link>
                                </td>
                                <td>
                                    <Link to=''>
                                        <img src={Delete} className='w-6'></img>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }

                </table>
            </div>
        </div>
    )
}