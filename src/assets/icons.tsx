import React from "react";

export const ThreeDotIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <path
                fill="#fff"
                d="M3 8a1 1 0 112 0 1 1 0 01-2 0zM7 8a1 1 0 112 0 1 1 0 01-2 0zM11 8a1 1 0 112 0 1 1 0 01-2 0z"
            ></path>
        </svg>
    );
}


export const ArrowIcon = ({color = '#BDBDBD'}: { color?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            fill="none"
            viewBox="0 0 17 16"

        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M9.351 8L6.705 5.354l.707-.708L10.765 8l-3.353 3.354-.707-.707L9.35 8z"
                clipRule="evenodd"

            ></path>
        </svg>
    );
}


export const CloseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <path
                fill="#F5F5F5"
                fillRule="evenodd"
                d="M8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.708.708L7.293 8l-3.647 3.646.708.708L8 8.707l3.646 3.647.708-.707L8.707 8z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}


export const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <path
                fill="#F5F5F5"
                fillRule="evenodd"
                d="M13.354 4.354l-6.5 6.5a.5.5 0 01-.707 0l-3.5-3.5.707-.708L6.5 9.793l6.146-6.147.708.708z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}


export const PinIcon = ({color = '#BDBDBD'}: { color?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            fill="none"
            viewBox="0 0 17 16"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M9.912 2.146a.5.5 0 00-.828.196l-.921 2.763-2.763.92a.5.5 0 00-.195.829L6.85 8.5l-3.793 3.793V13h.707l3.793-3.793 1.647 1.647a.5.5 0 00.827-.196l.921-2.763 2.763-.92a.5.5 0 00.196-.829l-4-4zm-.88 3.512l.745-2.232 2.856 2.856-2.233.744a.5.5 0 00-.316.316L9.34 9.574 6.484 6.72l2.232-.745a.5.5 0 00.316-.316z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}


export const EyedropperIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            fill="none"
            viewBox="0 0 17 16"
        >
            <path
                fill="#fff"
                d="M14.572 1.626a1.686 1.686 0 00-2.378 0L10.27 3.55 9.083 2.36a.563.563 0 00-.793 0l-.79.793a.563.563 0 000 .793L12.253 8.7a.563.563 0 00.793 0l.793-.792a.563.563 0 000-.793l-1.19-1.19 1.923-1.922a1.686 1.686 0 000-2.377zM3.079 10.74l-.197 1.388-1.585 1.585 1.19 1.19 1.584-1.586 1.388-.197 3.96-3.965-2.376-2.377-3.964 3.962z"
            ></path>
        </svg>
    );
}


export const CheckmarkIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path d="M1.01465 3.5L3.01465 5.5L8.01465 0.5" stroke="white" strokeWidth="1.25"/>
        </svg>
    )
}
export const MinusIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="2" viewBox="0 0 7 2" fill="none">
            <path d="M0.514648 1H6.51465" stroke="white" strokeWidth="1.25"/>
        </svg>
    )
}
