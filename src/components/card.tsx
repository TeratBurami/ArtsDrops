import Button from "../components/button/button";

interface Props{
    url?:string;
    route?:string;
}

export default function Card({url='https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg',route:route}:Props) {
  return (
    <div className="card w-fit mx-auto rounded-lg shadow-lg shadow-slate-500 bg-white scale-75 hover:scale-100 transition ease-in delay-200">
      {/* <img src="https://i.pinimg.com/474x/65/a1/9d/65a19d851442d5816097cadbae1c34fa.jpg" alt="" className='w-50'/>     */}
      <div className="img w-auto h-[300px] mx-auto mb-6">
        <img
          src={url}
          alt=""
          className="mx-auto rounded-lg object-cover w-full h-[300px] rounded-b-none"
        />
      </div>
      <div className="info flex flex-col h-[300px]">
        <h1 className="ml-3 text-left font-semibold text-2xl mb-6">Van gogh</h1>
        <p className="ml-3 text-left text-md mb-20 overflow-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Button
          value="More Details"
          className="submit mx-auto font-semibold h-8 w-3/4 mb-5"
          route={route}
        ></Button>
      </div>
    </div>
  );
}
