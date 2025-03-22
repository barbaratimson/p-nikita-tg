import {Button, MainWrapper, PageWrapper, Text} from "../components";
import {theme} from "../../styles/theme";
import styled from "styled-components";
import LogoImage from "../../assets/icons/logo.png"

const Logo = styled.img`
  width: 350px;
  aspect-ratio: 1/1;
`

export const Auth = () => {
    return (
        <MainWrapper>
            <PageWrapper direction="column">
                <Logo src={LogoImage} alt="Logo"></Logo>
                <Text size={40}> Welcome to HUITAAAA!</Text>
                <Button background={theme.buttonColors.buttonPrimary}>Log in</Button>
                <Button background={theme.buttonColors.buttonSecondary}>Sign up</Button>
            </PageWrapper>
        </MainWrapper>
    );
};