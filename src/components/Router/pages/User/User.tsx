import {FlexColumn, FlexRow, TextElem} from "../../../components";
import {theme} from "../../../../styles/theme";
import {EyeIcon} from "../../../../assets/icons/EyeIcon";
import {Page} from "../../../Page/Page";
import styled from "styled-components";
import {WalletIcon} from "../../../../assets/icons/WalletIcon";
import {PencilIcon} from "../../../../assets/icons/PencilIcon";
import {ExitIcon} from "../../../../assets/icons/ExitIcon";

const IconWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  margin-right: 20px;
`
export const User = () => {
    return (
        <Page title="Preference">
            <FlexColumn gap={40}>
                <FlexRow>
                    <IconWrapper>
                        <EyeIcon size={"25px"}/>
                    </IconWrapper>
                    <FlexColumn>
                        <TextElem size={19} color={theme.colors.font}>Password</TextElem>
                        <TextElem size={13.5} color={theme.colors.fontAccent}>Change your password</TextElem>
                    </FlexColumn>
                </FlexRow>
                <FlexRow>
                    <IconWrapper>
                        <WalletIcon size={"25px"}/>
                    </IconWrapper>
                    <FlexColumn>
                        <TextElem size={19} color={theme.colors.font}>Payment methods</TextElem>
                        <TextElem size={13.5} color={theme.colors.fontAccent}>TON only</TextElem>
                    </FlexColumn>
                </FlexRow>

                <FlexRow>
                    <IconWrapper>
                        <PencilIcon size={"25px"}/>
                    </IconWrapper>
                    <FlexColumn>
                        <TextElem size={19} color={theme.colors.font}>Invite Your Friends</TextElem>
                        <TextElem size={13.5} color={theme.colors.fontAccent}>Get $2.5 For Each Invitation!</TextElem>
                    </FlexColumn>
                </FlexRow>


                <FlexRow style={{marginLeft:"15px"}}>
                    <IconWrapper>
                        <ExitIcon size={"40px"}/>
                    </IconWrapper>
                    <TextElem size={19} color={theme.colors.font}>Logout</TextElem>
                </FlexRow>
            </FlexColumn>
        </Page>
    );
};
