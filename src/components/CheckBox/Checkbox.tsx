import {FC} from "react";
import {CheckmarkIcon, MinusIcon} from "../../assets/icons";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checkboxId: string
    isError?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({checkboxId, isError, ...props}) => {

    return (
        // switch box
        <label htmlFor={checkboxId}
               className={`checkbox relative w-3 h-3 bg-background2 block ${isError ? 'border-redBorder checkbox-error' :'border-[#FFFFFF30]'} border  rounded-[2px]`}>
            <input type="checkbox" id={checkboxId} className='checkbox-input opacity-0 w-0 h-0' {...props}/>
            {/*Checked*/}
            <span
                className="checkmark opacity-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
<CheckmarkIcon/>
            </span>
            <span
                className="isIndeterminate opacity-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
<MinusIcon/>
            </span>
        </label>
    )
}