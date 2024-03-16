import { Link, useLocation } from 'react-router-dom'

export default function Nav(){
    const location = useLocation();

    return (
        <div className='fixed'>
            <div className='border-r border-black w-fit h-full pb-[1000px]'>

                <h1 className='font-bold text-2xl p-6 mb-2'>Admin Menu</h1>

                <div className='flex flex-col mr-0 items-center'>

                    <Link to='/prod_manage' className={
                        location.pathname === '/prod_manage' ?
                        'bg-gray-200 rounded-md p-6 w-25 text-center text-[12px]':
                        'hover:bg-gray-100 rounded-md p-6 w-25 text-center text-[12px]'
                    }>  Product Management  </Link>

                    <hr className='m-2 w-40 bg-black h-0.5'/>

                    <Link to='/acc_manage' className={
                        location.pathname === '/acc_manage' ? 
                        'bg-gray-200 rounded-md p-6 w-25 text-center text-[12px]':
                        'hover:bg-gray-100 rounded-md p-6 w-25 text-center text-[12px]'
                    }>  Account Management  </Link>

                    <hr className='m-2 w-40 bg-black h-0.5'/>

                    <Link to='/payment_log' className={
                        location.pathname === '/payment_log' ?
                        'bg-gray-200 rounded-md p-6 px-12 w-25 text-center text-[12px]' :
                        'hover:bg-gray-100 rounded-md p-6 px-12 w-25 text-center text-[12px]'
                    }>  Payment Log</Link>

                    <hr className='m-2 w-40 bg-black h-0.5'/>

                    
                </div>
            </div>
        </div>
    )
}