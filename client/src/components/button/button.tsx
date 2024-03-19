import { useNavigate } from 'react-router-dom';
import './button.css'

interface Props {
  className?: string;
  value: string;
  route?: string;
  onclick?:()=>void;
  hidden?:boolean;
}

export default function Button({ className: className, value: value, route:route='' ,onclick:onclick,hidden:hidden}: Props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/${route}`;
    navigate(path);
  }

  return (
    <>
      <button className={className} hidden={hidden} onClick={route==''? onclick:routeChange}>{value}</button>
    </>
  )
}