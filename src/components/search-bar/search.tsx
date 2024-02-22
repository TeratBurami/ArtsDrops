import icon from '../../assets/images/magnifying-glass-solid.svg'

interface Props {
    className?: string;
}

export default function Search(className: Props) {
    

    return (
        <div className={'border border-solid border-black flex rounded-full h-8 w-80 pl-5' + className}>
            <input type='text' className='focus:outline-none text-xs w-10/12' id='seach-input'></input>
            <img src={icon} alt="" className='w-2/12 h-5 m-1 float-end cursor-pointer'/>
        </div>
    )
}