//this element is the artist information card

import Artist from "./overlay/ArtistShow";

interface Props{
    url?:string;
    name:string;
    detail:string;
    id:number;
    sold:number;
    className?:string;
}

export default function Card({className:className,url='https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg',name:name,detail:detail,sold:sold,id:id}:Props) {
  return (
    <div className={"card mx-auto grid grid-rows-[60%_40%] h-[600px] rounded-lg shadow-lg shadow-slate-500 bg-white "+className}>
      <div className="img w-full h-full">
        <img
          src={url}
          alt=""
          className="rounded-lg object-cover w-full h-full rounded-b-none"
        />
      </div>
      <div className="info flex flex-col justify-end mb-10">
        <h1 className="ml-3 text-left font-semibold text-3xl mb-6">{name}</h1>
        <p className="ml-3 text-left text-lg mb-14 overflow-auto">{detail}</p>
        <div className="w-2/3 mx-auto">
          <Artist image={url} name={name} sold={sold} id={id}></Artist>
        </div>
      </div>
    </div>
  );
}
