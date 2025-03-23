import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";

export const ArrowIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg className={className} style={style} width="10" height="15" fill="none" viewBox="0 0 10 15">
            <path fill="#232627" d="M7.921 1.481 2 7.028l5.921 5.921"/>
            <path stroke="#757474" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.368" d="M7.921 1.481 2 7.028l5.921 5.921"/>
        </Svg>
    );
};