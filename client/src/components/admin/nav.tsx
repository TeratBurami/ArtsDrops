import { Link, useLocation, useNavigate } from 'react-router-dom'
import X from '../../assets/images/xmark-solid.svg'
import { useEffect } from 'react';

export default function Nav() {
    const location = useLocation();
    const navigate = useNavigate();

    //Authorize the TOKEN to check this user login or not
    useEffect(() => {
        const TOKEN = localStorage.getItem('TOKEN');
        fetch('http://localhost:3333/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + TOKEN
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status == 'success') {
                    //check permission before let user enter this page
                    //only admin can enter this page
                    //if the role is not admin or did not login yet, it will redirect to home page
                    fetch(`http://localhost:3333/account?id=${data.data.id}`)
                        .then(res => res.json())
                        .then(user => {
                            if (user[0].user_role == 2) {
                                navigate('/')
                            }
                        })
                }
                else {
                    navigate('/')
                    localStorage.removeItem('TOKEN')
                }
            }
            )
            .catch((err) => {
                console.error('Error ', err)
            })
    }, [])

    return (
        <div className='fixed'>
            <div className='border-r border-black w-fit h-full pb-[1000px]'>

                <h1 className='font-bold text-2xl p-6 mb-2'>Admin Menu</h1>

                <div className='flex flex-col mr-0 items-center'>

                    {/* Go to Product management page */}
                    <Link to='/prod_manage' className={
                        location.pathname === '/prod_manage' ?
                            'bg-gray-200 rounded-md p-6 w-25 text-center text-[12px]' :
                            'hover:bg-gray-100 rounded-md p-6 w-25 text-center text-[12px]'
                    }>  Product Management  </Link>


                    <hr className='m-2 w-40 bg-black h-0.5' />

                    {/* Go to Account Management page */}
                    <Link to='/acc_manage' className={
                        location.pathname === '/acc_manage' ?
                            'bg-gray-200 rounded-md p-6 w-25 text-center text-[12px]' :
                            'hover:bg-gray-100 rounded-md p-6 w-25 text-center text-[12px]'
                    }>  Account Management  </Link>

                    <hr className='m-2 w-40 bg-black h-0.5' />

                    {/* Go to Payment Log page */}
                    <Link to='/payment_log' className={
                        location.pathname === '/payment_log' ?
                            'bg-gray-200 rounded-md p-6 px-12 w-25 text-center text-[12px]' :
                            'hover:bg-gray-100 rounded-md p-6 px-12 w-25 text-center text-[12px]'
                    }>  Payment Log</Link>

                    <hr className='m-2 mb-4 w-40 bg-black h-0.5' />

                    {/* Go back to Home page */}
                    <Link to='/' className='text-[#8c8c8c] text-xs flex' id='aboutus'><img src={X} alt="" className='w-2 mt-0.5 mr-1 ml-1' /> Return to home</Link>


                </div>
            </div>
        </div>
    )
}