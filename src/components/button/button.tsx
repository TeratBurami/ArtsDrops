import './button.css'

interface Props{
    className?:string;
    value:string;
  }
  
  export default function Button({className:className,value:value}:Props) {
    return (
      <>
        <button className={className}>{value}</button>
      </>
    )
  }