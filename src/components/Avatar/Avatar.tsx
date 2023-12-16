import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import {cn} from "../../lib/utils";
import {FC} from "react";

interface AvatarProps {
    src: string
    name: string
}

interface AvatarGroupProps {
    children: React.ReactNode
}

const Avatar: FC<AvatarProps> = ({src, name}) => {

    const shortName = (name: string) => {
        const [fName, lName] = name.split(" ").map(part => part[0]);
        return lName ? `${fName}${lName}` : fName;
    };
    return (
        <AvatarRoot>
            <AvatarImage src={src} alt={name}/>
            <AvatarFallback>{shortName(name)}</AvatarFallback>
        </AvatarRoot>
    )
}
const AvatarGroup: FC<AvatarGroupProps> = ({children}) => {
    return (
        <div className={'flex -space-x-1'}>
            {children}
        </div>

    )
}


const AvatarRoot = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({className, ...props}, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex h-6 w-6 shrink-0 overflow-hidden rounded-[50%]",
            className
        )}
        {...props}
    />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({className, ...props}, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({className, ...props}, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full text-[11px] items-center justify-center rounded-full bg-actionPrimaryBackground",
            className
        )}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export {Avatar ,AvatarGroup }
