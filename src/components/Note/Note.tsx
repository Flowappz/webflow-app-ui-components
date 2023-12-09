import {FC} from "react";
import {ArrowIcon, CheckIcon, CloseIcon} from "../../assets/icons";
import {cva} from "class-variance-authority";
import {cn} from "../../lib/utils";


interface NoteProps {
    variant?: 'default' | 'success' | 'danger' | 'ghost' | 'primary'
    className?: string
    title: string
    description: string
    linkLabel: string
    href?: string
}


const NoteVariants = cva(
    ['w-[240px] p-2 relative flex items-start gap-2 rounded-[4px]'],
    {
        variants: {
            variant: {
                default: ['bg-background3 shadow-menu-shadow'],
                success: ['bg-greenBackground shadow-menu-shadow'],
                danger: ['bg-redBackground shadow-menu-shadow'],
                ghost: ['bg-transparent'],
                primary: ['bg-actionPrimaryBackground shadow-menu-shadow'],
            },

        },
        defaultVariants: {
            variant: "default",
        },
    }
)
export const Note: FC<NoteProps> = ({variant, description, title, linkLabel, href = '#', className}) => {
    const TextColor = variant === 'ghost' || variant === 'default' || variant === undefined
    return (
        <div className={cn('', NoteVariants({variant, className}))}>
            <button className={'absolute top-2 right-2'}><CloseIcon/></button>
            <button className={'cursor-auto'}><CheckIcon/></button>
            <div className={'flex flex-col gap-1'}>
                <h5 className={'text-[11.5px] font-[600] leading-[16px] tracking-small-letter-spacing'}>{title}</h5>
                <span
                    className={`${TextColor ? 'text-text2' : 'text-actionPrimaryText'} text-[11.5px] leading-[16px] tracking-small-letter-spacing`}>{description}</span>

                <a href={href}
                   className={'flex items-center text-[11.5px] text-text2 leading-[16px] tracking-small-letter-spacing'}>
                    <span className={TextColor ? 'text-blueText' : 'text-actionPrimaryText'}>{linkLabel}</span>
                    <span><ArrowIcon color={TextColor ? '#8AC2FF' : '#ffffff'}/></span>
                </a>
            </div>
        </div>
    )
}