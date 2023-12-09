import {FC} from "react";

import {cn} from "../../lib/utils";
import {PinIcon} from "../../assets/icons";


interface EmptyStateProps {
    isNested?: boolean;
    className?: string
    title: string
    body: string
    label: string

}


export const EmptyState: FC<EmptyStateProps> = ({label, className, title, body, isNested = false}) => {

    return (
        <div
            className={cn(`${isNested ? 'bg-transparent' : 'bg-background2'} w-[280px] flex items-center justify-center flex-col p-2 gap-1 rounded-[4px]`, className)}>
            <div><PinIcon/></div>
            <div className={'flex items-center justify-center flex-col'}>
                <h5 className={'text-[11.5px] font-[600] text-text1'}>{title}</h5>
                <p className={'text-[11.5px] text-text2'}>{body}</p>
                <span className={'text-[11.5px] text-blueText'}>{label}</span>
            </div>

        </div>
    )
}