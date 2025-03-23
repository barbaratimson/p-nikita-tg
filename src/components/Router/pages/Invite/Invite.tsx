import {Page} from "../../../Page/Page";
import {FlexColumn, TextElem} from "../../../components";
import InviteFriendImage from "../../../../assets/inviteFriends.svg"
import styled from "styled-components";
import {CopyIcon} from "../../../../assets/icons/CopyIcon";

const Image = styled.img`
  width: 350px;
  height: 350px;
`

export const Invite = () => {
    return (
        <Page title="invite friends">
            <FlexColumn align={"center"} gap={40}>
                <Image src={InviteFriendImage} alt="Invite friend"></Image>
                <TextElem>Refer A Friend</TextElem>
                <TextElem>Share Your Promo Code & Get $2.5 For Each Friend</TextElem>
                <CopyCode code={"@myfriend"}></CopyCode>
            </FlexColumn>
        </Page>
    );
};

interface CopyCodeProps {
    code: string
}

const CopyCodeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  border: 2px solid #FFFFFF;
  border-radius: 15px;
`

const CopyCodeTextWrapper = styled.div`
  flex-grow: 1;
`

const CopyCode = ({code}: CopyCodeProps) => {
    return (
        <CopyCodeWrapper>
            <CopyCodeTextWrapper>
            <TextElem size={17}>{code}</TextElem>
            </CopyCodeTextWrapper>
                <CopyIcon/>
        </CopyCodeWrapper>
    )
}