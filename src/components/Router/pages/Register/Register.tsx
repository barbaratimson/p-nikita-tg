import {Page} from "../../../Page/Page";
import {Button, FlexColumn, FlexRow, TextElem} from "../../../components";
import {Input} from "../../../Input/Input";
import {EmailIcon} from "../../../../assets/icons/EmailIcon";
import {theme} from "../../../../styles/theme";
import {UserIcon} from "../../../../assets/icons/UserIcon";
import {UserIconMinimal} from "../../../../assets/icons/UserIconMinimal";
import {LockIcon} from "../../../../assets/icons/LockIcon";
import styled from "styled-components";

const BottomText = styled(FlexRow)`
    
`

export const Register = () => {
    return (
        <Page>
            <FlexColumn style={{height:"100%"}} gap={20}>
                <TextElem size={38} fontWeight={600}>Create Your Account</TextElem>
                <Input placeholder="Full Name" icon={<UserIconMinimal color={theme.colors.fontSecondary}/>}></Input>
                <Input placeholder="Enter your email" icon={<EmailIcon color={theme.colors.fontSecondary}/>}></Input>
                <Input placeholder="Password" type="password"
                       icon={<LockIcon color={theme.colors.fontSecondary}/>}></Input>
                <Button><TextElem size={16} fontWeight={500}>Register</TextElem></Button>
                <FlexRow style={{marginTop:"auto"}} justify={"center"} gap={10}>
                    <TextElem size={16} color={theme.colors.fontSecondary}>Already Have An Account?</TextElem>
                    <TextElem size={16} color={theme.colors.font}>Sign In</TextElem>
                </FlexRow>
            </FlexColumn>
        </Page>
    );
}