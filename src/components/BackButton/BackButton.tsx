import {Button, Svg} from "../components";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import BackIcon from "../../assets/icons/arrow.svg"
import {ArrowIcon} from "../../assets/icons/ArrowIcon";

const BackButtonStyled = styled(Button)`
    position: absolute;
    left: 35px;
    top: 45px;
    width: 50px;
    height: 50px;
    border-radius: 16px;
`


export const BackButton = () => {
    const navigation = useNavigate()


    return (
        <BackButtonStyled onClick={()=>{navigation(-1)}}>
            <ArrowIcon color="#757474" size={"25px"}/>
        </BackButtonStyled>
    );
};