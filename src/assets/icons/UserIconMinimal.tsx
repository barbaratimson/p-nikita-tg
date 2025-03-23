import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";

export const UserIconMinimal = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg className={className} style={style} width={size ?? 20} height={size ?? 22} fill="none" viewBox="0 0 20 22">
            <path stroke={color ?? "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.68 9.504c2.158 0 3.907-1.722 3.907-3.846s-1.75-3.846-3.907-3.846-3.907 1.722-3.907 3.846 1.75 3.846 3.907 3.846ZM1.787 20.188v-2.192c0-2.56 2.106-4.62 4.693-4.62h7.027c2.6 0 4.693 2.074 4.693 4.62v2.192"/>
        </Svg>
    );
};