import {cn} from "../../lib/utils";
import {FC} from "react";
import * as React from "react";
import {cva} from "class-variance-authority";


export interface DividerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    direction?: 'horizontal' | 'vertical';

}

const dividerVariants = cva('bg-[#FFFFFF21]', {
    variants: {
        direction: {
            horizontal: ['w-full' , 'h-[1px]'],
            vertical: ['h-[100px]' , 'w-[1px]'],
        }
    },
    defaultVariants: {
        direction: 'horizontal'
    }
})

export const Divider: FC<DividerProps> = ({className, direction, ...props}) => {
    return (
        <div className={cn('', dividerVariants({className, direction}))} {...props}/>
    )
}