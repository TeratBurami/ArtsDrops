import Icon from '../../assets/images/cart-plus-solid.svg'
import { useState } from 'react'
import { Dialog, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import Button from '../button/button'

interface Props {
    className: string;
}

export default function AddProduct({ className: className }: Props) {

    const [show, setShow] = useState(false)
    const openShow = () => {
        setShow(true);
    }
    const closeShow = () => {
        setShow(false);
    }

    const [type, setType] = useState('')
    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    const [imgData, setImg] = useState('')
    const handleImg = (event: SelectChangeEvent) => {
        setImg(event.target.value as string);
    }

    return (
        <>
            <img src={Icon} className={className + ' cursor-pointer'} alt='Add cart' onClick={openShow} />
            <Dialog open={show} onClose={closeShow} PaperProps={{ sx: { borderRadius: "20px" } }}>
                <div className="p-2 pl-10 pr-10 w-[550px] h-[500px] grid grid-rows-[70%_15%_5%]" >


                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-rows-[20%_50%_30%]">
                            <h1 className='font-bold text-2xl text-center h-fit mt-4'>Add Product</h1>
                            <div className="bg-slate-400 mx-auto w-[140px] h-[160px] rounded">
                                <img className='w-full h-full rounded' src={imgData} hidden={imgData==''} alt="Wrong URL Please try again" />
                            </div>
                            <div className="mx-auto mt-6">
                                <TextField label="Picture" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} value={imgData} onChange={handleImg} />
                            </div>
                        </div>
                        <div className="grid grid-rows-4 mt-5">

                            <TextField label="Name" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />

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
                                    <MenuItem value={'Works on Paper'}>Works on Paper</MenuItem>
                                    <MenuItem value={'Photography'}>Photography</MenuItem>
                                    <MenuItem value={'Design'}>Design</MenuItem>
                                    <MenuItem value={'NFTs'}>NFTs</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField label="Price" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />
                            <TextField label="Artist ID" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: 170 } }} />
                        </div>


                    </div>
                        <TextField label="Detail" variant="outlined" InputProps={{ sx: { borderRadius: 5, height: 50, width: '100%'} }} />

                    <Button value='Add' className='submit w-2/3 mx-auto' onclick={closeShow}></Button>
                </div>
            </Dialog>
        </>
    )
}