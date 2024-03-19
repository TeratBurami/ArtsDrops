import { Dialog, TextField } from '@mui/material';
import Button from '../button/button';
import Close from '../../assets/images/xmark-solid.svg';
import AdminIcon from '../../assets/images/user-tie-solid.svg';

interface Props{
    open:boolean;
    close:()=>void;
}

export default function Admin({open:open,close:close}:Props){
    return(
        <Dialog open={open} onClose={close} className='dialog' PaperProps={{ sx: { borderRadius: "20px" } }}>
                    <div className="w-[450px] h-[250px] px-10 py-5 flex flex-col">
                        <div className="w-fit ml-[350px]">
                            <img src={Close} alt="" className='w-[20px] cursor-pointer' onClick={close}/>
                        </div>
                        <h1 className='text-center font-bold text-4xl text-[#545454]'>Admin</h1>
                        <div className='flex flex-rows w-fit h-fit ml-16 mt-10'>
                            <img src={AdminIcon} alt="" className='w-[20px] h-fit my-auto mr-5' />
                            {/* <input type='text' placeholder='TOKEN' className='ml-5 focus:outline-none text-xs w-[250px] shadow-[inset_0_0px_5px_0px_rgba(0,0,0,0.5)] pl-5 rounded-full border border-[#545454] h-10'></input> */}
                            <TextField id="outlined-basic" label="TOKEN" variant="outlined" InputProps={{ sx: { borderRadius: 10, height: 50, width: 170 } }} />
                        </div>
                        <Button route='prod_manage' className='submit w-11/12 mx-auto mt-6 h-8 font-semibold' value='Confirm'></Button>
                    </div>
        </Dialog>
    )
}