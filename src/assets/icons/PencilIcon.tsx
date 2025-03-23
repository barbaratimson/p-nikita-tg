import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";

export const PencilIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg className={className} style={style} width={size} height={size}>
            <path fill={color ?? "currentColor"} d="m10.73 21.272-6.214 1.594a.583.583 0 0 1-.71-.71L5.4 15.942a.584.584 0 0 1 .153-.267L17.148 4.08a.583.583 0 0 1 .825 0l4.62 4.619a.583.583 0 0 1 0 .825L10.996 21.119a.583.583 0 0 1-.267.153Z"/>
            <path fill={color ?? "currentColor"} fillRule="evenodd" d="m18.591 3.46 4.62 4.62c.57.57.57 1.493 0 2.062L11.616 21.738a1.46 1.46 0 0 1-.669.381l-6.213 1.595a1.458 1.458 0 0 1-1.775-1.775l1.594-6.214c.065-.253.197-.484.381-.67L16.53 3.46a1.46 1.46 0 0 1 2.063 0Zm-1.03 1.444L6.227 16.237l-1.452 5.659 5.659-1.452L21.767 9.11 17.56 4.904Z" clipRule="evenodd"/>
            <path fill={color ?? "currentColor"} fillRule="evenodd" d="M18.18 8.493a.875.875 0 0 1 0 1.237l-7 7a.875.875 0 1 1-1.237-1.237l7-7a.875.875 0 0 1 1.238 0ZM7.803 17.632a.875.875 0 0 1 1.238 0l1.166 1.166a.875.875 0 0 1-1.237 1.238l-1.167-1.167a.875.875 0 0 1 0-1.237ZM20.054.715a.875.875 0 0 1 1.238 0l4.666 4.666a.875.875 0 1 1-1.237 1.238l-4.667-4.667a.875.875 0 0 1 0-1.237Z" clipRule="evenodd"/>
        </Svg>
    );
};