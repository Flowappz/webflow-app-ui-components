import {FC, ReactNode, useState} from "react";
import {cn} from "../../lib/utils";
import {ArrowIcon} from "../../assets/icons";

interface AccordionPops {
    label: string,
    icon?: ReactNode
    className?: string
    content?: string
}

export const Accordion: FC<AccordionPops> = ({label, className, icon = <ArrowIcon/>, content}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return <div className={cn('bg-background1 w-[240px]', className)}>
        <button className={'w-full h-[32px] flex items-center gap-[10px] py-2 pl-2 pr-1'}
                onClick={() => setIsOpen(prev => !prev)}>
            <span className={'flex-1 text-start'}>{label}</span>
            <span className={''}>{icon}</span>
        </button>
        <div className={`transition-all ${isOpen ?'h-fit':'h-0 opacity-0'} p-2`}>{content}</div>
    </div>
}