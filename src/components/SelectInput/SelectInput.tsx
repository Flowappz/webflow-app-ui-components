import {cn} from "../../lib/utils";
import * as React from "react";


export interface SelectInputProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { content: string; value: number | string }[];

    className?: string;
    isError?: boolean;
}

const SelectInput = React.forwardRef<HTMLSelectElement, SelectInputProps>(({
                                                                               label,
                                                                               options,
                                                                               className,
                                                                               isError,
                                                                               ...rest
                                                                           }, ref) => {
    console.log(isError)
    return (
        <div className={cn("pb-2 m-0 flex flex-col gap-1 w-[240px]", className)}>
            {label && <span className="text-[0.77rem] box-border inline-block text-[#ABABAB] m-0 p-0">{label}</span>}

            <select
                className={`${isError ? 'border-redBorder focus:border-redBorder' : 'focus:border-actionPrimaryBackground border-[#00000000]'} border-[1px] border-transparent  rounded-[4px] disabled:opacity-[0.4] w-full px-[0.3rem] shadow-action-colored bg-[#2B2B2B] text-[0.7rem] leading-[1rem] p-1 focus:outline-none`}
                {...rest}
                ref={ref}
            >
                {options.map((op) => (
                    <option key={op.value} value={op.value}>
                        {op.content}
                    </option>
                ))}
            </select>
        </div>
    );
})

SelectInput.displayName = "select";

export {SelectInput}