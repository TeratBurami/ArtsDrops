import { Dialog } from '@mui/material';
import Button from '../button/button';
import Password from '../../assets/images/key-solid.svg';
import Email from '../../assets/images/envelope-solid.svg';
import Close from '../../assets/images/xmark-solid.svg';
import Phone from '../../assets/images/phone-solid.svg';
import User from '../../assets/images/user-solid.svg';
import DatePicker from '../datePicker';

interface Props{
    open:boolean;
    close:()=>void;
    signupToLogin:()=>void;
}

export default function SignUp({open:open,close:close}:Props){
    return(
        <Dialog open={open} onClose={close} PaperProps={{ sx: { borderRadius: "20px" } }}>
            <div className="w-[450px] h-[500px] px-10 py-5 flex flex-col">
                        <div className="w-fit ml-[350px]">
                            <img src={Close} alt="" className='w-[20px] cursor-pointer' onClick={close}/>
                        </div>
                        <h1 className='text-center font-bold text-4xl text-[#545454]'>Sign Up</h1>
                        <div className='flex flex-rows w-fit ml-5 mt-5'>
                            <img src={User} alt="" className='w-[20px] h-fit mt-2' />
                            <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input>
                        </div>
                        <div className='flex flex-rows w-fit h-fit ml-5 mt-5'>
                            <img src={Password} alt="" className='w-[20px] h-fit my-auto' />
                            <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input>
                        </div>
                        <div className='flex flex-rows w-fit h-fit ml-5 mt-5'>
                            <img src={Email} alt="" className='w-[20px] h-fit my-auto' />
                            <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input>
                        </div>
                        <div className='flex flex-rows w-fit h-fit ml-5 mt-5 mb-2'>
                            <img src={Phone} alt="" className='w-[20px] h-fit my-auto' />
                            <input type='text' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-8'></input>
                        </div>
                        <div className="w-fit mx-auto"><DatePicker/></div>
                        <Button onclick={close} className='font-semibold submit w-11/12 mx-auto mt-4 h-8' value='Sign Up'></Button>
                    </div>
            </Dialog>
    )
}