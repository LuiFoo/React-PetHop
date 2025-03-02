import styled from "styled-components";
import Header from "../reutilizaveis/Header";
import SectionBackGroundChame from "./Section";

const MainContainer = styled.main`
    background-color: #FDFDFF;
`

function ChameUmHop() {
    return(
        <MainContainer>
            <Header />
            <SectionBackGroundChame />
        </MainContainer>
    )
}

export default ChameUmHop;