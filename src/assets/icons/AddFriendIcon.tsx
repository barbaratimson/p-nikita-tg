import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";


export const AddFriendIcon = ({className, style, color, size}: SvgIconProps) => {
    return (
        <Svg className={className} style={style} width={size ?? 40} height={size ?? 34} fill="none" viewBox="0 0 40 34">
            <path stroke={color ?? "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                  d="M26.667 32v-3.333A6.667 6.667 0 0 0 20 22H8.333a6.667 6.667 0 0 0-6.666 6.667V32m31.666-21.667v10m5-5h-10m-7.5-6.666a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Z"/>
        </Svg>
    );
};