import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"
import {cn} from "../../lib/utils";


const buttonVariants = cva(
    ['rounded-[4px]', 'text-[11.5px]', 'font-inter', 'p-1', 'leading-[16px]', 'text-actionPrimaryText', 'transition-all', 'disabled:opacity-[0.4]', 'focus:ring', 'focus:ring-[1px]', 'focus:ring-blueBorder'],
    {
        variants: {
            variant: {
                default: ['bg-actionSecondaryBackground', 'shadow-action-secondary', 'enabled:hover:bg-actionSecondaryBackgroundHover', 'disabled:bg-background3'],
                outline:
                    ['bg-transparent', 'border', 'border-[1px]', 'border-[#FFFFFF1A]', 'enabled:hover:border-[#FFFFFF26]', 'enabled:hover:bg-background2','disabled:opacity-[0.4]'],
                danger:
                    ['bg-redBackground', 'shadow-action-colored', 'enabled:hover:bg-redBackgroundHover', 'disabled:opacity-[0.4]'],
                ghost: ['bg-transparent', 'enabled:hover:bg-actionSecondaryBackgroundHover', 'disabled:opacity-[0.4]'],
                primary: ["bg-actionPrimaryBackground", 'shadow-action-colored', 'enabled:hover:bg-actionPrimaryBackgroundHover', 'disabled:opacity-[0.4]'],
            },

        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, asChild = false, ...props}, ref) => {
        const ButtonComp = asChild ? Slot : "button"
        return (
            <ButtonComp
                className={cn(buttonVariants({variant, className}))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export {Button, buttonVariants}
