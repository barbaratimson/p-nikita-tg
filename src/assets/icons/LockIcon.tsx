import {SvgIconProps} from "../../types/types";

export const LockIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <svg className={className} style={style} width={size ?? 19} height={size ?? 21} fill="none" viewBox="0 0 19 21">
            <path stroke={color ?? "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.563" d="M.917 16.804v-4.091c0-1.784 1.468-3.24 3.291-3.24h10.594c1.812 0 3.292 1.446 3.292 3.24v4.091c0 1.785-1.47 3.24-3.292 3.24H4.208c-1.823 0-3.291-1.445-3.291-3.24Z"/>
            <path stroke={color ?? "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.563" d="M4.135 9.483V6.356c0-2.912 2.407-5.281 5.365-5.281s5.364 2.369 5.364 5.28v3.128H4.135ZM9.5 16.876v-2.645m0 .533c.592 0 1.073-.473 1.073-1.056 0-.584-.48-1.056-1.073-1.056s-1.073.473-1.073 1.056c0 .583.48 1.056 1.073 1.056Z"/>
        </svg>
    );
};