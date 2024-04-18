import Icon from '../../assets/images/cart-plus-solid.svg'
import { FormEvent, useState } from 'react'
import { Dialog, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import Button from '../button/button'
import EditIcon from '../../assets/images/pen-to-square-solid.svg'

interface Props {
    className?: string;
    account_id: string;
    username: string;
    email: string;
    DOB: string;
    phone_no: string;
    user_role: number;
}

export default function EditUser({ user_role: user_role, className: className, account_id: account_id, username: username, email: email, phone_no: phone_no, DOB: DOB }: Props) {

    //state of showing the EditUser pop-up page
    const [show, setShow] = useState(false)
    const openShow = () => {
        setShow(true);
    }
    const closeShow = () => {
        setShow(false);
    }
    
    //set the data as the old data
    const [data, setData] = useState({
        username: username,
        email: email,
        DOB: DOB.substring(0,10),
        phone_no: phone_no,
        user_role: user_role,
        account_id:account_id
    })

    //transfer the string of role to priority number
    const RoleToNum = (e: string) => {
        switch (e) {
            case 'Super Admin': return 0; break;
            case 'Admin': return 1; break;
            case 'User': return 2; break;
            default: return 3;
        }
    }

    //transfer the priority number of role to string
    const NumToRole = (e: number) => {
        switch (e) {
            case 0: return 'Super Admin'; break;
            case 1: return 'Admin'; break;
            case 2: return 'User'; break;
            default: return 3;
        }
    }

    //handle the changes of the new input
    const [role, setRole] = useState(NumToRole(data.user_role))
    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
        setData({ ...data, user_role: RoleToNum(event.target.value) });
    };

    //when press edit button, it will edit the account from database
    const handleSubmit = () => {
        fetch('http://localhost:3333/account', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
            })
            .catch((err) => {
                console.error('Error ', err)
            })
        closeShow();
        location.reload()

    }




    return (
        <>
            <img src={EditIcon} className={className + ' cursor-pointer'} alt='Add cart' onClick={openShow} />
            <Dialog open={show} onClose={closeShow} PaperProps={{ sx: { borderRadius: "20px" } }}>
                <div className="p-2 pl-10 pr-10 w-[500px] h-[450px] flex flex-col gap-10 mx-auto" >

                    <h1 className='font-bold text-2xl text-center h-fit mt-4'>Edit Account</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-rows-3 gap-10 mx-auto">

                            <TextField value={data.username} onChangeCapture={(newData) => setData({ ...data, username: newData.target.value })} label="Fullname" name="picture" id="picture" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />
                            {/* <TextField onChangeCapture={(newData) => setData({ ...data, password: newData.target.value })} label="Password" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} /> */}

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={role}
                                    label="Type"
                                    onChange={handleChange}
                                    sx={{ borderRadius: 5, height: 50, width: 170 }}

                                >
                                    <MenuItem value={'Super Admin'}>Super Admin</MenuItem>
                                    <MenuItem value={'Admin'}>Admin</MenuItem>
                                    <MenuItem value={'User'}>User</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='grid grid-rows-3 gap-10 mx-auto'>
                            <TextField value={data.email} onChangeCapture={(newData) => setData({ ...data, email: newData.target.value })} label="Email" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />
                            <TextField value={data.phone_no} onChangeCapture={(newData) => setData({ ...data, phone_no: newData.target.value })} label="Phone number" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />
                            <input value={data.DOB.substring(0,10)} onChange={(newData) => setData({ ...data, DOB: newData.target.value })} id='datepicker' type="date" className='cursor-text focus:outline-blue-600 hover:border-black p-2 pl-3 rounded-2xl border border-[1.3px] border-[#C4C4C4] text-slate-600' />
                        </div>


                    </div>

                    <Button value='Edit' className='submit w-2/3 mx-auto' onclick={handleSubmit}></Button>
                </div>
            </Dialog>
        </>
    )
}