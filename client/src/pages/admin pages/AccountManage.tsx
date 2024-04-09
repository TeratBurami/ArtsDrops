import Nav from '../../components/admin/nav'
import Search from '../../components/search'
import './table.css'
import { useEffect, useState } from 'react'
import RemoveUser from '../../components/overlay/RemoveUser'
import AddAccount from '../../components/overlay/AddAccount'
import EditUser from '../../components/overlay/EditUser'

export default function AccountManage() {

    const [Account, setAccount] = useState<any[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/account').then(res => res.json()).then(
            result => setAccount(result)
        )
    }, [])

    useEffect(() => {
        const TOKEN=localStorage.getItem('TOKEN');
        fetch('http://localhost:3333/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+TOKEN
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status == 'success') {
                    // alert('Auth success')
                    // setIsLogin(true)
                    //continue here
                }
                else {
                    // alert('Auth failed')
                    localStorage.removeItem('TOKEN')
                }
            }
            )
            .catch((err) => {
                console.error('Error ', err)
            })
    }, [])

    const switchCase=(e: number)=>{
        switch(e){
            case 0:return 'Super Admin'; break;
            case 1:return 'Admin'; break;
            case 2:return 'User'; break;
        }
    }


    return (
        <div>
            <Nav></Nav>

            <div className='ml-[12rem] mr-6 p-10'>
                <h1 className='font-semibold text-2xl pb-4'>Account Management</h1>
                <div className='rounded-full bg-slate-200 h-14 flex justify-between items-center'>
                    {/* <img src={AddUser} className='w-6 ml-10'></img> */}
                    <AddAccount className='w-6 ml-6'></AddAccount>
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
                                <td>{account.email}</td>
                                <td>{account.phone_no}</td>
                                <td>{switchCase(account.user_role)}</td>
                                <td>
                                    <EditUser className='w-4' account_id={account.account_id} username={account.username} email={account.email} DOB={account.DOB} phone_no={account.phone_no} user_role={account.user_role}></EditUser>
                                </td>
                                <td>
                                    <RemoveUser account_id={account.account_id}></RemoveUser>
                                </td>
                            </tr>
                        ))
                    }

                </table>
            </div>
        </div>
    )
}