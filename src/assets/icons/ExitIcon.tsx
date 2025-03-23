import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";



export const ExitIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg className={className} style={style} width={size} height={size}>
            <path fill={color ?? "currentColor"} fillRule="evenodd" d="M0 16.332c0-.67.544-1.215 1.215-1.215H22.27a1.215 1.215 0 0 1 0 2.43H1.215A1.215 1.215 0 0 1 0 16.332Z" clipRule="evenodd"/>
            <path fill={color ?? "currentColor"} fillRule="evenodd" d="M14.933 7.374a1.215 1.215 0 0 1 1.718 0l7.984 7.985a1.376 1.376 0 0 1 0 1.947l-7.984 7.984a1.215 1.215 0 0 1-1.718-1.718l7.24-7.24-7.24-7.24a1.215 1.215 0 0 1 0-1.718Z" clipRule="evenodd"/>
            <path fill={color ?? "currentColor"} fillRule="evenodd" d="M21.596 1.215C21.596.544 22.14 0 22.811 0h7.397c.76 0 1.377.616 1.377 1.377v29.91c0 .761-.617 1.378-1.377 1.378H21.73a1.215 1.215 0 1 1 0-2.43h7.424V2.43H22.81c-.67 0-1.215-.544-1.215-1.215Z" clipRule="evenodd"/>
        </Svg>
    );
};