import {Page} from "../../../Page/Page";
import {Button, FlexColumn, FlexRow, TextElem} from "../../../components";
import {Input} from "../../../Input/Input";
import {EmailIcon} from "../../../../assets/icons/EmailIcon";
import {theme} from "../../../../styles/theme";
import {UserIcon} from "../../../../assets/icons/UserIcon";
import {UserIconMinimal} from "../../../../assets/icons/UserIconMinimal";
import {LockIcon} from "../../../../assets/icons/LockIcon";

export const Login = () => {
    return (
        <Page>
            <FlexColumn style={{height:"100%"}} gap={20}>
                <TextElem size={38} fontWeight={600}>Login Your Account</TextElem>
                <Input placeholder="Enter your email" icon={<EmailIcon color={theme.colors.fontSecondary}/>}></Input>
                <Input placeholder="Password" type="password"
                       icon={<LockIcon color={theme.colors.fontSecondary}/>}></Input>
                <TextElem style={{textAlign: "end"}} color={theme.colors.fontSecondary} size={14} fontWeight={500}>Forget
                    Password ?</TextElem>
                <Button><TextElem size={16} fontWeight={500}>Login</TextElem></Button>
                <FlexRow style={{marginTop:"auto"}} justify={"center"} gap={10}>
                    <TextElem size={16} color={theme.colors.fontSecondary}>Create New Account?</TextElem>
                    <TextElem size={16} color={theme.colors.font}>Sign up</TextElem>
                </FlexRow>
            </FlexColumn>
        </Page>
    );
}