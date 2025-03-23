import {Page} from "../../../Page/Page";
import styled from "styled-components";
import {ClockIcon} from "../../../../assets/icons/ClockIcon";
import {AddFriendIcon} from "../../../../assets/icons/AddFriendIcon";
import {DollarIcon} from "../../../../assets/icons/DollarIcon";
import {FlexColumn, TextElem} from "../../../components";
import {useState} from "react";

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  gap: 20px;
`

interface StatsData {
    days: number,
    peopleJoined: number,
    amount: number
}

export const Stats = () => {
    const [statsData, setStatsData] = useState<StatsData>({days:0, peopleJoined:0, amount: 0})
    return (
        <Page>
            <StatsWrapper>
                <FlexColumn align={"center"}>
                    <ClockIcon size={"35px"} style={{marginBottom: "15px"}}/>
                    <TextElem size={24} fontWeight={600}>{statsData.days ?? 0}</TextElem>
                    <TextElem size={16} fontWeight={400}>Days we are together!</TextElem>
                </FlexColumn>
                <FlexColumn align={"center"}>
                    <AddFriendIcon style={{marginBottom: "15px", marginLeft:"10px"}}/>
                    <TextElem size={24} fontWeight={600}>{statsData.peopleJoined ?? 0}</TextElem>
                    <TextElem size={16} fontWeight={400}>People joined by YOUR link!</TextElem>
                </FlexColumn>
                <FlexColumn align={"center"}>
                    <DollarIcon style={{marginBottom: "15px"}}/>
                    <TextElem size={24} fontWeight={600}>{statsData.amount ?? 0}$</TextElem>
                    <TextElem size={16} fontWeight={400}>You earned with us!</TextElem>
                </FlexColumn>
            </StatsWrapper>
        </Page>
    );
};