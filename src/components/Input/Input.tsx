import * as React from "react"
import {cn} from "../../lib/utils";


export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type = 'text', isError, ...props}, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    `${isError ? 'border-redBorder focus-visible:border-redBorder' : 'border-border3 focus-visible:border-blueBorder'} w-full bg-backgroundInput min-h-[24px] text-[11.5px] placeholder:text-[11.5px] rounded-[4px]  border leading-[16px] file:border-0 file:bg-transparent p-1 placeholder:text-text3 file:text-sm file:font-medium focus-visible:outline-none shadow-input-inner disabled:cursor-not-allowed disabled:opacity-[0.4]`,
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export {Input}
