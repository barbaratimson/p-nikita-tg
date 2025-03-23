import {Svg} from "../../components/components";
import {SvgIconProps} from "../../types/types";



export const WalletIcon = ({className, style, color,size}:SvgIconProps) => {
    return (
        <Svg className={className} style={style} width={size} height={size}>
            <path fill={color ?? "currentColor"} d="M.843 11.375A3.375 3.375 0 0 1 4.218 8h15.75a3.375 3.375 0 0 1 3.375 3.375v9a3.375 3.375 0 0 1-3.375 3.375H4.218a3.375 3.375 0 0 1-3.375-3.375v-9Z"/>
            <path fill={color ?? "currentColor"} fillRule="evenodd" d="M-.001 11.375a4.219 4.219 0 0 1 4.219-4.219h15.75a4.219 4.219 0 0 1 4.218 4.219v9a4.219 4.219 0 0 1-4.218 4.219H4.218a4.219 4.219 0 0 1-4.219-4.219v-9Zm4.219-2.531a2.531 2.531 0 0 0-2.531 2.531v9a2.531 2.531 0 0 0 2.53 2.531h15.75a2.531 2.531 0 0 0 2.532-2.531v-9a2.531 2.531 0 0 0-2.531-2.531H4.218Z" clipRule="evenodd"/>
            <path fill={color ?? "currentColor"} d="M18.413 1.894 4.179 7.784c-.114.047-.08.216.043.216h15.633c.063 0 .113-.05.113-.112V2.933c0-.801-.814-1.346-1.555-1.04Z"/>
            <path fill={color ?? "currentColor"} fillRule="evenodd" d="M19.124 2.933c0-.2-.203-.336-.389-.26L7.901 7.156h11.223V2.933ZM18.09 1.114a1.969 1.969 0 0 1 2.722 1.82v4.954a.956.956 0 0 1-.957.956H4.223c-1.047 0-1.333-1.44-.366-1.84l14.234-5.89.32.775-.32-.775ZM2.249 13.625c0-.466.378-.844.844-.844h18a.844.844 0 0 1 0 1.688h-18a.844.844 0 0 1-.844-.844Zm1.125 5.625c0-.466.378-.844.844-.844h6.75a.844.844 0 0 1 0 1.688h-6.75a.844.844 0 0 1-.844-.844Z" clipRule="evenodd"/>
        </Svg>
    );
};