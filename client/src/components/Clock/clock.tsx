import { useEffect, useState } from "react";
import './clock.css'


const timeCount=()=>{
    let now=new Date();
    let tomorrow=new Date(now.getFullYear(),now.getMonth(),now.getDay(),23,59,59);
    let hour=tomorrow.getHours()-now.getHours();
    let min=tomorrow.getMinutes()-now.getMinutes();
    let sec=tomorrow.getSeconds()-now.getSeconds();
    let result=`${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    
    return result;
}

export default function Clock(){
    const [time,setTime]=useState('');
    useEffect(() => {
        setTimeout(() => {
          setTime(timeCount());
        }, 1000);
      });
    

    return(
        <div className="p-4 shadow-inner w-fit rounded-full shadow-slate-400 mx-auto">
            <h1 className="text-[#FE0000] text-[35px] font-bold" id="time">{time}</h1>
        </div>
        
    )
}