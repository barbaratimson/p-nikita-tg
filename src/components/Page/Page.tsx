import styled from "styled-components";
import {JSX} from "react";
import {FlexContainer, TextElem} from "../components"

const PageWrapper = styled(FlexContainer)`
  width: 100dvw;
  height: 100dvh;
  padding: 35px;
  gap: 20px;
  flex-direction: column;
`

const Title = styled(TextElem)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 35px;
`

const ChildrenWrapper = styled.div`
  margin-bottom: 55px;
  height: 100%;
`

interface PageProps {
    title?: string
    children?: JSX.Element
}

export const Page = ({children, title}: PageProps) => {
    return (
        <PageWrapper>
            <Title>{title}</Title>
            <ChildrenWrapper>
                {children}
            </ChildrenWrapper>
        </PageWrapper>
    );
};