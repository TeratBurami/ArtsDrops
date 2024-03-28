import Icon from '../../assets/images/user-plus-solid.svg'
import { FormEvent, useState } from 'react'
import { Dialog, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import Button from '../button/button'

interface Props {
    className?: string;
}

export default function AddProduct({ className: className }: Props) {
    
    const [show, setShow] = useState(false)
    const openShow = () => {
        setShow(true);
    }
    const closeShow = () => {
        setShow(false);
    }
    
    const [data,setData]=useState({
        username:'',
        password:'',
        email:'',
        DOB:'',
        tel:'',
        user_role:2,
    })

    const switchCase=(e: string)=>{
        switch(e){
            case 'Super Admin':return 0; break;
            case 'Admin':return 1; break;
            case 'User':return 2; break;
            default: return 3;
        }
    }

    const [role, setRole] = useState('User')
    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
        setData({...data,user_role:switchCase(event.target.value)});
    };


    const handleSubmit=()=>{
        // console.log(data)
        fetch('http://localhost:3333/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('Success',data);
        })
        .catch((err)=>{
            console.error('Error ',err)
        })
        closeShow();
        location.reload()
    }
    



    return (
        <>
            <img src={Icon} className={className + ' cursor-pointer'} alt='Add cart' onClick={openShow} />
            <Dialog open={show} onClose={closeShow} PaperProps={{ sx: { borderRadius: "20px" } }}>
                <div className="p-2 pl-10 pr-10 w-[500px] h-[450px] flex flex-col gap-10 mx-auto" >

                    <h1 className='font-bold text-2xl text-center h-fit mt-4'>Add Account</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-rows-3 gap-10 mx-auto">

                            <TextField onChangeCapture={(newData)=>setData({...data,username:newData.target.value})} label="Fullname" name="picture" id="picture" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }}/>
                            <TextField onChangeCapture={(newData)=>setData({...data,password:newData.target.value})} label="Password" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={role}
                                    label="Type"
                                    onChange={handleChange}
                                    sx={{ borderRadius: 5, height: 50, width:170 }}

                                >
                                    <MenuItem value={'Super Admin'}>Super Admin</MenuItem>
                                    <MenuItem value={'Admin'}>Admin</MenuItem>
                                    <MenuItem value={'User'}>User</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='grid grid-rows-3 gap-10 mx-auto'>
                            <TextField onChangeCapture={(newData)=>setData({...data,email:newData.target.value})} label="Email" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />
                            <TextField onChangeCapture={(newData)=>setData({...data,tel:newData.target.value})} label="Phone number" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />
                            <input onChange={(newData)=>setData({...data,DOB:newData.target.value})} id='datepicker' type="date" className='cursor-text focus:outline-blue-600 hover:border-black p-2 pl-3 rounded-2xl border border-[1.3px] border-[#C4C4C4] text-slate-600' />
                        </div>


                    </div>

                    <Button value='Add' className='submit w-2/3 mx-auto' onclick={handleSubmit}></Button>
                </div>
            </Dialog>
        </>
    )
}