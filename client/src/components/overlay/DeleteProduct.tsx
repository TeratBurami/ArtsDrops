import { useState } from 'react'
import { Dialog } from "@mui/material";
import Delete from '../../assets/images/trash-can-regular.svg';
import X_Icon from '../../assets/images/circle-xmark-regular.svg';

interface Props {
    className?: string;
    art_id:string;
}

export default function DeleteConfirm({ className: className,art_id:art_id}: Props) {
    
    //state of showing the DeleteProduct comfirmation pop-up page
    const [show, setShow] = useState(false)
    const openShow = () => {
        setShow(true);
    }
    const closeShow = () => {
        setShow(false);
    }

    //set art_id which use for delete
    const data={
        art_id:art_id
    }


    //when press delete button, it will delete the product from the database
    const handleSubmit=()=>{
        fetch('http://localhost:3333/art',{
            method:'DELETE',
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
            <img src={Delete} className={className + ' cursor-pointer w-4'} alt='Delete Product' onClick={openShow} />
            <Dialog open={show} onClose={closeShow} PaperProps={{ sx: { borderRadius: "20px" } }}>
                <div className="w-[400px] h-[300px]">
                    <img src={X_Icon} alt="Delete Icon" className='w-20 mx-auto mt-4' />
                    <h1 className='text-[#FF0000] font-bold text-3xl text-center mt-1'>Are you sure?</h1>
                    <hr className='w-4/5 mx-auto mt-4' />
                    <h1 className='text-slate-700 text-base text-center mt-4'>Do you really want to delete <span className='text-base font-bold'>{art_id}</span>?<br />This process cannot be undone.</h1>
                    <div className="mx-auto flex gap-10 w-fit mt-4">
                        <button className='border border-slate-300 bg-slate-100 text-slate-600 hover:bg-white hover:text-slate-800 hover:border-slate-800 rounded-lg' onClick={closeShow}>Cancel</button>
                        <button className='bg-[#FF0000] text-white hover:bg-red-400 hover:text-red-900 rounded-lg' onClick={handleSubmit}>Delete</button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}