import { useNavigate } from 'react-router-dom';
import './button.css'

interface Props {
  className?: string;
  value: string;
  route?: string;
  onclick?:()=>void;
}

export default function Button({ className: className, value: value, route:route='' ,onclick:onclick}: Props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/${route}`;
    navigate(path);
  }

  return (
    <>
      <button className={className} onClick={route==''? onclick:routeChange}>{value}</button>
    </>
  )
}