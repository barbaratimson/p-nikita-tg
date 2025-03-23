import {Page} from "../../../Page/Page";
import {Button, FlexColumn, FlexRow, TextElem} from "../../../components";
import {Input} from "../../../Input/Input";
import {EmailIcon} from "../../../../assets/icons/EmailIcon";
import {theme} from "../../../../styles/theme";
import {UserIcon} from "../../../../assets/icons/UserIcon";
import {UserIconMinimal} from "../../../../assets/icons/UserIconMinimal";
import {LockIcon} from "../../../../assets/icons/LockIcon";

export const ResetPass = () => {
    return (
        <Page>
            <FlexColumn style={{marginTop: "70px"}} gap={20}>
                <TextElem size={38} fontWeight={600}>Reset Your Password</TextElem>
                <Input placeholder="Password" type="password"
                       icon={<LockIcon color={theme.colors.fontSecondary}/>}></Input>
                <Input placeholder="Password" type="password"
                       icon={<LockIcon color={theme.colors.fontSecondary}/>}></Input>
                <Button><TextElem size={16} fontWeight={500}>Reset</TextElem></Button>
            </FlexColumn>
        </Page>
    );
}