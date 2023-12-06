import * as React from "react"
import {cn} from "../../lib/utils";


export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    isError?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({className, isError = false, ...props}, ref) => {
        return (
            <textarea
                className={cn(
                    `${isError ? 'border-redBorder focus-visible:border-redBorder' : 'border-border3 focus-visible:border-blueBorder'} text-text1 w-full shadow-input-inner leading-[16px] p-2 border-[1px] rounded-[4px] bg-backgroundInput placeholder:text-text3 text-[11.5px] placeholder:text-[11.5px] resize-none min-h-[80px] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-[0.4]`,
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = "Textarea"

export {Textarea}
