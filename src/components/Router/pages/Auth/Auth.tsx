import {Button, Logo, MainWrapper, TextElem} from "../../../components";
import {theme} from "../../../../styles/theme";
import LogoImage from "../../../../assets/logo.png"
import {Page} from "../../../Page/Page";

export const Auth = () => {
    return (
        <MainWrapper>
            <Page>
                <>
                <Logo src={LogoImage} alt="Logo"></Logo>
                <TextElem size={40}> Welcome to HUITAAAA!</TextElem>
                <Button  background={theme.buttonColors.buttonPrimary}>Log in</Button>
                <Button background={theme.buttonColors.buttonSecondary}>Sign up</Button>
                </>
            </Page>
        </MainWrapper>
    );
};