import { Link } from 'react-router-dom'

export default function Nav(){
    return (
        <div className='fixed'>
            <div className='border-r border-black w-fit h-full pb-[1000px]'>

                <h1 className='font-bold text-2xl p-10'>Admin Menu</h1>

                <div className='flex flex-col mr-0 items-center'>

                    <Link to='/prod_manage' className={
                        location.pathname === '/prod_manage' ?
                        'bg-gray-200 rounded-md p-6 w-40 text-center':
                        'hover:bg-gray-100 rounded-md p-6 w-40 text-center'
                    }>  Product Management  </Link>

                    <hr className='m-6 w-40 bg-black h-0.5'/>

                    <Link to='/acc_manage' className={
                        location.pathname === '/acc_manage' ? 
                        'bg-gray-200 rounded-md p-6 w-40 text-center':
                        'hover:bg-gray-100 rounded-md p-6 w-40 text-center'
                    }>  Account Management  </Link>

                    <hr className='m-6 w-40 bg-black h-0.5'/>

                    <Link to='/payment_log' className={
                        location.pathname === '/payment_log' ?
                        'bg-gray-200 rounded-md p-6 w-40 text-center' :
                        'hover:bg-gray-100 rounded-md p-6 w-40 text-center'
                    }>  Payment Log</Link>

                    <hr className='m-6 w-40 bg-black h-0.5'/>

                    
                </div>
            </div>
        </div>
    )
}