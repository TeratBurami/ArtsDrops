import Nav from '../../components/admin/nav'
import './table.css'
import { useEffect, useState } from 'react'
import RemoveUser from '../../components/overlay/RemoveUser'
import AddAccount from '../../components/overlay/AddAccount'
import EditUser from '../../components/overlay/EditUser'
import SearchIcon from '../../assets/images/magnifying-glass-solid.svg'

export default function AccountManage(this: any) {

    //state of the data
    const [Account, setAccount] = useState<any[]>([])
    //state of search data
    const [search,setSearch]=useState('')

    //get the data and set it to the state
    useEffect(() => {
        fetch('http://localhost:3333/account')
            .then(res => res.json())
            .then(
                result => setAccount(result)
            )
    }, [])

    //get the data by the text in the search bar
    const handleSubmit=()=>{
        fetch(`http://localhost:3333/account?search=${search}`)
            .then(res => res.json())
            .then(
                result => setAccount(result)
            )
    }

    //handle press enter to search
    const handleKeyPress = (e: { key: string }) => {
        if (e.key === "Enter") {
          handleSubmit();
        }
      };

    //transfer the priority number to string
    const switchCase = (e: number) => {
        switch (e) {
            case 0: return 'Super Admin'; break;
            case 1: return 'Admin'; break;
            case 2: return 'User'; break;
        }
    }


    return (
        <div>
            <Nav></Nav>

            <div className='ml-[12rem] mr-6 p-10'>
                <h1 className='font-semibold text-2xl pb-4'>Account Management</h1>
                <div className='rounded-full bg-slate-200 h-14 flex pr-2 justify-between items-center'>
                    {/* <img src={AddUser} className='w-6 ml-10'></img> */}
                    <AddAccount className='w-6 ml-6'></AddAccount>
                    <div className='hover:border-black rounded-full w-1/2 pl-3 h-3/4 p-2 flex border-[1.3px] border-[#C4C4C4] text-slate-600 focus-within:border-blue-600'>
                        <input onKeyUp={handleKeyPress.bind(this)} onChange={(newData)=>setSearch(newData.target.value)} id='search' type="text" placeholder='Search...' className='pl-4 focus:outline-none bg-transparent w-full' />
                        <img onClick={handleSubmit} src={SearchIcon} alt="" className='cursor-pointer w-[15px]' />
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