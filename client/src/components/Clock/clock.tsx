import { useEffect, useState } from "react";
import './clock.css'


const timeCount=()=>{
    //now = the user's current time
    let now=new Date();
    //tomorrow = 23:59:59 of that day
    let tomorrow=new Date(now.getFullYear(),now.getMonth(),now.getDay(),23,59,59);
    // hour,min,sec = time remaining from tomorrow
    let hour=tomorrow.getHours()-now.getHours();
    let min=tomorrow.getMinutes()-now.getMinutes();
    let sec=tomorrow.getSeconds()-now.getSeconds();
    //format the hour,min,sec to string
    let result=`${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    
    return result;
}

export default function Clock(){
    const [time,setTime]=useState('');
    useEffect(() => {
        //when call this element, this element will set the time by the return of timeCount() in every 1000ms (1 sec)
        setTimeout(() => {
          setTime(timeCount());
        }, 1000);
      });
    

    return(
        //clock UI
        <div className="p-4 shadow-inner w-fit rounded-full shadow-slate-400 mx-auto">
            <h1 className="text-[#FE0000] text-[35px] font-bold" id="time">{time}</h1>
        </div>
        
    )
}