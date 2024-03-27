import Icon from '../../assets/images/cart-plus-solid.svg'
import { FormEvent, useState } from 'react'
import { Dialog, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import Button from '../button/button'
import EditIcon from '../../assets/images/pen-to-square-solid.svg'

interface Props {
    className?: string;
    art_id:string;
    art_name:string;
    art_type:string;
    price:number;
    picture:string;
    artist_id:string;
    descript:string;
}

export default function EditProduct({ className: className,descript:descript,art_id:art_id,art_name:art_name,art_type:art_type,price:price,picture:picture,artist_id:artist_id }: Props) {
    
    const [show, setShow] = useState(false)
    const openShow = () => {
        setShow(true);
    }
    const closeShow = () => {
        setShow(false);
    }
    
    const [data,setData]=useState({
        art_name:art_name,
        art_id:art_id,
        type:art_type,
        price:price,
        descript:descript,
        picture:picture,
        artist_id:artist_id,
    })

    const [type, setType] = useState(data.type)
    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
        setData({...data,type:event.target.value as string});
    };

    const [imgData, setImg] = useState(data.picture)
    const handleImg = (event: SelectChangeEvent) => {
        setImg(event.target.value as string);
    }

    const handleSubmit=()=>{
        fetch('http://localhost:3333/editProduct',{
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
            <img src={EditIcon} className={className + ' cursor-pointer'} alt='Add cart' onClick={openShow} />
            <Dialog open={show} onClose={closeShow} PaperProps={{ sx: { borderRadius: "20px" } }}>
                <div className="p-2 pl-10 pr-10 w-[550px] h-[500px] grid grid-rows-[70%_15%_5%]" >


                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-rows-[20%_50%_30%]">
                            <h1 className='font-bold text-2xl text-center h-fit mt-4'>Edit Product</h1>
                            <div className="bg-slate-400 mx-auto w-[140px] h-[160px] rounded">
                                <img className='w-full h-full rounded object-cover' src={imgData} hidden={data.picture==''} alt="Wrong URL Please try again" />
                            </div>
                            <div className="mx-auto mt-6">
                                <TextField onChangeCapture={(newData)=>setData({...data,picture:newData.target.value})} label="Picture" name="picture" id="picture" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} value={data.picture} onChange={handleImg} />
                            </div>
                        </div>
                        <div className="grid grid-rows-4 mt-5">

                            <TextField value={data.art_name} onChangeCapture={(newData)=>setData({...data,art_name:newData.target.value})} label="Name" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Type"
                                    onChange={handleChange}
                                    sx={{ borderRadius: 5, height: 50, width:170 }}

                                >
                                    <MenuItem value={'Drawing'}>Drawing</MenuItem>
                                    <MenuItem value={'Painting'}>Painting</MenuItem>
                                    <MenuItem value={'Graffiti'}>Graffiti</MenuItem>
                                    <MenuItem value={'Digital Art'}>Digital Art</MenuItem>
                                    <MenuItem value={'Prints'}>Prints</MenuItem>
                                    <MenuItem value={'Art toy'}>Art toy</MenuItem>
                                    <MenuItem value={'Photography'}>Photography</MenuItem>
                                    <MenuItem value={'Design'}>Design</MenuItem>
                                    <MenuItem value={'NFTs'}>NFTs</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField value={data.price}  onChangeCapture={(newData)=>setData({...data,price:newData.target.value})} label="Price" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />
                            <TextField value={data.artist_id} onChangeCapture={(newData)=>setData({...data,artist_id:newData.target.value})} label="Artist ID" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />
                        </div>


                    </div>
                        <TextField value={data.descript} onChangeCapture={(newData)=>setData({...data,descript:newData.target.value})} label="Detail" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: '100%'} }} />

                    <Button value='Add' className='submit w-2/3 mx-auto' onclick={handleSubmit}></Button>
                </div>
            </Dialog>
        </>
    )
}