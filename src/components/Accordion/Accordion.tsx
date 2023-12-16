import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

import {ChevronDownIcon} from '@radix-ui/react-icons';
import {cn} from "../../lib/utils";


const AccordionRoot = React.forwardRef<React.ElementRef<typeof Accordion.Root>,
    React.ComponentPropsWithoutRef<typeof Accordion.Root>>(({children, className, ...props}, forwardedRef) => (

    <Accordion.Root
        className={cn('', className)}
        {...props}
        ref={forwardedRef}
    >
        {children}
    </Accordion.Root>

));


const AccordionItem = React.forwardRef<React.ElementRef<typeof Accordion.Item>,
    React.ComponentPropsWithoutRef<typeof Accordion.Item>>(({children, className, ...props}, forwardedRef) => (

    <Accordion.Item
        className={cn('', className)}
        {...props}
        ref={forwardedRef}
    >
        {children}
    </Accordion.Item>

));


const AccordionTrigger = React.forwardRef<React.ElementRef<typeof Accordion.Trigger>,
    React.ComponentPropsWithoutRef<typeof Accordion.Trigger>>(({children, className, ...props}, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={cn('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden/>
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef<React.ElementRef<typeof Accordion.Content>,
    React.ComponentPropsWithoutRef<typeof Accordion.Content>>(({children, className, ...props}, forwardedRef) => (
    <Accordion.Content
        className={cn('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));


AccordionContent.displayName = 'AccordionContent'

export {AccordionRoot,AccordionItem, AccordionTrigger, AccordionContent}