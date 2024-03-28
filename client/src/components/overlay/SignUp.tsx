import { Dialog, TextField } from '@mui/material';
import Button from '../button/button';
import Password from '../../assets/images/key-solid.svg';
import Email from '../../assets/images/envelope-solid.svg';
import Close from '../../assets/images/xmark-solid.svg';
import Phone from '../../assets/images/phone-solid.svg';
import User from '../../assets/images/user-solid.svg';
import { useState } from 'react';
import * as validator from 'email-validator';

//validator.validate("test@email.com");

interface Props {
    open: boolean;
    close: () => void;
    signupToLogin: () => void;
}

export default function SignUp({ open: open, close: close }: Props) {

    const [data,setData]=useState({
        username:'',
        password:'',
        email:'',
        DOB:'',
        tel:'',
        user_role:2
    })

    const handleValidation=()=>{
        if(validator.validate(data.email) && data.tel.length==10 && data.username!=null && data.password!=null && data.DOB!=null){
            handleSubmit();
        }
        else{
            console.log('Wrong')
        }
    }

    const handleSubmit=()=>{
        console.log(data)
        fetch('http://localhost:3333/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res=>{res.json(); console.log('Test')})
        .then(data=>{
            console.log('Success',data);
        })
        .catch((err)=>{
            console.error('Error ',err)
        })
        close();

    }

    return (
        <Dialog open={open} onClose={close} PaperProps={{ sx: { borderRadius: "20px" } }}>
            <div className="w-[450px] h-[500px] px-10 py-5 flex flex-col overflow-y-auto">
                <div className="w-fit ml-[350px]">
                    <img src={Close} alt="" className='w-[20px] cursor-pointer' onClick={close} />
                </div>
                <h1 className='text-center font-bold text-4xl text-[#545454]'>Sign Up</h1>
                <div className='flex flex-rows w-fit ml-5 mt-5'>
                    <img src={User} alt="" className='w-[20px] mr-5 h-fit mt-2' />
                    {/* <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input> */}
                    <TextField onChangeCapture={(newData)=>setData({...data,username:newData.target.value})} id="outlined-basic" label="Username" variant="outlined" size='small' InputProps={{ sx: { borderRadius: 10, width: 280 } }} />
                </div>

                {/* <label className='ml-48 mt-5 mb-2 text-[#fe0000] text-xs font-semibold' htmlFor="">* Incorrect format or empty</label> */}
                <div className='flex flex-rows w-fit h-fit ml-5 mt-5'>
                    {/* <label clahtmlFor="">test</label> */}
                    <img src={Password} alt="" className='w-[20px] mr-5 h-fit my-auto' />
                    {/* <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input> */}
                    <TextField onChangeCapture={(newData)=>setData({...data,password:newData.target.value})} id="outlined-basic" label="Password" type='password' size='small' variant="outlined" InputProps={{ sx: { borderRadius: 10,width: 280 } }} />
                </div>
                <div className='flex flex-rows w-fit h-fit ml-5 mt-5'>
                    <img src={Email} alt="" className='w-[20px] mr-5 h-fit my-auto' />
                    {/* <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input> */}
                    <TextField onChangeCapture={(newData)=>setData({...data,email:newData.target.value})} id="outlined-basic" label="Email" variant="outlined" size='small'  InputProps={{ sx: { borderRadius: 10, width: 280 } }} />
                </div>
                <div className='flex flex-rows w-fit h-fit ml-5 mt-5 mb-2' hidden={true}>
                    <img src={Phone} alt="" className='w-[20px] mr-5 h-fit my-auto' />
                    {/* <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input> */}
                    <TextField onChangeCapture={(newData)=>setData({...data,tel:newData.target.value})} id="outlined-basic" label="Telephone" variant="outlined" size='small' InputProps={{ sx: { borderRadius: 10, width: 280 } }} />
                </div>
                <div className="w-fit ml-14 mt-2">
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker onChange={(data:string)=>handleDate(data)} label="Date of Birth" sx={{
                                ".MuiInputBase-root": {
                                    borderRadius: 50,
                                    height: 55,
                                    width: 280
                                },
                            }} />
                        </DemoContainer>
                    </LocalizationProvider> */}
                    <input onChange={(newData)=>setData({...data,DOB:newData.target.value})} id='datepicker' type="date" className='cursor-text focus:outline-blue-600 hover:border-black p-2 pl-3 mt-2 rounded-full border border-[1.3px] border-[#C4C4C4] text-slate-600' />
                </div>
                <Button onclick={handleValidation} className='font-semibold submit w-11/12 mx-auto mt-4 h-12' value='Sign Up'></Button>
            </div>
        </Dialog>
    )
}