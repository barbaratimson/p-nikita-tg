import styled from "styled-components";
import {theme} from "../styles/theme";
import {SVGAttributes} from "react";
interface ButtonOptions {
    width?: number
    background?: string
}

export const Button = styled.button<ButtonOptions>`
  width: ${({width}) => width ?? "100%"};
  color: ${theme.colors.font};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({background}) => background ?? theme.buttonColors.buttonPrimary};
  padding: 15px;
  border-radius: 16px;
  outline: transparent;
  border: transparent;
`;


interface TextOptions {
    size?: number
    color?: string
    fontWeight?: number
}
export const TextElem = styled.div<TextOptions>`
    color: ${({color}) => color ?? theme.colors.font};
    font-family: ${theme.fonts.main};
    font-size: ${({size}) => (size ?? 24) + "px" };
    font-weight: ${({fontWeight}) => fontWeight ?? 400};
    letter-spacing: 0;
`;

export interface FlexProps {
    direction?: 'row' | 'column';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    gap?: number;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export const FlexContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify = "flex-start" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  gap: ${({ gap= 0 }) => gap + "px"};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
`;

export const FlexRow = styled(FlexContainer)`
  flex-direction: row;
`
export const FlexColumn = styled(FlexContainer)`
  flex-direction: column;
`

export const MainWrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  background: ${theme.colors.bg};
`



export const Svg = styled.svg.attrs({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  color: ${theme.iconsColors.active};
`


export const Logo = styled.img`
  width: 350px;
  aspect-ratio: 1/1;
  mix-blend-mode: hard-light;
`


