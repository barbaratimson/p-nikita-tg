import {Button, FlexColumn, Logo, TextElem} from "../../../components";
import LogoImage from "../../../../assets/logo.png";
import {theme} from "../../../../styles/theme";
import {Page} from "../../../Page/Page";


export const Home = () => {
    return (
        <Page>
            <FlexColumn align={"center"} style={{height:"100%"}}>
            <TextElem size={40}> Welcome to HUITAAAA!</TextElem>
            <Logo style={{marginTop: "20px"}} src={LogoImage} alt="Logo"></Logo>
            <Button style={{marginTop:"auto", marginBottom:"25px"}} background={theme.buttonColors.buttonSecondary}>Get started</Button>
            </FlexColumn>
        </Page>
    );
};