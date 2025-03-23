import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";

export const ClockIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg className={className} style={style} width={size ?? 25} height={size ?? 26} fill="none" viewBox="0 0 25 26">
            <path fill={color ?? "currentColor"} fillRule="evenodd" d="M12.615 2.55c-5.797 0-10.513 4.716-10.513 10.513s4.716 10.513 10.513 10.513 10.513-4.716 10.513-10.513S18.412 2.55 12.615 2.55Zm0 22.882c-6.82 0-12.369-5.549-12.369-12.369C.246 6.243 5.795.695 12.615.695c6.82 0 12.368 5.548 12.368 12.368s-5.548 12.369-12.368 12.369Z" clipRule="evenodd"/>
            <path fill={color ?? "currentColor"} fillRule="evenodd" d="M16.859 17.63a.935.935 0 0 1-.475-.13l-4.664-2.78a.933.933 0 0 1-.453-.798V7.925a.928.928 0 0 1 1.855 0v5.47l4.212 2.51a.93.93 0 0 1-.476 1.725Z" clipRule="evenodd"/>
        </Svg>

    );
};