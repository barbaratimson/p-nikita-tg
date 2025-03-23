import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";



export const CopyIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg className={className} style={style} width={size ?? 25} height={size ?? 26} fill="none" viewBox="0 0 25 26">
            <path fill={color ?? "currentColor"} d="M.604 8.75A8.146 8.146 0 0 1 8.75.604h9.935a1.062 1.062 0 1 1 0 2.125H8.75a6.02 6.02 0 0 0-6.02 6.02v10.069a1.063 1.063 0 0 1-2.126 0V8.75Z"/>
            <path fill={color ?? "currentColor"} d="M22.07 5.624a62.86 62.86 0 0 0-13.89 0 2.849 2.849 0 0 0-2.513 2.493 60.323 60.323 0 0 0 0 14.015 2.849 2.849 0 0 0 2.513 2.494c4.591.513 9.3.513 13.89 0a2.849 2.849 0 0 0 2.514-2.494 60.382 60.382 0 0 0 0-14.015 2.849 2.849 0 0 0-2.513-2.493Z"/>
        </Svg>
    );
};