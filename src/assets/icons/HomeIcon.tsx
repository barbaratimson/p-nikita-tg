import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";


export const HomeIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg className={className} style={style} width={size ?? 29} height={size ?? 30} fill="none" viewBox="0 0 29 30">
            <path fill={color ?? "currentColor"} fillRule="evenodd"
                  d="M3.65 11.587a3.604 3.604 0 0 0-1.194 2.679v9.207a3.604 3.604 0 0 0 3.604 3.604h16.82a3.604 3.604 0 0 0 3.604-3.604v-9.207a3.604 3.604 0 0 0-1.193-2.679L16.88 4.02a3.604 3.604 0 0 0-4.822 0L3.65 11.587Zm9.618 4.678a2.403 2.403 0 0 0-2.403 2.402v4.806c0 .663.538 1.201 1.202 1.201h4.805a1.2 1.2 0 0 0 1.201-1.201v-4.805a2.403 2.403 0 0 0-2.402-2.403h-2.403Z"
                  clipRule="evenodd"/>
        </Svg>

    );
};