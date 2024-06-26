import { Dialog, TextField } from '@mui/material';
import Button from '../button/button';
import Password from '../../assets/images/key-solid.svg';
import Email from '../../assets/images/envelope-solid.svg';
import Close from '../../assets/images/xmark-solid.svg';
import { useState } from 'react';

interface Props{
    open:boolean;
    close:()=>void;
    loginToSignup:()=>void;
}

export default function Login({open:open,close:close,loginToSignup:loginToSignup}:Props){
    
    //set the default data as a blank 
    const [data,setData]=useState({
        email:'',
        password:'',
    })

    //when user press login button, the login API will check the email and password
    //if the login is succeed, it will create a TOKEN and store it in localStorage
    const handleSubmit=()=>{
        console.log(data)
        fetch('http://localhost:3333/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>
           {if(data.status=='success'){
            localStorage.setItem('TOKEN',data.TOKEN);
            setData({email:'',password:''})
            close()
            alert('Login success')
            location.reload()
           }
           else{
            alert('Login failed')
           }}
        )
        .catch((err)=>{
            console.error('Error ',err)
        })
        

    }

    return(
        <Dialog open={open} onClose={close} PaperProps={{ sx: { borderRadius: "20px" } }}>
                    <div className="w-[450px] h-[450px] px-10 py-5 flex flex-col">
                        <div className="w-fit ml-[350px]">
                            <img src={Close} alt="" className='w-[20px] cursor-pointer' onClick={close}/>
                        </div>
                        <h1 className='text-center font-bold text-4xl text-[#545454]'>Login</h1>
                        <div className='flex flex-rows w-fit h-fit ml-5 mt-14'>
                            <img src={Email} alt="" className='w-[20px] h-fit my-auto mr-5' />
                            {/* <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-10'></input> */}
                            <TextField onChangeCapture={(newData)=>setData({...data,email:newData.target.value})} id="outlined-basic" label="Gmail" variant="outlined" InputProps={{ sx: { borderRadius: 10, height: 50, width: 280 } }} />
                        </div>
                        <div className='flex flex-rows w-fit ml-5 mt-5 mb-6'>
                            <img src={Password} alt="" className='w-[20px] h-fit mt-2 mr-5' />
                            {/* <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-10'></input> */}
                            <TextField onChangeCapture={(newData)=>setData({...data,password:newData.target.value})} id="outlined-basic" type='password' label="Password" variant="outlined" InputProps={{ sx: { borderRadius: 10, height: 50, width: 280 } }} />
                        </div>
                        <Button onclick={handleSubmit} className='mb-4 font-semibold submit w-11/12 mx-auto mt-10 h-10' value='Login'></Button>
                        <p onClick={loginToSignup} className='cursor-pointer text-center mt-3 underline underline-offset-4 text-slate-600 text-sm'>Don't have an account</p>
                    </div>
            </Dialog>
    )
}