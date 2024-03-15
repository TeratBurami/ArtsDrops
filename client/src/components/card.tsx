import Artist from "./overlay/Artist";

interface Props{
    url?:string;
    name:string;
    detail:string;
    id:number;
    sold:number;
}

export default function Card({url='https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg',name:name,detail:detail,sold:sold,id:id}:Props) {
  return (
    <div className="card w-1/2 mx-auto rounded-lg shadow-lg shadow-slate-500 bg-white scale-75 hover:scale-100 transition ease-in delay-200">
      {/* <img src="https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg" alt="" className='w-50'/>     */}
      <div className="img w-auto h-[300px] mx-auto mb-6">
        <img
          src={url}
          alt=""
          className="mx-auto rounded-lg object-cover w-full h-[300px] rounded-b-none"
        />
      </div>
      <div className="info  h-[300px]">
        <h1 className="ml-3 text-left font-semibold text-2xl mb-6">{name}</h1>
        <p className="ml-3 text-left text-md mb-40 overflow-auto">{detail}</p>
        <div className="w-2/3 mx-auto">
          <Artist image={url} name={name} sold={sold} id={id}></Artist>
        </div>
      </div>
    </div>
  );
}
