import {useEffect, useState} from "react";
import {RgbaColorPicker} from "react-colorful";
import rgbHex from 'rgb-hex';
import {EyedropperIcon} from "../../assets/icons";

export interface ColorInputProps {
    color: string;
    onChange: (val: { rgba: string, hex: string }) => void;

}

interface colorState {

    r: number
    g: number
    b: number
    a: number
}


export default function ColorInput({color, onChange}: ColorInputProps) {
    const inputCommonStyle = 'bg-backgroundInput min-h-[22px] text-[11.5px] placeholder:text-[11.5px] rounded-[4px]  border leading-[16px] file:border-0 file:bg-transparent p-1 placeholder:text-text3 file:text-sm file:font-medium border-border3 focus-visible:outline-none shadow-input-inner disabled:cursor-not-allowed disabled:opacity-[0.4]'
    const [colorState, setColorState] = useState<colorState>({
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 0
    })
    const [hexInputValue, setHexInputValue] = useState('000000')

    function isRGBorRGBA(color: string) {
        const rgbRegex = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/;
        const rgbaRegex = /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)$/;

        return rgbRegex.test(color) || rgbaRegex.test(color);
    }


    useEffect(() => {
        if (isRGBorRGBA(color)) {
            const convertedColor = hexWithAlphaToRGBA(`#${rgbHex(color)}`)
            setColorState(convertedColor)
        } else if (!isRGBorRGBA(color)) {
            const convertedColor = hexWithAlphaToRGBA(color)
            setColorState(convertedColor)
        }
    }, [color])


    function hexWithAlphaToRGBA(hexWithAlpha: string) {

        hexWithAlpha = hexWithAlpha.replace(/^#/, '');

        // Parse the hex string and extract the RGBA values
        const bigint = parseInt(hexWithAlpha, 16);

        const r = (bigint >> 24) & 255;
        const g = (bigint >> 16) & 255;
        const b = (bigint >> 8) & 255;
        const a = (bigint & 255) / 255; // Normalize alpha to the range [0, 1]


        const alpha = hexWithAlpha.length === 6 ? 1 : Math.round(a * 100) / 100;


        // Create the RGBA object
        return {
            r: r,
            g: g,
            b: b,
            a: alpha
        };
    }

    const handleOnChange = (color: any) => {
        setColorState(color)
        setHexInputValue(rgbHex(color.r, color.g, color.b, color.a))
        const res = {
            rgba: `rgba(${color.r}, ${color.g}, ${color.b},${color.a})`,
            hex: `#${rgbHex(color.r, color.g, color.b, color.a)}`
        }
        onChange(res)
    }

    const HandleRgbOnChange = (event: any, key: string) => {
        setColorState({...colorState, [key]: event.target.value})
    }

    const HandleHexOnChange = (e: any) => {
        const convertedColor = hexWithAlphaToRGBA(e.target.value)
        setColorState(convertedColor)

    }
    const copyColor = async (e:any)=>{
       await navigator.clipboard.writeText(`#${hexInputValue}`)
    }

    return (
        <div className='bg-[#1E1E1E] w-[241px] p-2 rounded-[4px] overflow-hidden'>
            <RgbaColorPicker color={colorState} onChange={handleOnChange}/>
            <button onClick={copyColor} className={'bg-actionSecondaryBackground rounded-[4px] z-30 relative mt-[-29px] flex items-center justify-center shadow-action-colored w-[32px] h-[32px]'}><EyedropperIcon/></button>
            <div className={'w-full h-[1px] bg-[#FFFFFF21] my-2'}></div>
            <div className={'flex items-center justify-between'}>
                <input value={`#${hexInputValue}`} onChange={HandleHexOnChange}
                       className={`w-[58px] ${inputCommonStyle}`}/>
                <input value={colorState.r} onChange={(e) => HandleRgbOnChange(e, 'r')}
                       className={`w-[35px] ${inputCommonStyle}`}/>
                <input value={colorState.g} onChange={(e) => HandleRgbOnChange(e, 'g')}
                       className={`w-[35px] ${inputCommonStyle}`}/>
                <input value={colorState.b} onChange={(e) => HandleRgbOnChange(e, 'b')}
                       className={`w-[35px] ${inputCommonStyle}`}/>
                <input value={colorState.a} onChange={(e) => HandleRgbOnChange(e, 'a')}
                       className={`w-[35px] ${inputCommonStyle}`}/>
            </div>
            <div className={'flex items-center justify-between mt-2'}>
                <p className={'text-[11.4px] w-[58px] text-center'}>HEX</p>
                <div className={'w-[118px] flex items-center justify-around bg-background2 rounded-[2px]'}>
                    <p className={'text-[11.4px]'}>R</p>
                    <p className={'text-[11.4px]'}>G</p>
                    <p className={'text-[11.4px]'}>B</p>
                </div>
                <p className={'w-[35px] text-[11.4px] text-center'}>A</p>
            </div>
        </div>
    );
}
