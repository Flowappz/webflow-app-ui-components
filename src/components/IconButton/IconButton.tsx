import * as React from "react";
import {cva, VariantProps} from "class-variance-authority";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "../../lib/utils";
import {ThreeDotIcon} from "../../assets/icons";


const buttonVariants = cva(['flex', ' items-center', ' justify-center', 'text-actionPrimaryText', 'transition-all', 'rounded-[2px]', 'focus:ring', 'focus:ring-[1px]', 'focus:ring-blueBorder'], {
    variants: {
        variant: {
            default: ['bg-actionSecondaryBackground', 'shadow-action-secondary', 'enabled:hover:bg-actionSecondaryBackgroundHover', 'disabled:bg-background3', 'disabled:opacity-[0.4]'],
            outline: ['bg-transparent', 'border', 'border-[1px]', 'border-[#FFFFFF1A]', 'enabled:hover:border-[#FFFFFF26]', 'enabled:hover:bg-background2', 'disabled:opacity-[0.4]'],
            danger: ['bg-redBackground', 'shadow-action-colored', 'enabled:hover:bg-redBackgroundHover', 'disabled:opacity-[0.4]'],
            ghost: ['bg-transparent', 'enabled:hover:bg-actionSecondaryBackgroundHover', 'disabled:opacity-[0.4]'],
            primary: ["bg-actionPrimaryBackground", 'shadow-action-colored', 'enabled:hover:bg-actionPrimaryBackgroundHover', 'disabled:opacity-[0.4]'],
        },
        size: {
            sm: ['h-4', 'w-4'],
            lg: ['h-6', 'w-6'],
        }
    },
    defaultVariants: {
        variant: "default",
        size: 'lg'
    },
})


interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}


const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({className, variant, size, children = <ThreeDotIcon/>, asChild = false, ...props}, ref) => {
        const ButtonComp = asChild ? Slot : "button"
        return (
            <ButtonComp
                className={cn(buttonVariants({variant, className, size}))}
                ref={ref}
                {...props}
            >
                {children}
            </ButtonComp>
        )
    }
)
IconButton.displayName = "Button"

export {IconButton, buttonVariants}