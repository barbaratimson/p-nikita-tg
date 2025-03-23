import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";



export const EmailIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg className={className} style={style}  width={size ?? 20} height={size ?? 16} fill="none" viewBox="0 0 20 16">
            <path stroke={color ?? "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.665 15.08H3.335C2.051 15.08 1 14.004 1 12.666V3.414C1 2.086 2.041 1 3.335 1h13.33C17.949 1 19 2.076 19 3.414v9.252c0 1.338-1.041 2.414-2.335 2.414Z"/>
            <path stroke={color ?? "currentColor"}  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m17.998 1.774-6.685 6.86c-.749.773-1.878.773-2.636 0l-6.685-6.86m10.08 6.186 5.926 5.943m-15.996 0L7.995 8.04"/>
        </Svg>
    );
};