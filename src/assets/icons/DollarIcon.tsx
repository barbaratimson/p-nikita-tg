import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";

export const DollarIcon = ({className, style, color, size}: SvgIconProps) => {
    return (
        <Svg className={className} style={style} width={size ?? 24} height={size ?? 40} fill="none" viewBox="0 0 24 40">
            <path stroke={color ?? "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"
                  d="M12 1.667v36.666m8.333-30h-12.5a5.833 5.833 0 1 0 0 11.667h8.334a5.834 5.834 0 0 1 0 11.667H2"/>
        </Svg>
    );
};