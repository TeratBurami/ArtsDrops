import { useNavigate } from 'react-router-dom';
import './button.css'


interface Props {
  className?: string;
  // value = showing message
  value: string;
  // route for routing to some page
  route?: string;
  //onclick() handle the click event
  onclick?:()=>void;
  //hidden use for hide this element
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