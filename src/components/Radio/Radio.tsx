import {FC} from "react";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isError?: boolean;
}

export const Radio: FC<RadioProps> = ({id, label, isError=false, ...props}) => {

    return (
        <div className={'w-fit h-fit flex gap-1 items-center'}>
            <label
                className={`radio-box block cursor-pointer relative w-[12px] h-[12px] bg-[#00000026] rounded-[50%] border-[1px] ${isError ? 'border-redBorder radio-error':'border-[#FFFFFF30]'} `}
                htmlFor={id}>
                <input type="radio" className='radio-input w-0 h-0 opacity-0' id={id} {...props}/>
                <span
                    className="radio-dot absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[4px] h-[4px] rounded-[50%]"></span>
            </label>
            {label && <label className={'text-[11.5px] text-text2 leading-[16px]'} htmlFor={id}>{label}</label>}

        </div>
    )
}