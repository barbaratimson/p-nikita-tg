import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";

export const EyeOffIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg  className={className} style={style} width={size ?? 20} height={size ?? 20} fill="none" viewBox="0 0 20 20">
            <path stroke={color ?? "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.52 16.573c-.81.207-1.65.305-2.52.305-3.27 0-6.2-1.506-8.2-3.888-1.4-1.663-1.4-4.233 0-5.886.16-.197.34-.384.52-.571M18.2 12.99c-.8.945-1.75 1.752-2.8 2.382L4.59 4.722A10.359 10.359 0 0 1 10 3.214c3.27 0 6.2 1.506 8.2 3.889 1.4 1.653 1.4 4.232 0 5.886Z"/>
            <path stroke={color ?? "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.08 10.047c0 .837-.35 1.595-.9 2.146L7.82 7.9A3.075 3.075 0 0 1 10 7.015c1.71 0 3.08 1.349 3.08 3.032Z"/>
            <path stroke={color ?? "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m.75.941 3.84 3.78 3.23 3.18 4.36 4.292 3.23 3.18 3.84 3.78"/>
        </Svg>
    );
};