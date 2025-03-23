import React, {JSX} from "react";
import styled from "styled-components";
import {theme} from "../../styles/theme";
import {useLocation, useNavigate} from "react-router-dom";
import {HomeIcon} from "../../assets/icons/HomeIcon";
import {ClockIcon} from "../../assets/icons/ClockIcon";
import {UserIcon} from "../../assets/icons/UserIcon";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1.2px solid ${theme.colors.border};
  height: 90px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;


const ActiveDot = styled.div`
  background-color: #ffffff;
  border-radius: 3.6px;
  height: 7px;
  position: relative;
  width: 7px;
`;

const NavbarButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 50px;
  height: 50px;
`;
export const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <NavbarWrapper>
            <NavbarButton onClick={()=>{navigate("/")}}>
                <HomeIcon color={location.pathname === "/" ? theme.iconsColors.active : theme.iconsColors.inActive}/>
                {location.pathname === "/" && <ActiveDot/>}
            </NavbarButton>
            <NavbarButton onClick={()=>{navigate("/stats")}}>
                <ClockIcon
                    color={location.pathname === "/stats" ? theme.iconsColors.active : theme.iconsColors.inActive}/>
                {location.pathname === "/stats" && <ActiveDot/>}
            </NavbarButton>
            <NavbarButton onClick={()=>{navigate("/user")}}>
                <UserIcon color={location.pathname === "/user" ? theme.iconsColors.active : theme.iconsColors.inActive}/>
                {location.pathname === "/user" && <ActiveDot/>}
            </NavbarButton>
        </NavbarWrapper>
    );
};

