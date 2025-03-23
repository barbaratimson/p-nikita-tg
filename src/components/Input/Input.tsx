import styled from "styled-components";
import {theme} from "../../styles/theme";
import React, {ChangeEventHandler, JSX, useRef, useState} from "react";
import {EyeOffIcon} from "../../assets/icons/EyeOffIcon";


const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${theme.colors.secondary};
  border-radius: 13px;
  height: 65px;
  padding: 0 20px;
  gap: 10px;
`

const OffIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`

const InputStyled = styled.input`
  border: transparent;
  background: transparent;
  outline: none;
  color: ${theme.colors.fontSecondary};
  font-size: 14px;
  font-weight: 500;
  font-family: ${theme.fonts.main};
  width: 100%;

  &::placeholder {
    color: ${theme.colors.fontSecondary};
  }
`

interface InputProps {
    icon?: JSX.Element
    placeholder?: string
    type?: "password" | "text"
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({icon, type, placeholder, value, onChange}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <InputWrapper>
            {icon}
            <InputStyled value={value} onChange={onChange} placeholder={placeholder ?? "Input"} type={type === "password" ? !showPassword ? "password" : "text" : "text"}/>
            {type === "password" && <OffIconWrapper onClick={()=>{setShowPassword(!showPassword)}}>
                <EyeOffIcon color={theme.colors.fontSecondary}/>
            </OffIconWrapper>}
        </InputWrapper>
    );
};