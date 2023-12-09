import {FC} from "react";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement>{
    switchId:string
}
export const Switch:FC<SwitchProps> = ({switchId,...props}) => {

    return (
        // switch box
        <label className="switch-box bg-background3 cursor-pointer border-[1px] border-[#FFFFFF30] transition-all relative w-[34px] h-[22px] inline-block rounded-[13px]" htmlFor={switchId}>
            <input type="checkbox" id={switchId} className='switch-input transition-all opacity-0 w-0 h-0' {...props}/>
            {/*slider*/}
            <span
                className="switch-slider before:transition-all absolute top-0 left-0 right-0 bottom-0 before:absolute before:content-[''] before:left-[2px] before:rounded-[13px] before:bottom-[2px] before:bg-[#fff] before:w-[16px] before:h-[16px]"></span>
        </label>
    )
}