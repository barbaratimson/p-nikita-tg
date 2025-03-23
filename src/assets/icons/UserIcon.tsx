import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";

export const UserIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg className={className} style={style} width={size ?? 25} height={size ?? 28} fill="none" viewBox="0 0 25 28">
            <path fill={color ?? "currentColor"} fillRule="evenodd"
                  d="M12.052 2.47a4.246 4.246 0 1 0 0 8.492 4.246 4.246 0 0 0 0-8.492ZM6.005 6.716a6.047 6.047 0 1 1 12.094 0 6.047 6.047 0 0 1-12.094 0ZM2.818 20.58c1.87-1.997 4.91-3.5 9.578-3.5 4.667 0 7.708 1.503 9.578 3.5 1.846 1.974 2.473 4.346 2.473 5.977a.9.9 0 0 1-.9.9H1.245a.9.9 0 0 1-.9-.9c0-1.63.626-4.003 2.473-5.976Zm-.596 5.077H22.57a7.435 7.435 0 0 0-1.91-3.845c-1.475-1.576-4.01-2.932-8.263-2.932-4.254 0-6.788 1.356-8.263 2.932a7.435 7.435 0 0 0-1.91 3.845Z"
                  clipRule="evenodd"/>
        </Svg>
    );
};