import React from 'react';
import styled from "styled-components";
import Poll from "./components/Poll";

function App() {
    return (
        <MainPage>
            <Title>Food poll</Title>
            <Poll />
        </MainPage>
    );
}

const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: #e2e2e2;
`;


export default App;
