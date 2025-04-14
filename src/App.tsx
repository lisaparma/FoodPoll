import React from 'react';
import styled from "styled-components";
import PollCard from "./components/pollCard/PollCard";
import MainButtons from "./components/mainCard/MainButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey, blueGrey,  } from '@mui/material/colors';
import { HashRouter, Route, Routes } from "react-router-dom";
import ResultsCard from "./components/resultsCard/ResultsCard";
// @ts-ignore
import backgroundImg from "./assets/food.png";

function App() {
    const theme = createTheme({
        palette: {
            primary: blueGrey,
            secondary: grey
        },
    });
    
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Page>
                    <Routes>
                        <Route path="/" element={<MainButtons />} />
                        <Route path="/:pollId" element={<PollCard />} />
                        <Route path="/:pollId/results" element={<ResultsCard />} />
                    </Routes>
                </Page>
            </HashRouter>
        </ThemeProvider>
    );
}

const Page = styled.div`
    background-image: url(${backgroundImg});
    background-repeat: repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

export default App;
