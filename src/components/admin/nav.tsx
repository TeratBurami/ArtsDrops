import Button from '../button/button'


export default function Nav(){
    return (
        <div className='fixed'>
            <div className='border-r border-black w-fit h-full pb-[1000px]'>
                <h1 className='font-bold text-2xl p-10'>Admin Menu</h1>
                <div className='flex flex-col mr-0 items-center'>
                    <Button route='prod_manage' value='Product Management' className={
                        location.pathname === '/prod_manage' ? 'bg-gray-200 rounded-md p-4':'hover:bg-gray-100 rounded-md p-4'
                    }></Button>
                    <hr className='m-6 w-40 bg-black h-0.5'/>
                    <Button route='acc_manage' value='Account Management' className={
                        location.pathname === '/acc_manage' ? 'bg-gray-200 rounded-md m-4':'hover:bg-gray-100 rounded-md m-4'
                    }></Button>
                    <hr className='m-6 w-40 bg-black h-0.5'/>
                    <Button route='payment_log' value='Payment Log' className={
                        location.pathname === '/payment_log' ? 'bg-gray-200 rounded-md m-4':'hover:bg-gray-100 rounded-md m-4'
                    }></Button>
                </div>
            </div>
        </div>
    )
}